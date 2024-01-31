import jsPDF from "jspdf";
import "jspdf-autotable";
import newSantarliLeftImage from "../../../assets/images/newSantarliLeftImage.png";
import newTongaIcon from "../../../assets/images/newTongaIcon.png";
import moment from "moment";
import certificateSignImage from "../../../assets/images/certificateSign.png";

export const DownloadCertificate = (data, selectedDate, certificateType) => {
  const doc = new jsPDF();
  let yPosition = 10;
  doc.setFillColor(10, 186, 181);
  doc.rect(0, 0, 240, 30, "F");
  doc.rect(0, 270, 240, 40, "F");

  doc.setFillColor(255, 255, 255);

  doc.rect(6, 0, 5, 300, "F");
  doc.rect(200, 0, 5, 300, "F");

  doc.setFillColor(0, 0, 0);

  doc.rect(6, 0, 0.2, 300, "F");
  doc.rect(205, 0, 0.2, 300, "F");
  doc.rect(11, 0, 0.2, 300, "F");
  doc.rect(200, 0, 0.2, 300, "F");

  doc.setFont("times", "normal");
  doc.setFontSize(80);

  yPosition += 55;
  doc.setTextColor(0, 51, 102);
  doc.text(`SANTARLI`, 57, yPosition);

  yPosition -= 30;

  doc.addImage(newSantarliLeftImage, "png", 15, yPosition, 40, 40);
  doc.setFontSize(25);
  doc.setFont("times", "italic", "bold");

  yPosition += 55;
  doc.text(`SANTARLI CONSTRUCTION PTE LTD`, 30, yPosition);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");

  yPosition += 10;
  doc.text(`ACCREDITED TRAINING PROVIDER`, 60, yPosition);
  yPosition += 10;
  doc.text(`APPROVED BY`, 80, yPosition);
  yPosition += 10;
  doc.text(
    `BUILDING CONSTRUCTION AND AUTHORITY (BCA),SINGAPORE`,
    25,
    yPosition,
  );

  doc.setFontSize(25);
  doc.setFont("times", "italic");

  yPosition += 14;
  doc.text(`It is hereby certified that`, 65, yPosition);

  doc.setFont("helvetica", "bold");
  yPosition += 20;
  doc.text(data.participantName, 85, yPosition);
  yPosition += 10;
  doc.text(`(NRIC/FIN NO: ${data.participantNRIC})`, 58, yPosition);
  yPosition += 10;
  doc.text(`${data.coreTradeRegNo}`, 66, yPosition);

  doc.setFont("times", "italic");
  yPosition += 16;
  doc.text(`has attained and successfully completed the`, 28, yPosition);

  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  yPosition += 16;
  doc.text(`CONTINUING EDUCATION AND TRAINING (CET)`, 27, yPosition);

  doc.setFont("times", "italic");
  yPosition += 10;
  doc.text(`for`, 100, yPosition);

  doc.setFont("helvetica", "bold");
  yPosition += 10;
  doc.text(`${data.tradeType}`, 75, yPosition);
  yPosition += 13;
  doc.text(`ON ${moment(selectedDate).format("DD-MMM-YYYY")}`, 75, yPosition);
  doc.addImage(newTongaIcon, "png", 26, yPosition + 5, 60, 16);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  yPosition += 25;
  doc.text(`TRAINING PARTNERS`, 51, yPosition);
  yPosition -= 5;
  doc.rect(115, yPosition, 50, 0.5, "F");
  yPosition -= 11;
  doc.addImage(certificateSignImage, "png", 115, yPosition, 45, 10);
  yPosition += 11;
  doc.setFontSize(13);
  doc.setFont("helvetica");
  yPosition += 5;
  doc.text(`DANIEL TONG`, 127, yPosition);
  yPosition += 5;
  doc.text(`OPERATION DIRECTOR (ATTC)`, 111, yPosition);
  console.log(Math.random() * 1e9);
  doc.setFont("helvetica", "normal");

  yPosition += 10;
  doc.text(
    `Certificate No. ${data.typeCode}/${
      data.coreTradeRegNo
    }/${moment().year()}`,
    20,
    yPosition,
  );

  yPosition += 6;
  doc.text(
    `Date: ${moment(data.updated_at).format("DD-MMM-YYYY")}`,
    20,
    yPosition,
  );

  let name = "";

  data.participantName.split(" ").map((e) => {
    name += e;
  });
  if (certificateType == "sendMail") {
    const pdfDataUri = doc.output("datauristring");
    const pdfBase64Data = pdfDataUri.split(
      "data:application/pdf;filename=generated.pdf;base64,",
    );
    return pdfBase64Data[1];
  } else
    doc.save(
      `${name}-${Date.now() + Math.round(Math.random() * 1e9)}-certificate.pdf`,
    );
};
