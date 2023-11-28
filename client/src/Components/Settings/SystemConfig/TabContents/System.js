import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { formAxiosInstance } from "../../../../common-components/axiosInstance";
import { useAuth } from "../../../../context/authContext";
import { filePath } from "../../../../common-components/useCommonUsableFunctions";

export default function System({ show, setShow }) {
  const { user, setUser } = useAuth();
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  useEffect(() => {
    if (user.systemConfigurations?._id) reset(user.systemConfigurations);
  }, [user]);

  const newSystemConfiguration = async (newConfigurations) => {
    try {
      const formdata = new FormData();
      formdata.append("systemData", JSON.stringify(newConfigurations));
      if (newConfigurations?.systemFavicon?.length) {
        if (newConfigurations?.systemFavicon[0]?.name) {
          formdata.append("systemFevicon", newConfigurations.systemFavicon[0]);
          const favIconUrl = URL.createObjectURL(
            newConfigurations.systemFavicon[0]
          );
          const favIconElement = document.getElementById("favIcon-img");
          favIconElement.href = favIconUrl;
        }
      }
      if (newConfigurations?.systemLogo?.length)
        if (newConfigurations?.systemLogo[0]?.name)
          formdata.append("systemLogo", newConfigurations.systemLogo[0]);
      const updateSystemConfiguration = await formAxiosInstance.post(
        "/config/system",
        formdata
      );
      if (newConfigurations?.name?.length) {
        document.title = newConfigurations?.name;
      }

      setUser((old) => ({
        ...old,
        systemConfigurations: updateSystemConfiguration.data.data,
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

    const selectedFilePath = user.systemConfigurations[fileName];

    const logoPath = filePath(selectedFilePath);
    window.open(logoPath);
  };

  return (
    <Card>
      <Card.Body>
        <form action="" onSubmit={handleSubmit(newSystemConfiguration)}>
          <div className="tab-pane">
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">System Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter System Name"
                    {...register("name")}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label>System Logo</label>
                  <input
                    type={
                      watch("systemLogo") ==
                        user.systemConfigurations?.systemLogo &&
                      user.systemConfigurations?.systemLogo?.length
                        ? "text"
                        : "file"
                    }
                    className="form-control"
                    {...register("systemLogo")}
                    disabled={watch("systemLogo") && watch("systemLogo").length}
                  />
                  {watch("systemLogo") && watch("systemLogo").length ? (
                    <div className="input-icons">
                      {watch("systemLogo").length && (
                        <i
                          className="fas fa-trash text-danger cursor-pointer"
                          onClick={() => setValue("systemLogo", "")}
                        ></i>
                      )}{" "}
                      <i
                        className="fas fa-eye text-primary cursor-pointer"
                        onClick={() => openFile("systemLogo")}
                      ></i>
                    </div>
                  ) : (
                    ""
                  )}
                  <small>Upload files only: gif,png,jpg,jpeg</small> <br />
                  <small>- Best Size: 32x27</small> <br />
                  <small>- Light logo</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label>Favicon</label>
                  <input
                    type={
                      watch("systemFavicon") ==
                        user.systemConfigurations?.systemFavicon &&
                      user.systemConfigurations?.systemFavicon?.length
                        ? "text"
                        : "file"
                    }
                    className="form-control"
                    {...register("systemFavicon")}
                    disabled={
                      watch("systemFavicon") && watch("systemFavicon").length
                    }
                  />
                  {watch("systemFavicon") && watch("systemFavicon").length ? (
                    <div className="input-icons">
                      {watch("systemFavicon").length && (
                        <i
                          className="fas fa-trash text-danger cursor-pointer"
                          onClick={() => setValue("systemFavicon", "")}
                        ></i>
                      )}{" "}
                      <i
                        className="fas fa-eye text-primary cursor-pointer"
                        onClick={() => openFile("systemFavicon")}
                      ></i>
                    </div>
                  ) : (
                    ""
                  )}
                  <small>- Upload files only: gif,ico,png</small> <br />
                  <small>- Best Size: 16x16</small> <br />
                </div>
              </div>

              {/* <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Footer Text</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Footer Text"
                    {...register("footer")}
                  />
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
