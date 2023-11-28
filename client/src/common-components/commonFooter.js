export const CommonFooter = () => {
  return (
    <footer ClassName="footer">
      <div ClassName="container-fluid">
        <div ClassName="row">
          <div ClassName="col-sm-6">
            <script>{new Date().getFullYear()}</script> © Tonga.
          </div>
          <div ClassName="col-sm-6">
            <div ClassName="text-sm-end d-none d-sm-block">
              Design & Develop by{" "}
              <a href="https://braincavesoft.com" target="_blank">
                Braincave Software Pvt.Ltd.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
