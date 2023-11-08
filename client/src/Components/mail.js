// <!doctype html>
// <html lang="en">

import { MenuBar } from "../common-components/MenuBar";
import { CommonNavbar } from "../common-components/Navbar";

//     <head>

//         <meta charset="utf-8" />
//         <title>Inbox | Tonga</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
//         <meta content="Themesbrand" name="author" />
//         <!-- App favicon -->
//         <link rel="shortcut icon" href="assets/images/favicon.ico">

//         <!-- Bootstrap Css -->
//         <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
//         <!-- Icons Css -->
//         <link rel="stylesheet" href="assets/css/app-email.css" class="css">
//         <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
//         <!-- App Css-->
//         <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />

//     </head>

//     <body data-sidebar="dark" data-layout-mode="light">

//         <!-- Start layout-wrapper -->
export const Mail = () => {
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Inbox</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Email</a>
                      </li>
                      <li className="breadcrumb-item active">Inbox</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-12">
                {/* Left sidebar */}
                <div className="email-leftbar card">
                  <button
                    type="button"
                    className="btn btn-danger btn-block waves-effect waves-light"
                    data-bs-toggle="modal"
                    data-bs-target="#composemodal"
                  >
                    Compose
                  </button>
                  <div className="mail-list mt-4">
                    <a href="javascript: void(0);" className="active">
                      <i className="mdi mdi-email-outline me-2" /> Inbox{" "}
                      <span className="ms-1 float-end">(18)</span>
                    </a>
                    <a href="javascript: void(0);">
                      <i className="mdi mdi-star-outline me-2" />
                      Starred
                    </a>
                    <a href="javascript: void(0);">
                      <i className="mdi mdi-diamond-stone me-2" />
                      Important
                    </a>
                    <a href="javascript: void(0);">
                      <i className="mdi mdi-file-outline me-2" />
                      Draft
                    </a>
                    <a href="javascript: void(0);">
                      <i className="mdi mdi-email-check-outline me-2" />
                      Sent Mail
                    </a>
                    <a href="javascript: void(0);">
                      <i className="mdi mdi-trash-can-outline me-2" />
                      Trash
                    </a>
                  </div>
                  <h6 className="mt-4">Labels</h6>
                  <div className="mail-list mt-1">
                    <a href="javascript: void(0);">
                      <span className="mdi mdi-arrow-right-drop-circle text-info float-end" />
                      Support
                    </a>
                    <a href="javascript: void(0);">
                      <span className="mdi mdi-arrow-right-drop-circle text-warning float-end" />
                      users
                    </a>
                    <a href="javascript: void(0);">
                      <span className="mdi mdi-arrow-right-drop-circle text-primary float-end" />
                      Social
                    </a>
                    <a href="javascript: void(0);">
                      <span className="mdi mdi-arrow-right-drop-circle text-danger float-end" />
                      Complaint
                    </a>
                    <a href="javascript: void(0);">
                      <span className="mdi mdi-arrow-right-drop-circle text-success float-end" />
                      Enrollment
                    </a>
                  </div>
                </div>
                {/* End Left sidebar */}
                {/* Right Sidebar */}
                <div className="email-rightbar mb-3">
                  <div className="card">
                    <div className="btn-toolbar p-3" role="toolbar">
                      <div className="btn-group me-2 mb-2 mb-sm-0">
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect"
                        >
                          <i className="fa fa-inbox" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect"
                        >
                          <i className="fa fa-exclamation-circle" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect"
                        >
                          <i className="far fa-trash-alt" />
                        </button>
                      </div>
                      <div className="btn-group me-2 mb-2 mb-sm-0">
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-folder" />{" "}
                          <i className="mdi mdi-chevron-down ms-1" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Updates
                          </a>
                          <a className="dropdown-item" href="#">
                            Social
                          </a>
                          <a className="dropdown-item" href="#">
                            Team Manage
                          </a>
                        </div>
                      </div>
                      <div className="btn-group me-2 mb-2 mb-sm-0">
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-tag" />{" "}
                          <i className="mdi mdi-chevron-down ms-1" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Updates
                          </a>
                          <a className="dropdown-item" href="#">
                            Social
                          </a>
                          <a className="dropdown-item" href="#">
                            Team Manage
                          </a>
                        </div>
                      </div>
                      <div className="btn-group me-2 mb-2 mb-sm-0">
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          More <i className="mdi mdi-dots-vertical ms-2" />
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Mark as Unread
                          </a>
                          <a className="dropdown-item" href="#">
                            Mark as Important
                          </a>
                          <a className="dropdown-item" href="#">
                            Add to Tasks
                          </a>
                          <a className="dropdown-item" href="#">
                            Add Star
                          </a>
                          <a className="dropdown-item" href="#">
                            Mute
                          </a>
                        </div>
                      </div>
                    </div>
                    <ul className="message-list">
                      <li>
                        <a href="read-email.html">
                          <div className="col-mail col-mail-1">
                            <div className="checkbox-wrapper-mail">
                              <input type="checkbox" id="chk19" />
                              <label htmlFor="chk19" className="toggle" />
                            </div>
                            <span className="title">Peter, me (3)</span>
                            <span className="star-toggle far fa-star" />
                          </div>
                          <div className="col-mail col-mail-2">
                            <span className="subject">
                              Hello –{" "}
                              <span className="teaser">
                                Trip home from Colombo has been arranged, then
                                Jenna will come get me from Stockholm. :)
                              </span>
                            </span>
                            <span className="date">Mar 6</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* card */}
                  <div className="row">
                    <div className="col-7">Showing 1 - 20 of 1,524</div>
                    <div className="col-5">
                      <div className="btn-group float-end">
                        <button
                          type="button"
                          className="btn btn-sm btn-success waves-effect"
                        >
                          <i className="fa fa-chevron-left" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-success waves-effect"
                        >
                          <i className="fa fa-chevron-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end Col-9 */}
              </div>
            </div>
            {/* End row */}
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        {/* Modal */}
        <div
          className="modal fade"
          id="composemodal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="composemodalTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="composemodalTitle">
                  New Message
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="To"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-3">
                    <form method="post">
                      <textarea
                        id="open-source-plugins"
                        defaultValue={
                          "\n                                            "
                        }
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Send <i className="fab fa-telegram-plane ms-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end modal */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">© Tonga.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by Braincavesoft
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* end main content*/}
    </div>
  );
};
{
  /* <!-- END layout-wrapper -->



        <!-- JAVASCRIPT -->
        <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>



        <!-- email editor init -->
        <script src="https://cdn.tiny.cloud/1/qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc/tinymce/5.10.7-133/tinymce.min.js"></script>
        <script src="assets/js/pages/email-editor.js"></script>
        <!-- App js -->
        <script src="assets/js/app.js"></script>

    </body>
</html> */
}
