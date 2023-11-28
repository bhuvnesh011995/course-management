const routes = require("express").Router();
const writeExcelFile = require("write-excel-file/node");
const fs = require("fs");
const moment = require("moment");
const { upload } = require("../utils/upload.utils");
const ExcelJs = require("exceljs");

const { Blob } = require("buffer");
const { userAuth } = require("../middlewares/auth.middleware");
const { deleteSelectedFile } = require("../commonUsableFunctions/deleteFile");

routes.post("/excel", [userAuth], upload.single("file"), async (req, res) => {
  try {
    const { body, file } = req;

    const { dataObj, batchNumber, cetCode, tableData, attendanceLogo } = body;
    const keys = Object.keys(dataObj[0]);
    const totalNumTable = [
      [
        {},
        {},
        {},
        {
          column: "No. of Tradesmen (exclude absentees):",
          value: "No. of Foremen (exclude absentees):",
          align: "left",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

          fontSize: 11,
          alignVertical: "center",
        },
        {},
        {},
      ],
      [
        {},
        {},
        {},
        {
          column: "No. of Foremen (exclude absentees):",
          value: "No. of Foremen (exclude absentees):",
          align: "left",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

          fontSize: 11,
          alignVertical: "center",
        },
        {},
        {},
      ],
      [
        {},
        {},
        {},
        {
          column: "No. of Multi-Skilling (exclude absentees):",
          value: "No. of Multi-Skilling (exclude absentees):",
          align: "left",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

          fontSize: 11,
          alignVertical: "center",
        },
        {},
        {},
      ],
      [
        {},
        {},
        {},
        {
          column: "No. of Direct R1 (exclude absentees):",
          value: "No. of Direct R1 (exclude absentees):",
          align: "left",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

          fontSize: 11,
          alignVertical: "center",
        },
        {},
        {},
      ],

      [
        {},
        {},
        {},
        {
          column: "Total No. Attended and Passed CET:",
          value: "Total No. Attended and Passed CET:",
          align: "left",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

          fontSize: 11,
          alignVertical: "center",
        },
        {},
        {},
      ],
    ];

    const keyArr = keys.map((key, index) => {
      const keyObj = {
        column: key,
        value: key,
        fontWeight: "bold",
        align: "center",
        height: 35,
        wrap: true,
        width: 4,
        borderStyle: "thin",
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
            height: 20,
            borderStyle: "thin",
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
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",
          fontSize: 16,
          alignVertical: "center",
        },
        {
          column: tableData[0].tradeType,
          value: tableData[0].tradeType,
          align: "left",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

          fontSize: 13,
          alignVertical: "center",
        },
        {},
        {},
        {
          column: "CET Code : ",
          value: "CET Code : ",
          align: "left",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

          fontSize: 16,
          alignVertical: "center",
        },
        {
          column: cetCode,
          value: cetCode,
          align: "left",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

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
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

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
          height: 20,
          borderStyle: "thin",

          wrap: true,
          width: 4,
          fontSize: 16,
          alignVertical: "center",
        },
        {
          column: dateString,
          value: dateString,
          align: "center",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

          fontSize: 13,
          alignVertical: "center",
        },
        {},
        {},
        {
          column: "Trainer Name(s):",
          value: "Trainer Name(s):",
          align: "left",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

          fontSize: 16,
          alignVertical: "center",
        },
        {
          column: tableData[0].trainerName,
          value: tableData[0].trainerName,
          align: "left",
          height: 20,
          wrap: true,
          width: 4,
          borderStyle: "thin",

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
          height: 20,
          wrap: true,
          fontWeight: "bold",
          width: 4,
          fontSize: 11,
          alignVertical: "center",
        },
      ],
    ].concat(cetCourse);

    const batchBottom = [[]];

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

    const emptyConcatedData = [
      [
        {
          height: 70,
        },
      ],
    ].concat(AttcFilled);

    const imageConcatedData = [[]].concat(emptyConcatedData);

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
    }class_attendance.xlsx`;

    const buffer = await writeExcelFile(imageConcatedData, {
      columns,
      buffer: true,
    });

    const createdFile = await fs.writeFileSync(filePath, buffer);

    const workbook = new ExcelJs.Workbook();
    let updatedFile;
    const uploadedFile = await workbook.xlsx
      .readFile(filePath)
      .then(async () => {
        const worksheet = workbook.getWorksheet(1);
        const imagePath = "constants/tongaHeaderName.png";

        const logo = workbook.addImage({
          filename: attendanceLogo ? `uploads/${attendanceLogo}` : imagePath,
          extension: "png",
        });

        worksheet.addImage(logo, {
          tl: { col: 3, row: 1 },
          ext: { width: 350, height: 90 },
        });

        const cellB3 = worksheet.getCell("B3");
        cellB3.border = {
          bottom: { style: "thin" },
        };

        const cellF3 = worksheet.getCell("F3");
        cellF3.border = {
          bottom: { style: "thin" },
        };
        worksheet.mergeCells("A2:F2");
        worksheet.mergeCells("B9:D9");
        worksheet.mergeCells("B7:D7");

        worksheet.mergeCells("A6:F6");
        worksheet.mergeCells("E4:F4");

        worksheet.mergeCells("E8:F8");
        worksheet.mergeCells("A8:D8");
        const cellE8 = worksheet.getCell("E8");
        cellE8.value = "(as captured in FVS, except Direct R1)";
        cellE8.font = {
          size: 12,
          italic: true,
        };

        const cellB7 = worksheet.getCell("B7");
        cellB7.value = dateString;
        cellB7.font = {
          size: 14,
        };

        const cellB9 = worksheet.getCell("B9");
        cellB9.value = tableData[0].tradeType;
        cellB9.font = {
          size: 14,
        };
        const cellE4 = worksheet.getCell("E4");
        cellE4.value = "(as per One-Stop, except Direct R1)";
        cellE4.font = {
          italic: true,
          size: 12,
        };
        const cellB6 = worksheet.getCell("A6");
        cellB6.value =
          "ATTENDANCE/ RESULTS SHEET FOR CONTINUING EDUCATION & TRAINING (CET)";
        cellB6.font = {
          size: 15,
          bold: true,
        };
        cellB6.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };

        let cellNum = attendanceData.length + 10;
        const tableBottomCell1 = worksheet.getCell(`A${cellNum}`);
        tableBottomCell1.value =
          " * P - Passed and F - Failed (fill in as appropriate)";
        tableBottomCell1.font = {
          size: 13,
        };
        cellNum += 1;
        const tableBottomCell2 = worksheet.getCell(`A${cellNum}`);
        tableBottomCell2.value =
          "I hereby verified that all trainees have at least 75% attendance.";
        tableBottomCell2.font = {
          size: 13,
        };

        let tableBottomTableCell = cellNum + 1;

        const tableBottomTableCell1 = worksheet.getCell(
          `E${tableBottomTableCell}`
        );
        tableBottomTableCell1.value = "No. of Tradesmen (exclude absentees):";
        tableBottomTableCell1.font = {
          size: 13,
        };

        tableBottomTableCell1.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };

        const tableBottomTableCellSide1 = worksheet.getCell(
          `F${tableBottomTableCell}`
        );
        tableBottomTableCellSide1.font = {
          size: 13,
        };

        tableBottomTableCellSide1.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };

        tableBottomTableCell += 1;

        const tableBottomTableCell2 = worksheet.getCell(
          `E${tableBottomTableCell}`
        );
        tableBottomTableCell2.value = "No. of Tradesmen (exclude absentees):";
        tableBottomTableCell2.font = {
          size: 13,
        };

        tableBottomTableCell2.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };

        const tableBottomTableCellSide2 = worksheet.getCell(
          `F${tableBottomTableCell}`
        );
        tableBottomTableCellSide2.font = {
          size: 13,
        };

        tableBottomTableCellSide2.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };

        tableBottomTableCell += 1;

        const tableBottomTableCell3 = worksheet.getCell(
          `E${tableBottomTableCell}`
        );
        tableBottomTableCell3.value = "No. of Tradesmen (exclude absentees):";
        tableBottomTableCell3.font = {
          size: 13,
        };

        tableBottomTableCell3.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };

        const tableBottomTableCellSide3 = worksheet.getCell(
          `F${tableBottomTableCell}`
        );
        tableBottomTableCellSide3.font = {
          size: 13,
        };

        tableBottomTableCellSide3.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };

        tableBottomTableCell += 1;

        const tableBottomTableCell4 = worksheet.getCell(
          `E${tableBottomTableCell}`
        );
        tableBottomTableCell4.value = "No. of Tradesmen (exclude absentees):";
        tableBottomTableCell4.font = {
          size: 13,
        };

        tableBottomTableCell4.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };

        const tableBottomTableCellSide4 = worksheet.getCell(
          `F${tableBottomTableCell}`
        );
        tableBottomTableCellSide4.font = {
          size: 13,
        };

        tableBottomTableCellSide4.border = {
          top: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
          right: { style: "thin" },
        };

        tableBottomTableCell += 1;

        cellNum += 3;
        const tableBottomCell3 = worksheet.getCell(`A${cellNum}`);
        tableBottomCell3.value = `${tableData[0].trainerName} / ${moment(
          tableData[0].startDate
        ).format("DD-MM-YYYY")}`;
        tableBottomCell3.font = {
          size: 13,
        };

        tableBottomCell3.border = {
          bottom: { style: "thin" },
        };

        cellNum += 1;
        const tableBottomCell4 = worksheet.getCell(`A${cellNum}`);
        tableBottomCell4.value = "Name & Signature of Trainer(s)/ Date";
        tableBottomCell4.font = {
          size: 13,
        };

        const companyStamp = worksheet.getCell(`C${cellNum}`);
        companyStamp.value = "Company Stamp";
        companyStamp.font = {
          size: 13,
        };

        updatedFile = await workbook.xlsx.writeFile(filePath);
      });

    const bufferedFile = fs.readFileSync(filePath);
    const blob = new Blob(bufferedFile);
    res.status(200).send({ filePath: filePath, blob: blob, bufferedFile });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Server Error !" });
  }
});

routes.delete("/deleteDownloadedFile", (req, res, next) => {
  try {
    deleteSelectedFile(
      req.query.fileName.split("/")[req.query.fileName.split("/").length - 1]
    );
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Server Error !" });
  }
});

module.exports = routes;
