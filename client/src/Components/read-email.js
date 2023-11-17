export const ReadEmail = () => {
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Read Email</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a>Email</a>
                      </li>
                      <li className="breadcrumb-item active">Read Email</li>
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
                    <a href="mail.html" className="active">
                      <i className="mdi mdi-email-outline me-2" /> Inbox{" "}
                      <span className="ms-1 float-end">(18)</span>
                    </a>
                    <a>
                      <i className="mdi mdi-star-outline me-2" />
                      Starred
                    </a>
                    <a>
                      <i className="mdi mdi-diamond-stone me-2" />
                      Important
                    </a>
                    <a>
                      <i className="mdi mdi-file-outline me-2" />
                      Draft
                    </a>
                    <a>
                      <i className="mdi mdi-email-check-outline me-2" />
                      Sent Mail
                    </a>
                    <a>
                      <i className="mdi mdi-trash-can-outline me-2" />
                      Trash
                    </a>
                  </div>
                  <h6 className="mt-4">Labels</h6>
                  <div className="mail-list mt-1">
                    <a>
                      <span className="mdi mdi-arrow-right-drop-circle text-info float-end" />
                      Theme Support
                    </a>
                    <a>
                      <span className="mdi mdi-arrow-right-drop-circle text-warning float-end" />
                      Freelance
                    </a>
                    <a>
                      <span className="mdi mdi-arrow-right-drop-circle text-primary float-end" />
                      Social
                    </a>
                    <a>
                      <span className="mdi mdi-arrow-right-drop-circle text-danger float-end" />
                      Friends
                    </a>
                    <a>
                      <span className="mdi mdi-arrow-right-drop-circle text-success float-end" />
                      Family
                    </a>
                  </div>
                  <h6 className="mt-4">Chat</h6>
                  <div className="mt-2">
                    <a className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <img
                          className="rounded-circle"
                          src="assets/images/users/avatar-2.jpg"
                          alt="Generic placeholder image"
                          height={36}
                        />
                      </div>
                      <div className="flex-grow-1 chat-user-box">
                        <p className="user-title m-0">Scott Median</p>
                        <p className="text-muted">Hello</p>
                      </div>
                    </a>
                    <a className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <img
                          className="rounded-circle"
                          src="assets/images/users/avatar-3.jpg"
                          alt="Generic placeholder image"
                          height={36}
                        />
                      </div>
                      <div className="flex-grow-1 chat-user-box">
                        <p className="user-title m-0">Julian Rosa</p>
                        <p className="text-muted">What about our next..</p>
                      </div>
                    </a>
                    <a className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <img
                          className="rounded-circle"
                          src="assets/images/users/avatar-4.jpg"
                          alt="Generic placeholder image"
                          height={36}
                        />
                      </div>
                      <div className="flex-grow-1 chat-user-box">
                        <p className="user-title m-0">David Medina</p>
                        <p className="text-muted">Yeah everything is fine</p>
                      </div>
                    </a>
                    <a className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <img
                          className="rounded-circle"
                          src="assets/images/users/avatar-6.jpg"
                          alt="Generic placeholder image"
                          height={36}
                        />
                      </div>
                      <div className="flex-grow-1 chat-user-box">
                        <p className="user-title m-0">Jay Baker</p>
                        <p className="text-muted">Wow that's great</p>
                      </div>
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
                    <div className="card-body">
                      <div className="d-flex mb-4">
                        <div className="flex-shrink-0 me-3">
                          <img
                            className="rounded-circle avatar-sm"
                            src="assets/images/users/avatar-2.jpg"
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="font-size-14 mt-1">
                            Humberto D. Champion
                          </h5>
                          <small className="text-muted">
                            support@domain.com
                          </small>
                        </div>
                      </div>
                      <h4 className="font-size-16">This Week's Top Stories</h4>
                      <p>Dear Lorem Ipsum,</p>
                      <p>
                        Praesent dui ex, dapibus eget mauris ut, finibus
                        vestibulum enim. Quisque arcu leo, facilisis in
                        fringilla id, luctus in tortor. Nunc vestibulum est quis
                        orci varius viverra. Curabitur dictum volutpat massa
                        vulputate molestie. In at felis ac velit maximus
                        convallis.
                      </p>
                      <p>
                        Sed elementum turpis eu lorem interdum, sed porttitor
                        eros commodo. Nam eu venenatis tortor, id lacinia diam.
                        Sed aliquam in dui et porta. Sed bibendum orci non
                        tincidunt ultrices. Vivamus fringilla, mi lacinia
                        dapibus condimentum, ipsum urna lacinia lacus, vel
                        tincidunt mi nibh sit amet lorem.
                      </p>
                      <p>Sincerly,</p>
                      <hr />
                      <div className="row">
                        <div className="col-xl-2 col-6">
                          <div className="card">
                            <img
                              className="card-img-top img-fluid"
                              src="assets/images/small/img-3.jpg"
                              alt="Card image cap"
                            />
                            <div className="py-2 text-center">
                              <a className="fw-medium">Download</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-6">
                          <div className="card">
                            <img
                              className="card-img-top img-fluid"
                              src="assets/images/small/img-4.jpg"
                              alt="Card image cap"
                            />
                            <div className="py-2 text-center">
                              <a className="fw-medium">Download</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a className="btn btn-secondary waves-effect mt-4">
                        <i className="mdi mdi-reply" /> Reply
                      </a>
                    </div>
                  </div>
                </div>
                {/* card */}
              </div>
              {/* end Col-9 */}
            </div>
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
