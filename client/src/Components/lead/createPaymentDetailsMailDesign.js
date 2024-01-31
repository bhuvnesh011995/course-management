export const CreatePaymentDetailsMail = (data) => {
  let mailMessage = "";
  // if (data.tradeType) {
  //   if (data.tradeLevel) {
  //     mailMessage += `<p style="display:flex;" >- APPROVAL OF ONLINE REGISTRATION - `;
  //     mailMessage += `<b style="font-size: 15px; "> ${data.tradeType.tradeType.toUpperCase()}</b>`;
  //     mailMessage += `<b style="font-size: 15px; "> ( ${data.tradeLevel.tradeLevel.toUpperCase()} )</b></p>`;
  //   } else if (data.registrationType.registrationCode == "CRW") {
  //     mailMessage += `<p style="display:flex;">- APPROVAL OF ONLINE APPLICATION - `;
  //     mailMessage += `<b style="font-size: 15px; "> ${data.tradeType.tradeType.toUpperCase()}</b></p>`;
  //   }
  // }

  mailMessage += `<span>Dear Sir/Madam,</span>`;
  mailMessage += `<span>The applicant as below-mentioned has been approved: </span>`;
  mailMessage += `
  <table style="border: 2px solid ${
    data.registrationType.registrationName == "CET(Renewal)" ? "blue" : "salmon"
  };" BORDER=1 WIDTH="50%">
  <tr style="background-color:${
    data.registrationType.registrationName == "CET(Renewal)"
      ? "#7CB9E8"
      : "#FFAD84"
  };text-align: left;">
      <td style="padding:15px;">
        <p style="display:flex;">
          Make the payment of <b style="padding:0 15px;color: red;">$ ${
            data.coursePrice
          }</b> <b style="padding: 0 15px;color: red;">  (inclusive of GST) </b> to us
          <p>
            <b >Payment Mode </b>
          </p>
          <p style="color: red;text-align: left;">
            <b>
              <i>Bank Transfer</i>
            </b>
          </p>
          <p>- Name of Account : SANTARLI CONSTRUCTION PTE LTD</p>
          <p>- Name of Bank    : OCBC BANK</p>
          <p>- Account No      : 601-069800-001</p>
        <p style="background-color: yellow;">* Please provide us the bank transaction copy (with transaction date), including the applicant's name and NRIC/Fin No.</p>
<p style="color: red;">Cheque</p>
<p>- Payable to SANTARLI CONSTRUCTION PTE LTD</p>
        </p>
        
      </td>
  </tr>

</table>
<table style="border: 2px solid ${
    data.registrationType.registrationName == "CET(Renewal)" ? "blue" : "salmon"
  };" BORDER=1 WIDTH="50%">
<tr style="background-color: ${
    data.registrationType.registrationName == "CET(Renewal)"
      ? "#F0F8FF"
      : "#ffdfcf"
  };" >
  <th>S/N</th>
  <th><u>NAME OF APPLICANT</u></th>
  <th>NRIC/FIN NO</th>
</tr>
<tr>
  <td>1.</td>
  <td>${data.participantName}</td>
  <td>${data.participantNRIC}</td>
</tr>
</table>
<p style="padding-top: 50px;"></p>
${
  data.registrationType.registrationName == "CET(Renewal)"
    ? `
    <p> * The course will be conducted via ZOOM, and the duration of class will be >4hrs.</p>
    <p> * For applicants to attend this online course, all they need is a smart phone with video capability and network connection. </p>
    <p> * Please issue the payment of CoreTrade (New Course Registration) & CET (Renewal) <u style="color:red">SEPARATELY</u></p>
    <P style="color:red"> * Our confirmation of training place is based on first come, first serve basis </P>
    <p style="color:red"> * We will arrange the earliest test date for you when the payment is received .</p>
    <p > * INVOICE will be issued within 1 - 2 weeks after receiving the payment.</p>`
    : `

<table  style="border: 2px solid ;" BORDER=1 WIDTH="50%">
<tr style="background-color: #ff4800;">
<th style="padding-left:50%;">NOTE</th>
</tr>
</table>

<table  style="border: 2px solid ;" BORDER=1 WIDTH="50%">
<tr>
  <td>i</td>
  <td>Our confirmation of training place is based on first come , first serve basis. </td>
</tr>
<tr >
  <td>ii</td>
  <td>We will give you a call to arrange the test schedule when the payment is received. </td>
</tr>
<tr >
  <td>iii</td>
  <td>Our invoice will be issued within 1 to 2 weeks after receiving the payment from you . </td>
</tr>
<tr >
  <td>iv</td>
  <td>No WTU funding for CoreTrade registration .</td>
</tr>
</table>
`
}
  
<p>
  <b style="font-weight: bolder;">BEST REGARDS</b>
</p>
<p>
  <b style="font-weight: bolder;">${data.loginUserName.toUpperCase()}</b>
</p>
<p>TONGA PTE LTD | A training partner of SANTARLI ATTC & OTC | </p>
<p>531 Yishun Industrial Park A, #03-02 Santarli Building Singapore 768739</p>
<p>T : <a href="tel:656-755-6676"><u>(65)67556676</u></a> | F : <a href="tel:656-755-4566"><u>(65)67554566</u></a> | W : <a href="https://www.santarli-attc.com/"><u>www.santarli-attc.com</u></a></p>

  `;
  return mailMessage;
};
