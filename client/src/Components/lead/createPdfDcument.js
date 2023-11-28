import jsPDF from "jspdf";
import moment from "moment";
import pdfLogo from "../../assets/images/pdfLogo.png";
import { filePath } from "../../common-components/useCommonUsableFunctions";

export const CreatePaymentPdfBase64 = (
  lead,
  subject,
  userData,
  paymentLogo
) => {
  const doc = new jsPDF();

  const createDate = moment().format("dddd, D MMMM YYYY h:mm A");
  let yPosition = 20;

  doc.setFontSize(13); // Adjust the font size as needed
  const headingText = `${userData.email}`;

  // Add the heading to the PDF
  doc.text(headingText, 20, yPosition);
  yPosition += 3;
  doc.rect(20, yPosition, 175, 1.5, "F");
  doc.setFontSize(8);

  yPosition += 7;
  doc.text(`From: `, 20, yPosition);
  doc.text(`astroastaroth58@gmail.com `, 65, yPosition);
  yPosition += 7;
  doc.text(`Sent: `, 20, yPosition);
  doc.text(`${createDate} `, 65, yPosition);
  yPosition += 7;
  doc.text(`To: `, 20, yPosition);
  doc.text(`${lead.contactPersonEmail} `, 65, yPosition);
  yPosition += 7;
  doc.text(`Subject: `, 20, yPosition);
  doc.text(`${subject}`, 65, yPosition);
  yPosition += 7;
  doc.text(`Attachments: `, 20, yPosition);
  doc.text(`SANTARLI BANK DETAILpdf.pdf `, 65, yPosition);

  doc.setFontSize(18);
  yPosition += 15;
  doc.text(`Dear Sir/Madam,`, 20, yPosition);
  yPosition += 12;
  doc.text(
    `The applicant as below-mentioned has been approved :`,
    20,
    yPosition
  );

  yPosition += 17;
  doc.text(``, 20, yPosition);

  const columns = ["S/N", "NAME OF PARTICIPANT", "NRIC/FIN NO"];
  const data = [["1", lead?.participantName, lead?.participantNRIC]];

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  yPosition += 8;
  doc.autoTable({
    head: [columns],
    body: data,
    margin: { top: yPosition, left: 4 },
    styles: {
      valign: "middle",
      halign: "center",
    },
    columnStyles: {
      0: { cellWidth: 40 },
      1: { cellWidth: 80 },
      2: { cellWidth: 80 },
    },
  });
  doc.setFillColor(255, 204, 190);
  doc.rect(4, 102, 200, 8.5, "F");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9);
  doc.text(`Make the payment of `, 4, 107);

  doc.setFont("helvetica", "bold");
  doc.text(`$${lead.price} `, 35, 107);
  doc.setFont("helvetica", "normal");
  doc.text(`inclusive of GST to us`, 55, 107);
  doc.setFont("helvetica", "bold");
  doc.text(`(payable to "SANTARLI CONSTRUCTION PTE LTD")`, 87, 107);
  doc.setFont("helvetica", "normal");
  const secondTableRows = [
    [
      "i.",
      "Our confirmation of training place is based on first come , first serve basis.",
    ],
    [
      "ii.",
      "We will give you a call to arrange the test schedule when the payment is received.",
    ],
    [
      "iii",
      "Our invoice will be issued within 1 to 2 weeks after receiving the payment from you.",
    ],
    ["iv", "No WTU funding for CoreTrade registration."],
  ];

  yPosition += 20;

  doc.autoTable({
    head: [["S/N", "NOTE"]],
    body: secondTableRows,
    margin: { top: yPosition, left: 4 },
    headStyles: { fillColor: [255, 140, 0] },
  });

  yPosition += 55;
  doc.setFontSize(11);
  doc.text("BEST REGARDS,", 20, yPosition);
  yPosition += 10;
  doc.text(`${userData.name}`, 20, yPosition);
  yPosition += 6;
  doc.text(
    `TONGA PTE LTD | A training partner of SANTARLI ATTC & OTC |`,
    20,
    yPosition
  );
  yPosition += 6;
  doc.text(
    `531 Yishun Industrial Park A, #03-02 Santarli Building Singapore 768739`,
    20,
    yPosition
  );
  yPosition += 6;
  doc.text(`T | `, 20, yPosition);
  doc.setTextColor(0, 0, 255);
  doc.text(`(${65}) ${67556676} `, 25, yPosition);
  doc.rect(25, 213.5, 26, 0.2, "F");

  doc.setTextColor(0, 0, 0);
  doc.text(`| F `, 55, yPosition);
  doc.setTextColor(0, 0, 255);
  doc.text(`(${65}) ${67554566}`, 60, yPosition);
  doc.rect(60, 213.5, 26, 0.2, "F");

  doc.setTextColor(0, 0, 0);
  doc.text(`| W `, 90, yPosition);

  doc.setTextColor(0, 0, 255);

  doc.textWithLink("www.santarli-attc.com", 99, yPosition, {
    url: "https://www.santarli-attc.com/",
  });

  doc.rect(99, 213.5, 36, 0.2, "F");

  yPosition += 15;
  if (paymentLogo?.length) {
    doc.addImage(filePath(paymentLogo), "png", 20, yPosition, 100, 40);
  } else {
    doc.addImage(pdfLogo, "png", 20, yPosition, 100, 40);
  }
  const pdfDataUri = doc.output("datauristring");
  const base64Data = pdfDataUri.split(
    "data:application/pdf;filename=generated.pdf;base64,"
  )[1];
  return base64Data;
};

export const CreateBankPdf = () => {
  const doc = new jsPDF();
  let yPosition = 20;
  doc.setFontSize(17);
  doc.text("SANTARLI CONSTRUCTION PTE LTD - BANK DETAILS", 20, yPosition);
  yPosition += 3;
  doc.rect(20, yPosition, 175, 1.5, "F");
  doc.setFontSize(14);

  const data = [
    ["Name of Account : ", "SANTARLI CONSTRUCTION PTE LTD"],
    ["Name Of Bank : ", "OCBC BANK"],
    ["ACCOUNT NUMBER : ", "601-069800-001"],
  ];
  yPosition += 14;
  doc.autoTable({
    body: data,
    margin: { top: yPosition, left: 40 },
    styles: {
      valign: "middle",
      halign: "center",
    },
    columnStyles: {
      0: { cellWidth: 40 },
      1: { cellWidth: 80 },
    },
  });

  yPosition += 50;
  doc.text("* Kindly email the", 40, yPosition);
  doc.setFont("helvetica", "bold");
  doc.text("bank transaction copy", 79, yPosition);
  yPosition += 1;
  doc.rect(79, yPosition, 53, 0.2, "F");

  doc.setFont("helvetica", "normal");
  yPosition -= 1;
  doc.text("to us after ", 134, yPosition);
  yPosition += 8.5;
  doc.text("the fund transfering is completed.", 40, yPosition);
  yPosition += 10;
  doc.setFont("helvetica", "bold");
  doc.text("(Please show us the transaction date in the copy)", 40, yPosition);
  doc.setFont("helvetica", "normal");
  yPosition += 30;
  doc.text("* Kindly provide us the candidate`s name and", 40, yPosition);
  yPosition += 8.5;
  doc.text("NRIC/Fin no. that the payment you are making for. ", 40, yPosition);
  const pdfDataUri = doc.output("datauristring");
  const base64Data = pdfDataUri.split(
    "data:application/pdf;filename=generated.pdf;base64,"
  )[1];
  return base64Data;
};
