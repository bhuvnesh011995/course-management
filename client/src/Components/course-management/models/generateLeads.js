import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CommonDataTable } from "../../../common-components/CommonDataTable";
import { generateAttendanceHeaders } from "../../../Constants/table.constants";
import jsPDF from "jspdf";
import "jspdf-autotable";
// import RyeFont from "../../../assets/fonts/Agbalumo-Regular.ttf";

export const AttendanceGenerateModal = ({ isOpen, setIsOpen, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClose = () => {
    setIsOpen(false);
  };

  const generateLeadPdf = async (generatedData) => {
    const doc = new jsPDF();

    const tableColumns = [Object.values(generateAttendanceHeaders)];

    const headerKeys = Object.keys(generateAttendanceHeaders);

    const columnData = data.map((row) =>
      headerKeys.map((header) => row[header])
    );

    // doc.autoTable({
    //   head: tableColumns,
    //   body: columnData,
    // });
    // doc.addFileToVFS("Rye-Regular.ttf", RyeFont);
    // doc.addFont("Rye-Regular.ttf", "RyeFont");

    const fetchedFont = await fetch(
      "http://localhost:3000/assets/fonts/Agbalumo-Regular.ttf"
      //   "https://fonts.googleapis.com/css2?family=Agbalumo&display=swap"
    );
    const fontData = await fetchedFont.arrayBuffer();
    doc.addFileToVFS("Agbalumo-Regular.ttf", fontData);
    doc.addFont("Agbalumo-Regular.ttf", "agbalumoFont");
    doc.setFont("agbalumoFont");

    doc.setFontSize(25);

    let tableY = 70;
    doc.setFillColor(245, 245, 220);
    doc.rect(
      2,
      2,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight(),
      "F"
    );

    doc.text("Gkojihuojiub", 20, 20);

    doc.autoTable({
      head: tableColumns,
      body: [],
      startY: tableY,
      margin: { top: tableY },
      headStyles: { fillColor: [255, 140, 0] },
    });

    doc.autoTable({
      body: columnData,
      startY: tableY + 10,
      margin: { top: tableY },
    });
    doc.save("file.pdf");
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
          <form onSubmit={handleSubmit(generateLeadPdf)}>
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
              data={data}
              tableHeaders={generateAttendanceHeaders}
              tableSearchBar={false}
            />
            <Modal.Footer>
              <div>
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
