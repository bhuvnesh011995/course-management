import moment from "moment";
import { convertToMongooseStartEndTiming } from "../../../common-components/useCommonUsableFunctions";
import { BASEURL } from "../../../config/config";

export const CreateCertificateMailMessage = (data, user) => {
  const message = `<div style="color:black;">  <p >Dear Sir/Madam,</p>
  <p style="line-height: 1.8;">Thank you very much for joining us for the <span style="color:#D04848; font-weight:bolder; font-size:13px;">CET ONLINE COURSE - ${
    data.tradeType
  }</span>&nbsp; on the following date :</p>
  <p style="line-height: 1.8;">- ${moment(data.startDate).format(
    "DD MMM YYYY",
  )}&nbsp; (&nbsp;${convertToMongooseStartEndTiming(
    data.startTime,
    data.endTime,
  )}&nbsp;)</p>

  <p style="line-height: 1.8;">We hereby attached the E-Certificate for participating in the session : </p>
  <p style="line-height: 1.8;">Please print out this <b>BCA Statement Of Registration </b>&nbsp; at <a href="https://www.bca.gov.sg/cwrs"><u>www.bca.gov.sg/cwrs</u></a> &nbsp; (printable withing 1 week after completed the CET Course) </p>
  <p style="line-height: 1.8;"><b>Direct Link : </b> <a href="https://www.bca.gov.sg/CWRS/Public/CheckStatus.aspx"><u>www.bca.gov.sg/CWRS/Public/CheckStatus.aspx</u></a></p>
  <p style="line-height: .4;">BEST REGARDS,</p>
  <p style="line-height: .4; font-weight:bolder;">${user.userData.name.toUpperCase()}</p>
  <p style="line-height: .4;">TONGA PTE LTD | A training partner of SANTARLI ATTC & OTC | </p>
<p style="line-height: .4;">531 Yishun Industrial Park A, #03-02 Santarli Building Singapore 768739</p>
<p style="line-height: .4;">T : <a href="tel:656-755-6676"><u>(65)67556676</u></a> | F : <a href="tel:656-755-4566"><u>(65)67554566</u></a> | W : <a href="https://www.santarli-attc.com/"><u>www.santarli-attc.com</u></a></p>
<img src="${BASEURL}/images/constantImages/pdfLogo.png" />
</div>`;
  return message;
};
