import { useEffect, useState } from "react";
// import { CommonDataTable } from "../../common-components/CommonDataTable";
// import { trainerHeaders } from "../../Constants/table.constants";
import { Link } from "react-router-dom";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import Designation from "./TabContents/Designation/Designation";
import EmailTemplate from "./TabContents/EmailTemplate/EmailTemplate";
import Duration from "./TabContents/Duration/Duration";
import Department from "./TabContents/Department/department";
import Position from "./TabContents/Position/position";
import Leave from "./Leave/leave";

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
                      <Nav.Item>
                        <Nav.Link eventKey="department">Department</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="position">Position</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="leave">Leave</Nav.Link>
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
                  <Tab.Pane eventKey={"department"}>
                    <Department />
                  </Tab.Pane>
                  <Tab.Pane eventKey={"position"}>
                    <Position />
                  </Tab.Pane>
                  <Tab.Pane eventKey={"leave"}>
                    <Leave />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};
