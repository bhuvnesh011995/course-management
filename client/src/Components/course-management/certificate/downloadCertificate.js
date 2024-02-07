import jsPDF from "jspdf";
import "jspdf-autotable";
import newSantarliLeftImage from "../../../assets/images/santarlicertificateimage.png";
import tongaHakken2 from "../../../assets/images/tongaHakken2.png";
import moment from "moment";
import tongaCertificateSign from "../../../assets/images/tongaCertificateSign.png";
import tongaUpperText from "../../../assets/images/tongaUpperText.png";
import tongaDownText from "../../../assets/images/tongaDownText.png";

export const DownloadCertificate = (
  data,
  inputData,
  certificateType,
  leadDetail,
) => {
  const doc = new jsPDF();
  let textWidth, pageWidth, centerX;
  let yPosition = 10;
  doc.setFillColor(33, 158, 188);
  doc.rect(0, 0, 240, 23, "F");
  doc.rect(0, 274, 240, 23, "F");

  doc.setFillColor(255, 255, 255);

  doc.rect(8.4, 0, 2.7, 300, "F");
  doc.rect(200.4, 0, 2.7, 300, "F");

  doc.setFillColor(0, 119, 182);

  doc.rect(8, 0, 0.2, 300, "F");
  doc.rect(203, 0, 0.2, 300, "F");
  doc.rect(11, 0, 0.2, 300, "F");
  doc.rect(200, 0, 0.2, 300, "F");

  doc.setFillColor(0, 0, 0);

  // doc.setFont("times", "normal");
  // doc.setFontSize(80);

  yPosition += 20;
  // doc.setTextColor(0, 51, 102);
  // doc.text(`SANTARLI`, 57, yPosition);

  // yPosition -= 30;

  doc.addImage(newSantarliLeftImage, "png", 20, yPosition, 170, 36);
  yPosition += 45;

  doc.addImage(tongaUpperText, "png", 20, yPosition, 170, 56);

  // doc.setFontSize(25);
  // doc.setFont("times", "italic", "bold");
  // doc.setTextColor(0, 4, 94);

  // doc.text(`SANTARLI CONSTRUCTION PTE LTD`, 30.5, yPosition);

  // doc.setTextColor(0, 0, 0);
  // doc.setFontSize(15);
  // doc.setFont("helvetica", "normal");

  // yPosition += 13;
  // doc.text(`ACCREDITED TRAINING PROVIDER`, 60, yPosition);
  // yPosition += 10;
  // doc.text(`APPROVED BY`, 85, yPosition);
  // yPosition += 10;
  // doc.text(
  //   `BUILDING CONSTRUCTION AND AUTHORITY (BCA),SINGAPORE`,
  //   26,
  //   yPosition,
  // );

  // doc.setFontSize(28);
  // doc.setFont("times", "normal");

  // yPosition += 16;
  // doc.text(`It is hereby certified that`, 61, yPosition);
  doc.setFontSize(21);
  doc.setFont("helvetica", "bold");

  textWidth = doc.getTextDimensions(data.participantName).w;

  pageWidth = doc.internal.pageSize.getWidth();

  centerX = (pageWidth - textWidth) / 2;

  // Set the text to be centered
  // doc.text(text, centerX, 150);
  yPosition += 70;
  doc.text(data.participantName, centerX, yPosition);
  yPosition += 10;

  textWidth = doc.getTextDimensions(`(NRIC/FIN NO: ${data.participantNRIC})`).w;

  pageWidth = doc.internal.pageSize.getWidth();

  centerX = (pageWidth - textWidth) / 2;

  doc.text(`(NRIC/FIN NO: ${data.participantNRIC})`, centerX, yPosition);
  yPosition += 10;

  textWidth = doc.getTextDimensions(
    `${
      inputData.certificateType?.length ? `${inputData.certificateType}/` : ""
    }${data.coreTradeRegNo}`,
  ).w;

  pageWidth = doc.internal.pageSize.getWidth();

  centerX = (pageWidth - textWidth) / 2;

  doc.text(
    `${
      inputData.certificateType?.length ? `${inputData.certificateType}/` : ""
    }${data.coreTradeRegNo}`,
    centerX,
    yPosition,
  );

  // doc.setFont("times", "normal");
  yPosition += 7;

  doc.addImage(tongaDownText, "png", 20, yPosition, 170, 40);

  // doc.setFontSize(25);
  // doc.text(`has attained and successfully completed the`, 32, yPosition);

  // doc.setFontSize(20);
  // doc.setFont("helvetica", "bold");
  // yPosition += 16;
  // doc.text(`CONTINUING EDUCATION AND TRAINING (CET)`, 27, yPosition);

  // doc.setFont("times", "normal");
  // doc.setFontSize(23);
  // yPosition += 8;
  // doc.text(`for`, 100, yPosition);

  textWidth = doc.getTextDimensions(`${data.tradeType}`).w;

  pageWidth = doc.internal.pageSize.getWidth();

  centerX = (pageWidth - textWidth) / 2;

  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  yPosition += 50;
  doc.text(`${data.tradeType}`, centerX, yPosition);

  textWidth = doc.getTextDimensions(
    `ON ${moment(inputData.certificateDate).format("DD-MMM-YYYY")}`,
  ).w;

  pageWidth = doc.internal.pageSize.getWidth();

  centerX = (pageWidth - textWidth) / 2;

  yPosition += 12;
  doc.text(
    `ON ${moment(inputData.certificateDate).format("DD-MMM-YYYY")}`,
    centerX,
    yPosition,
  );
  doc.addImage(tongaHakken2, "png", 20, yPosition + 5, 75, 23);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  yPosition += 32;
  doc.text(`TRAINING PARTNERS`, 47, yPosition);
  yPosition -= 5;
  doc.rect(115, yPosition, 80, 0.5, "F");
  yPosition -= 18;
  doc.addImage(tongaCertificateSign, "png", 115, yPosition, 70, 17);
  yPosition += 18;
  doc.setFontSize(13);
  doc.setFont("helvetica");
  yPosition += 5;
  doc.text(`DANIEL TONG`, 135, yPosition);
  yPosition += 5;
  doc.text(`OPERATION DIRECTOR (ATTC)`, 118, yPosition);
  doc.setFont("helvetica", "normal");

  yPosition += 10;
  doc.text(
    `Certificate No. ${inputData.tradeTypeCode}/${
      leadDetail.leadCertificateNumber
        ? leadDetail.leadCertificateNumber
        : Date.now()
    }/${moment().year()}`,
    20,
    yPosition,
  );

  yPosition += 6;
  doc.text(
    `Date: ${moment(data.updated_at).format("DD MMM YYYY")}`,
    20,
    yPosition,
  );

  if (certificateType == "sendMail") {
    const pdfDataUri = doc.output("datauristring");
    const pdfBase64Data = pdfDataUri.split(
      "data:application/pdf;filename=generated.pdf;base64,",
    );
    return pdfBase64Data[1];
  } else
    doc.save(
      `${inputData?.tradeTypeCode?.length ? inputData.tradeTypeCode : ""} ${
        inputData?.certificateType?.length
          ? `(${inputData.certificateType})`
          : ""
      } ${leadDetail.leadCertificateNumber}.pdf`,
    );
};
