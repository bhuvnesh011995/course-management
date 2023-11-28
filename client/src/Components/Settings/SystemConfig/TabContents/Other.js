import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../../../../context/authContext";
import { useForm } from "react-hook-form";
import { formAxiosInstance } from "../../../../common-components/axiosInstance";
import { filePath } from "../../../../common-components/useCommonUsableFunctions";

export default function Other({ show, setShow }) {
  const { user, setUser } = useAuth();
  const { register, handleSubmit, watch, reset, setValue, getValues } =
    useForm();

  useEffect(() => {
    if (user.otherConfigurations?._id) reset(user.otherConfigurations);
  }, [user]);
  const newOtherConfiguration = async (otherConfigurations) => {
    try {
      const formdata = new FormData();
      if (otherConfigurations.loginLogo.length)
        if (otherConfigurations.loginLogo[0]?.name)
          formdata.append("loginLogoImg", otherConfigurations.loginLogo[0]);
      if (otherConfigurations.attendanceLogo.length)
        if (otherConfigurations.attendanceLogo[0]?.name)
          formdata.append(
            "attendanceLogoImg",
            otherConfigurations.attendanceLogo[0]
          );
      if (otherConfigurations.paymentPdfLogo.length)
        if (otherConfigurations.paymentPdfLogo[0]?.name)
          formdata.append(
            "paymentPdfLogoImg",
            otherConfigurations.paymentPdfLogo[0]
          );
      const updateOtherConfiguration = await formAxiosInstance.post(
        "/config/other",
        formdata
      );
      setUser((old) => ({
        ...old,
        otherConfigurations: updateOtherConfiguration.data.data,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const openFile = (fileName) => {
    const fileData = watch(fileName);
    if (fileData)
      if (fileData[0]?.name) {
        const fileUrl = URL.createObjectURL(watch(fileName)[0]);
        window.open(fileUrl);
        return;
      }

    const selectedFilePath = user.otherConfigurations[fileName];

    const logoPath = filePath(selectedFilePath);
    window.open(logoPath);
  };

  return (
    <Card>
      <Card.Body>
        <form onSubmit={handleSubmit(newOtherConfiguration)}>
          <div className="tab-pane">
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label>Login Logo</label>
                  <input
                    type={
                      watch("loginLogo") ==
                        user.otherConfigurations?.loginLogo &&
                      user.otherConfigurations?.loginLogo?.length
                        ? "text"
                        : "file"
                    }
                    className="form-control"
                    {...register("loginLogo")}
                    disabled={watch("loginLogo") && watch("loginLogo")?.length}
                  />
                  {watch("loginLogo") && watch("loginLogo")?.length ? (
                    <div className="input-icons">
                      {watch("loginLogo")?.length && (
                        <i
                          className="fas fa-trash text-danger cursor-pointer"
                          onClick={() => setValue("loginLogo", "")}
                        ></i>
                      )}{" "}
                      <i
                        className="fas fa-eye text-primary cursor-pointer"
                        onClick={() => openFile("loginLogo")}
                      ></i>
                    </div>
                  ) : (
                    ""
                  )}
                  <small>Upload files only: gif,png,jpg,jpeg</small> <br />
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label>Attendance Logo</label>
                  <input
                    type={
                      watch("attendanceLogo") ==
                        user.otherConfigurations?.attendanceLogo &&
                      user.otherConfigurations?.attendanceLogo?.length
                        ? "text"
                        : "file"
                    }
                    className="form-control"
                    {...register("attendanceLogo")}
                    disabled={
                      watch("attendanceLogo") && watch("attendanceLogo")?.length
                    }
                  />
                  {watch("attendanceLogo") &&
                  watch("attendanceLogo")?.length ? (
                    <div className="input-icons">
                      {watch("attendanceLogo")?.length && (
                        <i
                          className="fas fa-trash text-danger cursor-pointer"
                          onClick={() => setValue("attendanceLogo", "")}
                        ></i>
                      )}{" "}
                      <i
                        className="fas fa-eye text-primary cursor-pointer"
                        onClick={() => openFile("attendanceLogo")}
                      ></i>
                    </div>
                  ) : (
                    ""
                  )}
                  <small>- Upload files only: jpg,jpeg,png</small> <br />
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-3">
                  <label>Lead Payment pdf Logo</label>
                  <input
                    type={
                      watch("paymentPdfLogo") ==
                        user.otherConfigurations?.paymentPdfLogo &&
                      user.otherConfigurations?.paymentPdfLogo?.length
                        ? "text"
                        : "file"
                    }
                    className="form-control"
                    {...register("paymentPdfLogo")}
                    disabled={
                      watch("paymentPdfLogo") && watch("paymentPdfLogo")?.length
                    }
                  />
                  {watch("paymentPdfLogo") &&
                  watch("paymentPdfLogo")?.length ? (
                    <div className="input-icons">
                      {watch("paymentPdfLogo")?.length && (
                        <i
                          className="fas fa-trash text-danger cursor-pointer"
                          onClick={() => setValue("paymentPdfLogo", "")}
                        ></i>
                      )}{" "}
                      <i
                        className="fas fa-eye text-primary cursor-pointer"
                        onClick={() => openFile("paymentPdfLogo")}
                      ></i>
                    </div>
                  ) : (
                    ""
                  )}
                  <small>- Upload files only: jpg,jpeg,png</small> <br />
                </div>
              </div>

              {/* <div className="col-md-4">
                  <div className="mb-3">
                    <label "formrow-firstname-input" className="form-label">
                      Default Language
                    </label>
                    <select></select>
                  </div>
                </div> */}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary waves-effect waves-light w-25 float-end"
          >
            SAVE
          </button>
        </form>
      </Card.Body>
    </Card>
  );
}
