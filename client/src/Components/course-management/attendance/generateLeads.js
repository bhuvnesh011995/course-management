import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import {
  excelAttendanceHeaders,
  generateAttendanceHeaders,
} from "../../../Constants/table.constants";
import "jspdf-autotable";
import React from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";
import {
  convertMongooseDate,
  convertToMongooseStartEndTiming,
} from "../../../common-components/useCommonUsableFunctions";
import jsPDF from "jspdf";
import "jspdf-autotable";
import tongaBoxDesign from "../../../assets/images/tongaBoxDesign.png";
import tongaG from "../../../assets/images/tongaG.png";
import moment from "moment";

export const AttendanceGenerateModal = ({ isOpen, setIsOpen, tableData }) => {
  const { user, NewAxiosInstance } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClose = () => {
    setIsOpen(false);
  };

  // const generateLeadExcel = async (generatedData) => {
  //   const keys = Object.keys(excelAttendanceHeaders);
  //   const dataObj = excelAttendanceHeaders;

  //   const dataObjArray = tableData.map((e, index) => {
  //     const newObj = { "S/N": index + 1 };
  //     keys.forEach((key) => {
  //       if (e[key]) newObj[dataObj[key]] = e[key];
  //       else newObj[dataObj[key]] = "";
  //       return;
  //     });
  //     return newObj;
  //   });
  //   generatedData["dataObj"] = dataObjArray;
  //   generatedData["tableData"] = tableData;
  //   if (user.otherConfigurations?.attendanceLogo?.length)
  //     generatedData["attendanceLogo"] =
  //       user.otherConfigurations?.attendanceLogo;

  //   const { data } = await NewAxiosInstance.post(
  //     "/generateFile/excel",
  //     generatedData
  //   );
  //   const UintData = Uint8Array.from(data.bufferedFile.data);
  //   const content = new Blob([UintData.buffer], {
  //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //   });

  //   const encodedUri = window.URL.createObjectURL(content);
  //   const link = document.createElement("a");

  //   link.setAttribute("href", encodedUri);
  //   link.setAttribute("download", data.filePath.split("uploads/images/")[1]);

  //   link.click();
  //   if (data) {
  //     setTimeout(async () => {
  //       await NewAxiosInstance.delete("/generateFile/deleteDownloadedFile", {
  //         params: { fileName: data.filePath },
  //       });
  //     }, [2000]);
  //   }
  //   toast.success("Xlsx File Generated !");
  // };

  const generateLeadPdf = async (generatedData) => {
    const doc = new jsPDF();
    let tableY = 120;
    let yPosition = 10;

    const tableColumns = [Object.values(generateAttendanceHeaders)];
    tableColumns[0].push("'Trainee's Attendance (Signature)", "Result (P/F)*");
    const headerKeys = Object.keys(generateAttendanceHeaders);
    // headerKeys.push("'Trainee's Attendance (Signature)", "Result (P/F)*");
    const columnData = tableData.map((row) =>
      headerKeys.map((header) => (row[header] ? row[header] : ""))
    );
    doc.setFillColor(245, 245, 220);
    doc.rect(
      2,
      2,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight(),
      "F"
    );
    doc.setTextColor(121, 68, 59);

    doc.setFontSize(6);
    doc.setFont("helvetica", "bold");
    doc.text(`SANTARLI CONSTRUCTION PTE LTD`, 5, 5);
    doc.addImage(tongaG, "png", 10, yPosition, 20, 20);
    doc.addImage(tongaBoxDesign, "png", 140, yPosition, 30, 15);
    yPosition += 20;
    doc.setFontSize(30);
    doc.setFont("times", "bold");
    doc.text(`TONGA`, 30, yPosition);
    doc.setFontSize(20);
    doc.text(`PTE LTD`, 76, yPosition);
    doc.setFontSize(7);
    doc.setFont("helvetica");
    yPosition -= 2;
    doc.text("CERT No : OHS 580633", 140, yPosition);
    doc.text("CERT No : EMS 580632", 170, yPosition);
    yPosition += 3;
    doc.text("BS OHSAS 18001: 2007", 140, yPosition);
    doc.text("ISO 14001: 2004", 170, yPosition);
    yPosition += 2;
    doc.setFillColor(121, 68, 59);
    doc.rect(10, yPosition, 190, 0.5, "F");
    doc.setFont("times", "italic", "bold");
    doc.setFontSize(9);
    yPosition += 4;
    doc.text(
      "531 Yishun Industrial Park A #03-02 Singapore 768739. Tel: 6755 6676 Fax: 6755 4566 E-mail: tongafm@singnet.com.sg  Reg. No: 199100770W",
      10,
      yPosition
    );

    doc.setFontSize(14);

    doc.setFont("helvetica", "normal", "bold");
    yPosition += 20;
    doc.text(
      "ATTENDANCE/RESULTS SHEET FOR CONTINUING EDUCATION & TRAINING (CET)",
      10,
      yPosition
    );
    doc.setFontSize(10);

    yPosition += 13;
    doc.text("CET Course Date(s) : ", 20, yPosition);
    doc.setFont("helvetica", "normal");

    doc.text(convertMongooseDate(tableData.startDate), 60, yPosition);
    doc.text(
      `(${convertToMongooseStartEndTiming(
        tableData[0].startTime,
        tableData[0].endTime
      )})`,
      80,
      yPosition
    );

    // doc.setFont("helvetica", "bold");
    // doc.text("Class Name : ", 125, yPosition);
    // doc.setFont("helvetica", "normal");
    // doc.text(tableData[0].classCode, 160, yPosition);

    yPosition += 10;
    doc.setFont("helvetica", "bold");

    doc.text("Course : ", 20, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(tableData[0].course, 60, yPosition);

    doc.setFont("helvetica", "bold");

    doc.text("CET Code : ", 125, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(generatedData.cetCode, 160, yPosition);
    yPosition += 10;
    doc.setFont("helvetica", "bold");

    doc.text("Batch No. : ", 20, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(generatedData.batchNumber, 60, yPosition);

    doc.setFont("helvetica", "bold");

    doc.text("Trainer's Name : ", 125, yPosition);
    doc.setFont("helvetica", "normal");
    doc.text(tableData[0].trainerName, 160, yPosition);

    doc.autoTable({
      head: tableColumns,
      body: columnData,
      startY: tableY,
      margin: { top: tableY },
      headStyles: { fillColor: [255, 140, 0] },
      theme: "plain",
      styles: {
        width: "100px",
        lineWidth: 0.5,
      },
      columnStyles: {
        0: { cellWidth: 35 },
        1: { cellWidth: 30 },
        2: { cellWidth: 60 },
        4: { cellWidth: 15 },
        5: { cellWidth: 15 },
      },
    });

    doc.save("file.pdf");
  };

  // const newGenerateLeadPdf = async (generatedData) => {
  //   const doc = new jsPDF({
  //     orientation: "p", // Portrait orientation
  //     unit: "mm",
  //     format: "a4",
  //   });
  //   let yPosition = 10;
  //   let xPosition = 200;
  //   doc.setFontSize(8);

  //   doc.text(
  //     "Attendance / Results Sheet for Continuing Education and Training",
  //     xPosition,
  //     10,
  //     { angle: -90 }
  //   );
  //   xPosition -= 10;
  //   doc.text("ATTC:", xPosition, yPosition, { angle: -90 });
  //   yPosition += 10;
  //   doc.text("SANTARLI CONSTRUCTION PTE LTD ", xPosition, yPosition, {
  //     angle: -90,
  //   });
  //   xPosition -= 1;
  //   doc.rect(xPosition, yPosition, 0.2, 50, "F");
  //   yPosition += 180;
  //   doc.rect(xPosition, yPosition, 0.2, 50, "F");
  //   xPosition += 1;
  //   yPosition -= 16;
  //   doc.text("Batch No.: ", xPosition, yPosition, {
  //     angle: -90,
  //   });
  //   yPosition += 16;
  //   doc.text(generatedData.batchNumber, xPosition, yPosition, {
  //     angle: -90,
  //   });
  //   yPosition -= 190;
  //   xPosition -= 10;

  //   doc.rect(xPosition, yPosition, 0.2, 280, "F");
  //   doc.rect(xPosition, yPosition, -136, 0.2, "F");
  //   doc.rect(xPosition, 290, -136, 0.2, "F");
  //   xPosition -= 5;
  //   doc.setFont("helvetica", "bold");
  //   xPosition += 1.5;
  //   yPosition += 1;

  //   doc.text(
  //     "ATTENDANCE/ RESULTS SHEET FOR CONTINUING EDUCATION AND TRAINING (CET)",
  //     xPosition,
  //     yPosition,
  //     { angle: -90 }
  //   );

  //   doc.setFont("helvetica", "normal");
  //   yPosition -= 1;
  //   xPosition -= 1.5;
  //   doc.rect(xPosition, yPosition, 0.2, 280, "F");
  //   xPosition -= 3.5;
  //   yPosition += 1;
  //   doc.text("CET Course Date(s)", xPosition, yPosition, { angle: -90 });
  //   yPosition -= 1;

  //   const dateString = `${moment(tableData[0].startDate).format(
  //     "YYYY-MM-DD"
  //   )} (${moment(tableData[0].startTime, "HH:mm").format("hh:mm A")} - ${moment(
  //     tableData[0].endTime,
  //     "HH:mm"
  //   ).format("hh:mm A")})`;

  //   yPosition += 40;
  //   doc.text(`:${dateString}`, xPosition, yPosition, { angle: -90 });
  //   xPosition -= 1;
  //   doc.rect(xPosition, yPosition, 0.2, 140, "F");
  //   yPosition += 140;
  //   xPosition += 4.5;

  //   doc.rect(xPosition, yPosition, -19.4, 0.2, "F");
  //   xPosition -= 4.5;
  //   yPosition += 10;
  //   doc.text(
  //     `Trainer Name(s):     ${tableData[0].trainerName}`,
  //     xPosition,
  //     yPosition,
  //     { angle: -90 }
  //   );
  //   xPosition -= 5;
  //   doc.text(`(as captured in FVS, except Direct R1)`, xPosition, yPosition, {
  //     angle: -90,
  //   });

  //   yPosition -= 190;
  //   xPosition += 5;
  //   xPosition -= 10;
  //   doc.rect(xPosition, yPosition, 0.2, 280, "F");
  //   xPosition -= 3.5;
  //   yPosition += 1;
  //   doc.text("Trade Category", xPosition, yPosition, { angle: -90 });
  //   yPosition -= 1;
  //   yPosition += 40;
  //   doc.text(`:${tableData[0].tradeType}`, xPosition, yPosition, {
  //     angle: -90,
  //   });

  //   xPosition -= 1;

  //   yPosition += 150;
  //   doc.text(
  //     `CET Code :             ${generatedData.cetCode}`,
  //     xPosition,
  //     yPosition,
  //     { angle: -90 }
  //   );
  //   yPosition -= 190;

  //   xPosition -= 1;
  //   doc.rect(xPosition, yPosition, 0.2, 280, "F");

  //   xPosition -= 7;

  //   yPosition += 3;
  //   doc.text(`S/N`, xPosition, yPosition, { angle: -90 });
  //   yPosition += 10;

  //   yPosition += 20;
  //   doc.text(`Name Of Trainee `, xPosition, yPosition, { angle: -90 });

  //   yPosition += 60;
  //   doc.text(`NRIC/ FIN No.:`, xPosition, yPosition, { angle: -90 });

  //   yPosition += 40;
  //   doc.text(`Registration No./ Submission No. `, xPosition, yPosition, {
  //     angle: -90,
  //   });

  //   xPosition -= 4;
  //   doc.text(
  //     `(CoreTrade / Multi-Skilling / Direct R1) `,
  //     xPosition,
  //     yPosition,
  //     { angle: -90 }
  //   );
  //   xPosition += 4;

  //   yPosition += 60;
  //   doc.text(`Trainee's Attendance `, xPosition, yPosition, {
  //     angle: -90,
  //   });

  //   yPosition += 50;
  //   doc.text(`Results (P/F) * `, xPosition, yPosition, {
  //     angle: -90,
  //   });
  //   yPosition -= 243;
  //   xPosition -= 6;
  //   doc.rect(xPosition, yPosition, 0.2, 280, "F");
  //   console.log(tableData);

  //   // yPosition += 15;
  //   // doc.rect(xPosition, yPosition, -100, 2, "F");
  //   for (let i = 0; i < 14; i++) {
  //     xPosition -= 7;
  //     doc.rect(xPosition, yPosition, 0.2, 280, "F");
  //   }

  //   xPosition -= 3;
  //   doc.text(
  //     `* P - Passed and F- Failed (fill in as appropriate)`,
  //     xPosition,
  //     yPosition,
  //     {
  //       angle: -90,
  //     }
  //   );

  //   xPosition -= 3;
  //   doc.text(
  //     `I hereby verified that all trainees have at least 75% attendance.`,
  //     xPosition,
  //     yPosition,
  //     {
  //       angle: -90,
  //     }
  //   );

  //   doc.save("nice.pdf");
  // };

  return (
    <div>
      <Modal show={isOpen} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title" id="addCourseModalLabel">
              Generate Attendance
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(generateLeadPdf)}>
            <div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Cet Code:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cet Code"
                    {...register("cetCode", {
                      required: "Please Enter Cet Code",
                    })}
                  />
                  <span className="text-danger">
                    {errors?.cetCode && errors?.cetCode.message}
                  </span>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Batch Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Batch Number"
                    {...register("batchNumber", {
                      required: "Please Enter Batch Number",
                    })}
                  />
                  <span className="text-danger">
                    {errors?.batchNumber && errors?.batchNumber.message}
                  </span>
                </div>
              </div>
              <CommonDataTable
                data={tableData}
                tableHeaders={generateAttendanceHeaders}
                tableSearchBar={false}
              />
            </div>
            <Modal.Footer>
              <div>
                {/* <button
                  type="submit"
                  onClick={generateLeadPdf}
                  className="btn btn-secondary"
                >
                  Generate Pdf
                </button> */}
                <button type="submit" className="btn btn-secondary">
                  Generate Pdf
                </button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
