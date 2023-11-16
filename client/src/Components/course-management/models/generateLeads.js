import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import {
  excelAttendanceHeaders,
  generateAttendanceHeaders,
} from "../../../Constants/table.constants";
import "jspdf-autotable";
import React from "react";
import { AxiosInstance } from "../../../common-components/axiosInstance";
import { toast } from "react-toastify";

export const AttendanceGenerateModal = ({ isOpen, setIsOpen, tableData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClose = () => {
    setIsOpen(false);
  };

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
    generatedData["dataObj"] = dataObjArray;
    generatedData["tableData"] = tableData;
    const { data } = await AxiosInstance.post(
      "/generateFile/excel",
      generatedData
    );
    const UintData = Uint8Array.from(data.bufferedFile.data);
    const content = new Blob([UintData.buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const encodedUri = window.URL.createObjectURL(content);
    const link = document.createElement("a");

    link.setAttribute("href", encodedUri);
    link.setAttribute("download", data.filePath.split("uploads/images/")[1]);

    link.click();
    toast.success("Xlsx File Generated !");
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
