import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../../../../context/authContext";
import { useForm } from "react-hook-form";
import { formAxiosInstance } from "../../../../common-components/axiosInstance";
import { filePath } from "../../../../common-components/useCommonUsableFunctions";

export default function Other({ show, setShow }) {
  const { user, setUser } = useAuth();
  const { register, handleSubmit, watch, reset, setValue } = useForm();

  useEffect(() => {
    if (user.otherConfigurations?._id) reset(user.otherConfigurations);
  }, []);
  const newOtherConfiguration = async (otherConfigurations) => {
    try {
      const formdata = new FormData();
      if (otherConfigurations.loginLogo.length)
        formdata.append("loginLogoImg", otherConfigurations.loginLogo[0]);
      if (otherConfigurations.attendanceLogo.length)
        formdata.append(
          "attendanceLogoImg",
          otherConfigurations.attendanceLogo[0]
        );
      if (otherConfigurations.paymentPdfLogo.length)
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
          <div class="tab-pane">
            <div class="row">
              <div class="col-md-4">
                <div class="mb-3">
                  <label>Login Logo</label>
                  <input
                    type={
                      watch("loginLogo") == user.otherConfigurations.loginLogo
                        ? "text"
                        : "file"
                    }
                    class="form-control"
                    {...register("loginLogo")}
                    disabled={watch("loginLogo")}
                  />
                  {watch("loginLogo") && (
                    <div className="input-icons">
                      {watch("loginLogo") && (
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
                  )}
                  <small>Upload files only: gif,png,jpg,jpeg</small> <br />
                </div>
              </div>

              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Attendance Logo</label>
                  <input
                    type={
                      watch("attendanceLogo") ==
                      user.otherConfigurations.attendanceLogo
                        ? "text"
                        : "file"
                    }
                    class="form-control"
                    {...register("attendanceLogo")}
                    disabled={watch("attendanceLogo")}
                  />
                  {watch("attendanceLogo") && (
                    <div className="input-icons">
                      {watch("attendanceLogo") && (
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
                  )}
                  <small>- Upload files only: jpg,jpeg,png</small> <br />
                </div>
              </div>

              <div class="col-md-4">
                <div class="mb-3">
                  <label for="">Lead Payment pdf Logo</label>
                  <input
                    type={
                      watch("paymentPdfLogo") ==
                      user.otherConfigurations.paymentPdfLogo
                        ? "text"
                        : "file"
                    }
                    class="form-control"
                    {...register("paymentPdfLogo")}
                    disabled={watch("paymentPdfLogo")}
                  />
                  {watch("paymentPdfLogo") && (
                    <div className="input-icons">
                      {watch("paymentPdfLogo") && (
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
                  )}
                  <small>- Upload files only: jpg,jpeg,png</small> <br />
                </div>
              </div>

              {/* <div class="col-md-4">
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Default Language
                    </label>
                    <select></select>
                  </div>
                </div> */}
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary waves-effect waves-light w-25 float-end"
          >
            SAVE
          </button>
        </form>
      </Card.Body>
    </Card>
  );
}
