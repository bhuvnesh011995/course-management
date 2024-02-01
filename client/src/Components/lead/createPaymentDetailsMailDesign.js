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
  <div style="border: 2px solid ${
    data.registrationType.registrationName == "CET(Renewal)" ? "blue" : "salmon"
  }; width:765px; background-color:${
    data.registrationType.registrationName == "CET(Renewal)"
      ? "#7CB9E8"
      : "#FFAD84"
  };" >

        <p style="display:flex;">
          Make the payment of <b style="color: red;">&nbsp; $ ${
            data.coursePrice
          }</b> &nbsp;<b style="color: red;">(inclusive of GST)&nbsp; </b> to us
          <p style="margin-top:-13px;">
            <b >Payment Mode </b>
          </p>
          <p style="color: red;text-align: left; margin-top:-13px;">
            <b>
              <i>Bank Transfer</i>
            </b>
          </p>
          <p style="margin-top:-13px;">- Name of Account : SANTARLI CONSTRUCTION PTE LTD</p>
          <p style="margin-top:-13px;">- Name of Bank    : OCBC BANK</p>
          <p style="margin-top:-13px;">- Account No      : 601-069800-001</p>
        <p style="background-color: yellow; margin-top:-13px;">* Please provide us the bank transaction copy (with transaction date), including the applicant's name and NRIC/Fin No.</p>
<p style="color: red; margin-top:-13px;">Cheque</p>
<p style="margin-top:-13px;">- Payable to SANTARLI CONSTRUCTION PTE LTD</p>
        </p>

</div>
<table style="border: 2px solid ${
    data.registrationType.registrationName == "CET(Renewal)" ? "blue" : "salmon"
  };" BORDER=1 WIDTH="50%">
  <thead>
<tr style="background-color: ${
    data.registrationType.registrationName == "CET(Renewal)"
      ? "#F0F8FF"
      : "#ffdfcf"
  };" >
  <th style="width:6%; text-align: center;">S/N</th>
  <th style="width:47%; text-align: center;"><u>NAME OF APPLICANT</u></th>
  <th style="width:47%; text-align: center;">NRIC/FIN NO</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="text-align: center;">1.</td>
  <td style="text-align: center;">${data.participantName}</td>
  <td style="text-align: center;">${data.participantNRIC}</td>
</tr>
</tbody>
</table>
<p style="padding-top: 25px;"></p>
${
  data.registrationType.registrationName == "CET(Renewal)"
    ? `
    <p style="margin-top:-13px;"> * The course will be conducted via ZOOM, and the duration of class will be >4hrs.</p>
    <p style="margin-top:-13px;"> * For applicants to attend this online course, all they need is a smart phone with video capability and network connection. </p>
    <p style="margin-top:-13px;"> * Please issue the payment of CoreTrade (New Course Registration) & CET (Renewal) <u style="color:red">SEPARATELY</u></p>
    <P style="color:red; margin-top:-13px;"> * Our confirmation of training place is based on first come, first serve basis </P>
    <p style="color:red; margin-top:-13px;"> * We will arrange the earliest test date for you when the payment is received .</p>
    <p style="margin-top:-13px;"> * INVOICE will be issued within 1 - 2 weeks after receiving the payment.</p>`
    : `

<table  style="border: 2px solid ; " BORDER=1 WIDTH="50%">
<thead>
<tr style="background-color: #ff4800;">
<th style="text-align: center;" width:20%; colspan="2">NOTE</th>
</tr>
</thead>
</table>

<table  style="border: 2px solid ; " BORDER=1 WIDTH="50%">
<thead>
<tr>
  <th style="width:6%">i</th>
  <th style="width:96% text-align:center;">Our confirmation of training place is based on first come , first serve basis. </th>
</tr>
<tr >
  <th style="width:6%">ii</th>
  <th style="width:96% text-align:center;">We will give you a call to arrange the test schedule when the payment is received. </th>
</tr>
<tr >
  <th style="width:6%">iii</th>
  <th style="width:96% text-align:center;">Our invoice will be issued within 1 to 2 weeks after receiving the payment from you . </th>
</tr>
<tr >
  <th style="width:6%">iv</th>
  <th style="width:96% text-align:center;">No WTU funding for CoreTrade registration .</th>
</tr>
</thead>
</table>
`
}
<p style="padding-top: 15px;"></p>
<p >
  <b style="font-weight: bolder;">BEST REGARDS</b>
</p>
<p style="margin-top:-13px;">
  <b style="font-weight: bolder;">${data.loginUserName.toUpperCase()}</b>
</p>
<p style="margin-top:-13px;">TONGA PTE LTD | A training partner of SANTARLI ATTC & OTC | </p>
<p style="margin-top:-13px;">531 Yishun Industrial Park A, #03-02 Santarli Building Singapore 768739</p>
<p style="margin-top:-13px;">T : <a href="tel:656-755-6676"><u>(65)67556676</u></a> | F : <a href="tel:656-755-4566"><u>(65)67554566</u></a> | W : <a href="https://www.santarli-attc.com/"><u>www.santarli-attc.com</u></a></p>

  `;
  return mailMessage;
};
