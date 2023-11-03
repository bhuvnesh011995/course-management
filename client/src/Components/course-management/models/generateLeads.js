import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import {
  excelAttendanceHeaders,
  generateAttendanceHeaders,
} from "../../../Constants/table.constants";
import jsPDF from "jspdf";
import "jspdf-autotable";
// import tongaHeader from "../../../assets/images/tongaG.png";
// import tongaBoxDesign from "../../../assets/images/tongaBoxDesign.png";
import {
  convertMongooseDate,
  convertToMongooseStartEndTiming,
} from "../../../common-components/useCommonUsableFunctions";
import React from "react";
import * as XLSX from "xlsx";
import { AxiosInstance } from "../../../common-components/axiosInstance";

export const AttendanceGenerateModal = ({ isOpen, setIsOpen, tableData }) => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const handleClose = () => {
    setIsOpen(false);
  };

  // const generateLeadPdf = async (generatedData) => {
  //   const doc = new jsPDF();
  //   let tableY = 120;
  //   let yPosition = 10;

  //   const tableColumns = [Object.values(generateAttendanceHeaders)];
  //   tableColumns[0].push("'Trainee's Attendance (Signature)", "Result (P/F)*");
  //   const headerKeys = Object.keys(generateAttendanceHeaders);
  //   // headerKeys.push("'Trainee's Attendance (Signature)", "Result (P/F)*");
  //   const columnData = tableData.map((row) =>
  //     headerKeys.map((header) => (row[header] ? row[header] : ""))
  //   );
  //   doc.setFillColor(245, 245, 220);
  //   doc.rect(
  //     2,
  //     2,
  //     doc.internal.pageSize.getWidth(),
  //     doc.internal.pageSize.getHeight(),
  //     "F"
  //   );
  //   doc.setTextColor(121, 68, 59);

  //   doc.setFontSize(6);
  //   doc.setFont("helvetica", "bold");
  //   doc.text(`SANTARLI CONSTRUCTION PTE LTD`, 5, 5);
  //   // doc.addImage(tongaHeader, "png", -10, 10, 230, 35);
  //   doc.addImage(tongaHeader, "png", 10, yPosition, 20, 20);
  //   doc.addImage(tongaBoxDesign, "png", 140, yPosition, 30, 15);
  //   yPosition += 20;
  //   doc.setFontSize(30);
  //   doc.setFont("times", "bold");
  //   doc.text(`TONGA`, 30, yPosition);
  //   doc.setFontSize(20);
  //   doc.text(`PTE LTD`, 76, yPosition);
  //   doc.setFontSize(7);
  //   doc.setFont("helvetica");
  //   yPosition -= 2;
  //   doc.text("CERT No : OHS 580633", 140, yPosition);
  //   doc.text("CERT No : EMS 580632", 170, yPosition);
  //   yPosition += 3;
  //   doc.text("BS OHSAS 18001: 2007", 140, yPosition);
  //   doc.text("ISO 14001: 2004", 170, yPosition);
  //   yPosition += 2;
  //   doc.setFillColor(121, 68, 59);
  //   doc.rect(10, yPosition, 190, 0.5, "F");
  //   doc.setFont("times", "italic", "bold");
  //   doc.setFontSize(9);
  //   yPosition += 4;
  //   doc.text(
  //     "531 Yishun Industrial Park A #03-02 Singapore 768739. Tel: 6755 6676 Fax: 6755 4566 E-mail: tongafm@singnet.com.sg  Reg. No: 199100770W",
  //     10,
  //     yPosition
  //   );

  //   doc.setFontSize(14);

  //   doc.setFont("helvetica", "normal", "bold");
  //   yPosition += 20;
  //   doc.text(
  //     "ATTENDANCE/RESULTS SHEET FOR CONTINUING EDUCATION & TRAINING (CET)",
  //     10,
  //     yPosition
  //   );
  //   doc.setFontSize(10);

  //   yPosition += 13;
  //   doc.text("CET Course Date(s) : ", 20, yPosition);
  //   doc.setFont("helvetica", "normal");

  //   doc.text(convertMongooseDate(tableData.startDate), 60, yPosition);
  //   doc.text(
  //     `(${convertToMongooseStartEndTiming(
  //       tableData[0].startTime,
  //       tableData[0].endTime
  //     )})`,
  //     80,
  //     yPosition
  //   );

  //   doc.setFont("helvetica", "bold");
  //   doc.text("Class Name : ", 125, yPosition);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(tableData[0].classCode, 160, yPosition);

  //   yPosition += 10;
  //   doc.setFont("helvetica", "bold");

  //   doc.text("Course : ", 20, yPosition);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(tableData[0].course, 60, yPosition);

  //   doc.setFont("helvetica", "bold");

  //   doc.text("CET Code : ", 125, yPosition);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(generatedData.cetCode, 160, yPosition);

  //   yPosition += 10;
  //   doc.setFont("helvetica", "bold");

  //   doc.text("Batch No. : ", 20, yPosition);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(generatedData.batchNumber, 60, yPosition);

  //   doc.setFont("helvetica", "bold");

  //   doc.text("Trainer's Name : ", 125, yPosition);
  //   doc.setFont("helvetica", "normal");
  //   doc.text(tableData[0].trainerName, 160, yPosition);

  //   doc.autoTable({
  //     head: tableColumns,
  //     body: columnData,
  //     startY: tableY,
  //     margin: { top: tableY },
  //     headStyles: { fillColor: [255, 140, 0] },
  //     theme: "plain",
  //     styles: {
  //       width: "100px",
  //       lineWidth: 0.5,
  //     },
  //     columnStyles: {
  //       0: { columnWidth: 35 },
  //       1: { columnWidth: 30 },
  //       2: { columnWidth: 60 },
  //       4: { columnWidth: 15 },
  //       5: { columnWidth: 15 },
  //     },
  //   });

  //   doc.save("file.pdf");
  // };

  const generateLeadExcel = async (generatedData) => {
    const keys = Object.keys(excelAttendanceHeaders);
    const dataObj = excelAttendanceHeaders;

    const dataObjArray = tableData.map((e, index) => {
      const newObj = { "S/N": index + 1 };
      keys.forEach((key) => {
        if (e[key]) newObj[dataObj[key]] = e[key];
        else newObj[dataObj[key]] = "";
        return;
      });
      return newObj;
    });
    console.log(tableData);
    generatedData["dataObj"] = dataObjArray;
    generatedData["tableData"] = tableData;
    const createExcelFile = await AxiosInstance.post(
      "/generateFile/excel",
      generatedData
    );

    // {
    //     // const worksheet = XLSX.utils.json_to_sheet(dataObjArray);

    //     // Object.keys(dataObjArray[0]).forEach((key, index) => {
    //     //   const headerCell = XLSX.utils.encode_cell({ r: 0, c: index });

    //     //   const headerCellStyle = {
    //     //     font: { bold: true, sz: 19 },
    //     //     fill: { bgColor: { indexed: 4 } },
    //     //   };
    //     //   XLSX.utils.format_cell(worksheet[headerCell], headerCellStyle);
    //     //   worksheet[headerCell].v = key;

    //     //   worksheet["!cols"] = worksheet["!cols"] || [];
    //     //   worksheet["!cols"][index] = { wch: key.length + 5 };
    //     // });

    //     // const workbook = XLSX.utils.book_new();
    //     // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    //     // XLSX.writeFile(workbook, "excel_with_dynamic_widths.xlsx");
    //     }
  };

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
          <form onSubmit={handleSubmit(generateLeadExcel)}>
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
                  Generate Excel
                </button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
