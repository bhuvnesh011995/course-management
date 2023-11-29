import { useEffect, useState } from "react";
// import { CommonDataTable } from "../../common-components/CommonDataTable";
// import { trainerHeaders } from "../../Constants/table.constants";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Designation from "./TabContents/Designation/Designation";
import EmailTemplate from "./TabContents/EmailTemplate/EmailTemplate";
import Duration from "./TabContents/Duration/Duration";

export const Constants = () => {
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">Constants</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Constants</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="designation">
            <Row>
              <Col xl={3}>
                <Card>
                  <Card.Body>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="designation">Designation</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="email">Email Template</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="duration">Duration</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={9}>
                <Tab.Content>
                  <Tab.Pane eventKey={"designation"}>
                    <Designation />
                  </Tab.Pane>
                  <Tab.Pane eventKey={"email"}>
                    <EmailTemplate />
                  </Tab.Pane>
                  <Tab.Pane eventKey={"duration"}>
                    <Duration />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">© Tonga.</div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Design &amp; Develop by{" "}
                <a href="https://braincavesoft.com" target="_blank">
                  Braincave Software Pvt.Ltd.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
