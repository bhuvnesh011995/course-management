const routes = require("express").Router();
const writeExcelFile = require("write-excel-file/node");
const fs = require("fs");
const moment = require("moment");
const { upload } = require("../utils/upload.utils");

routes.post("/excel", upload.single("file"), async (req, res) => {
  try {
    const tongaTagBuffer = await fs.readFileSync(
      "constants.js\\tongaG.png",
      (err) => {
        if (err) console.error(err);
        else console.log("file readed");
      }
    );

    const { body, file } = req;

    const { dataObj, batchNumber, cetCode, tableData } = body;

    const keys = Object.keys(dataObj[0]);
    // keys.push("tagImg");
    // const tagImage = {
    //   buffer: tongaTagBuffer,
    //   extension: "png",
    //   contentType: "image/png",
    // };
    // dataObj["tagImg"] = tagImage;
    const keyArr = keys.map((key, index) => {
      const keyObj = {
        column: key,
        value: key,
        fontWeight: "bold",
        align: "center",
        height: 50,
        wrap: true,
        width: 4,
        fontSize: 14,
        alignVertical: "center",
      };

      return keyObj;
    });

    const attendanceData = [keyArr].concat(
      dataObj.map((obj, index) =>
        keys.map((key) => {
          const objType = typeof obj[key];
          const dataObj = {
            type: objType == "string" ? String : Number,
            value: obj[key],
            column: obj[key],
            align: "center",
            alignVertical: "center",
            height: 30,
            fontSize: 15,
          };
          return dataObj;
        })
      )
    );

    const codeData = [
      [
        {
          column: "Trade Category  :  ",
          value: "Trade Category  :  ",
          align: "left",
          height: 25,
          wrap: true,
          width: 4,
          fontSize: 16,
          alignVertical: "center",
        },
        {
          column: tableData[0].tradeType,
          value: tableData[0].tradeType,
          align: "center",
          height: 25,
          wrap: true,
          width: 4,
          fontSize: 13,
          alignVertical: "center",
        },
        {},
        {},
        {
          column: "CET Code : ",
          value: "CET Code : ",
          align: "left",
          height: 25,
          wrap: true,
          width: 4,
          fontSize: 16,
          alignVertical: "center",
        },
        {
          column: cetCode,
          value: cetCode,
          align: "left",
          height: 25,
          wrap: true,
          width: 4,
          fontSize: 13,
          alignVertical: "center",
        },
      ],
    ].concat(attendanceData);

    const trainerBottom = [
      [
        {},
        {},
        {},
        {},
        {
          column: "(as captured in FVS, except Direct R1)",
          value: "(as captured in FVS, except Direct R1)",
          align: "left",
          height: 25,
          wrap: true,
          width: 4,
          fontSize: 11,
          alignVertical: "center",
        },
      ],
    ].concat(codeData);

    const dateString = `${moment(tableData[0].startDate).format(
      "YYYY-MM-DD"
    )} (${moment(tableData[0].startTime, "HH:mm").format("hh:mm A")} - ${moment(
      tableData[0].endTime,
      "HH:mm"
    ).format("hh:mm A")})`;
    const cetCourse = [
      [
        {
          column: "CET Course Date(s) : ",
          value: "CET Course Date(s) : ",
          align: "left",
          height: 25,
          wrap: true,
          width: 4,
          fontSize: 16,
          alignVertical: "center",
        },
        {
          column: dateString,
          value: dateString,
          align: "center",
          height: 25,
          wrap: true,
          width: 4,
          fontSize: 13,
          alignVertical: "center",
        },
        {},
        {},
        {
          column: "Trainer Name(s):",
          value: "Trainer Name(s):",
          align: "left",
          height: 25,
          wrap: true,
          width: 4,
          fontSize: 16,
          alignVertical: "center",
        },
        {
          column: tableData[0].trainerName,
          value: tableData[0].trainerName,
          align: "left",
          height: 25,
          wrap: true,
          width: 4,
          fontSize: 13,
          alignVertical: "center",
        },
      ],
    ].concat(trainerBottom);

    const headerFill = [
      [
        {},
        {
          column:
            "ATTENDANCE/ RESULTS SHEET FOR CONTINUING EDUCATION & TRAINING (CET)",
          value:
            "ATTENDANCE/ RESULTS SHEET FOR CONTINUING EDUCATION & TRAINING (CET)",
          align: "left",
          height: 30,
          wrap: true,
          fontWeight: "bold",
          width: 4,
          fontSize: 11,
          alignVertical: "center",
        },
      ],
    ].concat(cetCourse);

    const batchBottom = [
      {},
      {},
      {},
      {},
      {
        column: "(as per One-Stop, except Direct R1)",
        value: "(as per One-Stop, except Direct R1)",
        align: "left",
        height: 20,
        wrap: true,
        width: 4,
        fontSize: 11,
        alignVertical: "center",
      },
    ];

    const batchBottomFilled = [batchBottom].concat([[]].concat(headerFill));

    const attchArr = [];

    attchArr.push(
      {
        column: "ATTC:",
        value: "ATTC:",
        align: "left",
        height: 20,
        wrap: true,
        width: 4,
        fontSize: 16,
        alignVertical: "center",
      },
      {
        column: "SANTARLI CONSTRUCTION PTE LTD",
        value: "SANTARLI CONSTRUCTION PTE LTD",
        align: "center",
        height: 20,
        wrap: true,
        width: 4,
        fontSize: 13,
        alignVertical: "center",
      },
      {},
      {},
      {
        column: "Batch No.:",
        value: "Batch No.:",
        align: "left",
        height: 20,
        wrap: true,
        width: 4,
        fontSize: 16,
        alignVertical: "center",
      },
      {
        column: batchNumber,
        value: batchNumber,
        align: "left",
        height: 20,
        wrap: true,
        width: 4,
        fontSize: 13,
        alignVertical: "center",
      }
    );

    const AttcFilled = [attchArr].concat(batchBottomFilled);

    const emptyConcatedData = [[]].concat(AttcFilled); // added empty line by adding empty arr

    //  addImageInThisOne

    const imageConcatedData = [[]].concat(emptyConcatedData);

    // const schema = [
    //   {
    //     column: "S/N",
    //     type: Number,
    //     value: (data) => data["S/N"],
    //     width: 15,
    //     align: "center",
    //     alignVertical: "center",
    //     wrap: true,
    //     height: 30,
    //   },
    //   {
    //     column: "Name Of Trainee",
    //     type: String,
    //     value: (data) => data["Name Of Trainee"],
    //     width: 45,
    //     align: "center",
    //     alignVertical: "center",
    //     wrap: true,
    //     height: 30,
    //   },
    //   {
    //     column: "NRIC/ FIN No.",
    //     type: String,
    //     value: (data) => data["NRIC/ FIN No."],
    //     width: 20,
    //     align: "center",
    //     alignVertical: "center",
    //     wrap: true,
    //     height: 30,
    //   },
    //   {
    //     column:
    //       "Registration No. / Submission No. (CoreTrade / Multi-Skilling / Direct R1)",
    //     type: String,
    //     value: (data) =>
    //       data[
    //         "Registration No. / Submission No. (CoreTrade / Multi-Skilling / Direct R1)"
    //       ],
    //     width: 38,
    //     align: "center",
    //     alignVertical: "center",
    //     wrap: true,
    //     height: 30,
    //   },
    //   {
    //     column: "Trainee's Attendance (Signature)",
    //     type: String,
    //     value: (data) => data["Trainee's Attendance (Signature)"],
    //     width: 30,
    //     align: "center",
    //     alignVertical: "center",
    //     wrap: true,
    //     height: 30,
    //   },
    //   {
    //     column: "Results (P/f) *",
    //     type: String,
    //     value: (data) => data["Results (P/f) *"],
    //     width: 38,
    //     align: "center",
    //     alignVertical: "center",
    //     wrap: true,
    //     height: 30,
    //   },
    // ];

    // await writeExcelFile(objects, {
    //   schema,
    //   fileName: "file.xlsx",
    // });

    const columns = [
      { width: 25 },
      { width: 45 },
      { width: 20 },
      { width: 46 },
      { width: 30 },
      { width: 38 },
    ];

    const filePath = `uploads/images/${
      Date.now() + Math.round(Math.random() + 1e9)
    }excel_with_image_and_table.xlsx`;

    const buffer = await writeExcelFile(imageConcatedData, {
      columns,
      buffer: true,
    });

    // const newBuffer = await writeExcelFile(dataObj, {
    //   schema,
    //   buffer: true,
    // });
    const createdFile = await fs.writeFileSync(filePath, buffer);
  } catch (err) {
    console.error(err);
  }
});

module.exports = routes;
