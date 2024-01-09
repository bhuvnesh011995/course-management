import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";
import { BASEURL } from "../config/config";

export const onMenuClicked = () => {
  const x = document.getElementsByTagName("BODY")[0];
  if (x.className.includes("vertical-collpsed")) x.className = "";
  else x.className = "sidebar-enable vertical-collpsed";
};

export const exportToExcel = (data, fileName, tableHeaders) => {
  const keys = Object.keys(tableHeaders);
  const dataObj = tableHeaders;

  const dataObjArray = data.map((e, index) => {
    const newObj = {};
    keys.forEach((key) => {
      newObj[dataObj[key]] = e[key];
      return;
    });
    return newObj;
  });

  const worksheet = XLSX.utils.json_to_sheet(dataObjArray);

  Object.keys(dataObjArray[0]).forEach((key, index) => {
    const headerCell = XLSX.utils.encode_cell({ r: 0, c: index });

    const headerCellStyle = {
      font: { bold: true, sz: 14 },
      fill: { bgColor: { indexed: 1 } },
    };

    XLSX.utils.format_cell(worksheet[headerCell], headerCellStyle);
    worksheet[headerCell].v = key;

    worksheet["!cols"] = worksheet["!cols"] || [];
    worksheet["!cols"][index] = { wch: key.length + 5 };
  });

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  XLSX.writeFile(workbook, `${fileName}.xlsx`);
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
  return `${BASEURL}/${path}`;
};

export const convertUtcDateAndTime = (date, time) => {
  return new Date(
    moment(
      `${moment(date).format("YYYY-MM-DD")} ${time}`,
      "YYYY-MM-DD HH:mm",
    ).format("ddd MMM D YYYY HH:mm:ss [GMT]ZZ (z)"),
  );
};
