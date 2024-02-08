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

  mailMessage += `<p>Dear Sir/Madam,</p>`;
  mailMessage += `<p>The applicant as below-mentioned has been approved: </p>`;
  mailMessage += `
  <table
  WIDTH="50%"
  style="border: 2px solid ${
    data.registrationType.registrationName == "CET(Renewal)"
      ? "#B4D4FF"
      : "#FFC288"
  }; background-color:${
    data.registrationType.registrationName == "CET(Renewal)"
      ? "#7CB9E8"
      : "#FFAB73"
  }; font-size:13px; color:black;"
>
  <tr>
    <td>
      <p>
        (i) Make the payment of
        <b style="color: ${
          data.registrationType.registrationName == "CET(Renewal)"
            ? "black"
            : "#D04848"
        };">&nbsp; $ ${data.coursePrice}</b>
        &nbsp;<b style="color: ${
          data.registrationType.registrationName == "CET(Renewal)"
            ? "black"
            : "#D04848"
        };">(inclusive of GST)&nbsp; </b> to us
      </p>
      <div style=" margin-left:40px;">
        <p style="line-height: .4; color:black; font-weight:bolder;">
           &nbsp; &nbsp;  Payment Mode 
        </p>
        <p style="color: #D04848; text-align: left; line-height: .4; font-weight:bolder;">
          <b><i> &nbsp; &nbsp; Bank Transfer</i></b>
        </p>
        <p style="line-height: .4;">  - Name of Account : SANTARLI CONSTRUCTION PTE LTD</p>
        <p style="line-height: .4;">  - Name of Bank : OCBC BANK</p>
        <p style="line-height: .4;">  - Account No : 601-069800-001</p>
        <p >
        <span style="background-color: ${
          data.registrationType.registrationName == "CET(Renewal)"
            ? "rgb(227,225,217)"
            : "yellow"
        };">
        * Please provide us the bank transaction copy (with transaction date), including the applicant's 
      name and NRIC/Fin No.
        </span>
        </p>
        <p style="color: #D04848; line-height: .4; font-weight:bolder;"><b> &nbsp; &nbsp;  Cheque</b></p>
        <p style="line-height: .4;"> - Payable to SANTARLI CONSTRUCTION PTE LTD</p>
      </div>
      
    </td>
  </tr>
</table>

<table style="color:black; font-size:13px; border: 2px solid ${
    data.registrationType.registrationName == "CET(Renewal)"
      ? "#B4D4FF"
      : "#FFC288"
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
<p style="padding-top: 25px; color:black;"></p>
${
  data.registrationType.registrationName == "CET(Renewal)"
    ? `
    <p style="line-height: .4;"> * The course will be conducted via ZOOM, and the duration of class will be >4hrs.</p>
    <p style="line-height: .8;"> * For applicants to attend this online course, all they need is a smart phone with video capability and network connection. </p>
    <p style="line-height: .4;"> * Please issue the payment of CoreTrade (New Course Registration) & CET (Renewal) <u style="color:red">SEPARATELY</u></p>
    <P style="color:red; line-height: .4;"> * Our confirmation of training place is based on first come, first serve basis </P>
    <p style="color:red; line-height: .4;"> * We will arrange the earliest test date for you when the payment is received .</p>
    <p style="line-height: .4;"> * INVOICE will be issued within 1 - 2 weeks after receiving the payment.</p>`
    : `

<table  style="border: 2px solid ; " color:black; BORDER=1 WIDTH="50%">
<thead>
<tr style="background-color: #ff4800;">
<th style="text-align: center;" width:20%; colspan="2">NOTE</th>
</tr>
</thead>
</table>

<table  style="border: 2px solid ;color:black; font-size:13px;" BORDER=1 WIDTH="50%">
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
<p style="padding-top: 10px; "></p>
<p style="line-height: .7; color:black; font-weight: bolder; ">
  BEST REGARDS
</p>
<p style="line-height: .7; color:black; font-weight: bolder; ">
  ${data.loginUserName.toUpperCase()}
</p>
<p style="line-height: .4; color:black;">TONGA PTE LTD | A training partner of SANTARLI ATTC & OTC | </p>
<p style="line-height: .4; color:black;">531 Yishun Industrial Park A, #03-02 Santarli Building Singapore 768739</p>
<p style="line-height: .4; color:black;">T : <a href="tel:656-755-6676"><u>(65)67556676</u></a> | F : <a href="tel:656-755-4566"><u>(65)67554566</u></a> | W : <a href="https://www.santarli-attc.com/"><u>www.santarli-attc.com</u></a></p>

  `;
  return mailMessage;
};
