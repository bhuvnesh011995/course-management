import { useAuth } from "../context/authContext";

export const CommonFooter = () => {
  const { user } = useAuth();
  return (
    <footer className='footer'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6'>
            <script>{new Date().getFullYear()}</script> ©{" "}
            {user.systemConfigurations?.name
              ? user.systemConfigurations?.name
              : "Tonga"}
            .
          </div>{" "}
          {/* <div className="col-sm-6">
            <div className="text-sm-end d-none d-sm-block">
              Design &amp; Develop by{" "}
              <a href="https://braincavesoft.com" target="_blank">
                BrainCave Software Pvt.Ltd.
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
