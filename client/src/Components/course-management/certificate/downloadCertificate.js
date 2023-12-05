import jsPDF from "jspdf";
import "jspdf-autotable";
import santarliLeftImage from "../../../assets/images/santarliLeftImage.png";
import tongaIcon from "../../../assets/images/tongaIcon.png";
import moment from "moment";

export const DownloadCertificate = (data) => {
  const doc = new jsPDF();
  let yPosition = 10;

  doc.rect(0, yPosition, 240, 20, "F");
  doc.rect(0, 270, 240, 20, "F");

  doc.setFillColor(255, 255, 255);

  doc.rect(6, 0, 5, 300, "F");
  doc.rect(200, 0, 5, 300, "F");

  doc.setFillColor(0, 0, 0);

  doc.rect(6, 0, 0.2, 300, "F");
  doc.rect(205, 0, 0.2, 300, "F");
  doc.rect(11, 0, 0.2, 300, "F");
  doc.rect(200, 0, 0.2, 300, "F");

  doc.setFont("times", "bold");
  doc.setFontSize(60);

  yPosition += 55;
  doc.text(`SANTARLI`, 80, yPosition);

  yPosition -= 30;

  doc.addImage(santarliLeftImage, "png", 30, yPosition, 40, 40);

  doc.setFontSize(25);
  doc.setFont("times", "italic", "bold");

  yPosition += 55;
  doc.text(`SANTARLI CONSTRUCTION PTE LTD`, 30, yPosition);

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
    yPosition
  );

  doc.setFontSize(25);
  doc.setFont("times", "italic");

  yPosition += 14;
  doc.text(`It is hereby certified that`, 65, yPosition);

  doc.setFont("helvetica", "bold");
  yPosition += 20;
  doc.text(data.participantName, 75, yPosition);
  yPosition += 10;
  doc.text(`(NRIC/FIN NO: ${data.participantNRIC})`, 55, yPosition);
  yPosition += 10;
  doc.text(`${data.coreTradeRegNo}`, 40, yPosition);

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
  doc.text(
    `ON ${moment(data.updated_at).format("DD-MMM-YYYY")}`,
    75,
    yPosition
  );
  doc.addImage(tongaIcon, "png", 15, yPosition, 60, 20);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  yPosition += 25;
  doc.text(`TRAINING PARTNERS`, 40, yPosition);
  yPosition -= 5;
  doc.rect(130, yPosition, 50, 0.5, "F");

  doc.setFontSize(13);
  doc.setFont("helvetica");
  yPosition += 5;
  doc.text(`DANIEL TONG`, 142, yPosition);
  yPosition += 5;
  doc.text(`OPERATION DIRECTOR (ATTC)`, 126, yPosition);

  if (data.status == "confirmed") doc.save("certificate.pdf");
};
