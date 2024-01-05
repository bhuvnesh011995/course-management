export const CreatePaymentDetailsMail = (data) => {
  console.log(data);
  let mailMessage = "";

  if (data.registrationType.registrationCode) {
    mailMessage += `<span>The below payment advice is for our ${data.registrationType.registrationName.toUpperCase()} course,</span><br>`;
  }
  if (data.tradeType) {
    mailMessage += `<h3>${data.tradeType.tradeType.toUpperCase()}</h3>`;
    if (data.tradeLevel) {
      mailMessage += `<h3>( ${data.tradeLevel.tradeLevel.toUpperCase()} )</h3><br>`;
    } else if (data.registrationType.registrationCode == "CRW") {
      mailMessage += `<h3>[${data.registrationType.registrationName}]</h3><br>`;
    }
  }

  mailMessage += `<span>Dear Sir/Madam,</span><br><br>`;
  mailMessage += `<span>The applicant as below-mentioned has been approved: </span><br><br>`;
  mailMessage += `
  <table style="border: 2px solid salmon;" BORDER=1 WIDTH="50%">
  <tr style="background-color:#FFAD84;text-align: left;">
      <td style="padding:15px;">
        <p style="display:flex;">
          Make the payment of <b style="padding:0 15px;color: red;">$</b> <b style="padding: 0 15px;color: red;">  (inclusive of GST) </b> to us
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
<table style="border: 2px solid salmon;" BORDER=1 WIDTH="50%">
<tr style="background-color: #ffdfcf;" >
  <th>S/N</th>
  <th><u>NAME OF APPLICANT</u></th>
  <th>NRIC/FIN NO</th>
</tr>
<tr>
  <td>1.</td>
  <td>participant name</td>
  <td>87654ygv</td>
</tr>
</table>
<p style="padding-top: 50px;"></p>
<table  style="border: 2px solid ;" BORDER=1 WIDTH="50%">
<tr style="background-color: #ff4800;">
<th>NOTE</th>
</tr>
</table>

<table  style="border: 2px solid ;" BORDER=1 WIDTH="50%">
<tr>
  <td>i</td>
  <td>Our confirmation of training place is based on first come , first serve basis. </td>
</tr>
<tr >
  <td>ii</td>
  <td></td>
</tr>
<tr >
  <td>iii</td>
  <td></td>
</tr>
<tr >
  <td>iv</td>
  <td></td>
</tr>
</table>
  
  `;
  console.log(mailMessage);
};
