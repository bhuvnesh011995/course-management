import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";

export const onMenuClicked = () => {
  const x = document.getElementsByTagName("BODY")[0];
  if (x.className.includes("vertical-collpsed")) x.className = "";
  else x.className = "sidebar-enable vertical-collpsed";
};

export const exportToExcel = (data, fileName) => {
  const dataToJson = XLSX.utils.json_to_sheet(data);
  const dataToBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(dataToBook, dataToJson, fileName);
  XLSX.writeFile(dataToBook, fileName + ".xlsx");
};

export const exportToPDFTable = (data, dataKeys, tableHeaders, fileName) => {
  const doc = new jsPDF();

  const rows = data.map((row) => dataKeys.map((col) => row[col]));
  doc.autoTable({
    head: [tableHeaders],
    body: rows,
  });

  doc.save(fileName + ".pdf");
};

export const convertMongooseDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

export const convertToMongooseStartEndTiming = (startTime, endTime) => {
  const start = moment(startTime, "HH:mm").format("hh:mm A");
  const end = moment(endTime, "HH:mm").format("hh:mm A");
  return `${start} - ${end}`;
};

export const filePath = (path) => {
  return `http://localhost:5000/${path}`;
};

export const convertUtcDateAndTime = (date, time) => {
  return new Date(
    moment(
      `${moment(date).format("YYYY-MM-DD")} ${time}`,
      "YYYY-MM-DD HH:mm"
    ).format("ddd MMM D YYYY HH:mm:ss [GMT]ZZ (z)")
  );
};
