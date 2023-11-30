import { useEffect, useState } from "react";
// import { CommonDataTable } from "../../common-components/CommonDataTable";
// import { trainerHeaders } from "../../Constants/table.constants";
import { Link } from "react-router-dom";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import System from "./TabContents/System";
import Other from "./TabContents/Other";

export const SystemConfig = () => {
  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">System Configuration</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        System Configuration
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="config">
            <Row>
              <Col xl={3}>
                <Card>
                  <Card.Body>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="config">
                          System Configuration
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="other">Other</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={9}>
                <Tab.Content>
                  <Tab.Pane eventKey={"config"}>
                    <System />
                  </Tab.Pane>
                  <Tab.Pane eventKey={"other"}>
                    <Other />
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
