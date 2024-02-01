import moment from "moment";
import { convertToMongooseStartEndTiming } from "../../../common-components/useCommonUsableFunctions";

export const CreateCertificateMailMessage = (data, user) => {
  const message = `  <p >Dear Sir/Madam,</p>
  <p style="margin-top:-13px;">Thank you very much for joining us for the CET ONLINE COURSE - ${
    data.tradeType
  }&nbsp; on the following date :</p>
  <p style="margin-top:-13px;">- ${moment(data.startDate).format(
    "DD MMM YYYY",
  )}&nbsp; (&nbsp;${convertToMongooseStartEndTiming(
    data.startTime,
    data.endTime,
  )}&nbsp;)</p>

  <p style="margin-top:-13px;">We hereby attached the E-Certificate for participating in the session : </p>
  <p style="margin-top:-13px;">Please print out this <b>BCA Statement Of Registration </b>&nbsp; at <a href="https://www.bca.gov.sg/cwrs">www.bca.gov.sg/cwrs</a> &nbsp; (printable withing 1 week after completed the CET Course) </p>
  <p style="margin-top:-13px;"><b>Direct Link : </b> <a href="https://www.bca.gov.sg/CWRS/Public/CheckStatus.aspx">www.bca.gov.sg/CWRS/Public/CheckStatus.aspx</a></p>
  <p style="margin-top:-13px;">BEST REGARDS,</p>
  <p style="margin-top:-13px;">${user.userData.name.toUpperCase()}</p>
  <p style="margin-top:-13px;">TONGA PTE LTD | A training partner of SANTARLI ATTC & OTC | </p>
<p style="margin-top:-13px;">531 Yishun Industrial Park A, #03-02 Santarli Building Singapore 768739</p>
<p style="margin-top:-13px;">T : <a href="tel:656-755-6676"><u>(65)67556676</u></a> | F : <a href="tel:656-755-4566"><u>(65)67554566</u></a> | W : <a href="https://www.santarli-attc.com/"><u>www.santarli-attc.com</u></a></p>
`;
  return message;
};
