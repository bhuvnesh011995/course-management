import { MaterialReactTable } from "material-react-table";

import {
  convertMongooseDate,
  convertToMongooseStartEndTiming,
  exportToExcel,
  exportToPDFTable,
} from "./useCommonUsableFunctions";
import { useEffect, useState } from "react";
import {
  TradeLevels,
  registrationConstants,
  tradeType,
} from "../Constants/newLeadContants";
import { dayColors } from "../Constants/table.constants";

export const CommonDataTable = ({
  data,
  tableHeaders,
  updateLeadList,
  actionButtons,
  editButton,
  deleteButton,
  callback,
  fileName = "fileName",
  viewButton,
  tableSearchBar = true,
  downloadExcel,
  downloadPdf,
  verificationMailButton,
  leadModelButtons,
}) => {
  useEffect(() => {
    if (leadModelButtons) updateLeadList("all");
  }, []);
  const [leadValue, setLeadValue] = useState("all");
  const dataKeys = Object.keys(tableHeaders);
  const tableColumns = [];
  dataKeys.map((e, index) => {
    if (e == "status") {
      tableColumns.push({
        accessorKey: e,
        Cell: ({ row }) => (
          <div className="row ">
            <div className="d-flex flex-wrap">
              <p
                className={`badge badge-soft-${
                  row.original?.status == "Active" ? "success" : "danger"
                }`}
                style={{
                  fontSize: "10px",
                  margin: "5px",
                }}
              >
                {row.original?.status}
              </p>
            </div>
          </div>
        ),
        header: tableHeaders[e],
      });
      return;
    }

    if (e == "coreTradeRegNo") {
      tableColumns.push({
        accessorKey: e,
        Cell: ({ row }) => (
          <div
            onClick={() => callback(row.original, "view", row.index)}
            className="cursor-pointer"
          >
            {row.original.coreTradeRegNo}
          </div>
        ),
        header: tableHeaders[e],
      });
    } else if (e == "lectureDay") {
      tableColumns.push({
        accessorKey: e,
        Cell: ({ row }) => (
          <div className="row ">
            <div className="d-flex flex-wrap">
              {row.original.lectureDay.map((e, index) => (
                <p
                  className={dayColors[index]}
                  style={{
                    fontSize: "10px",
                    margin: "5px",
                  }}
                >
                  {e}
                </p>
              ))}
            </div>
          </div>
        ),
        header: tableHeaders[e],
      });
    } else {
      tableColumns.push({ accessorKey: e, header: tableHeaders[e] });
    }
  });
  if (data[0]?.created_at) {
    data.map((e, index) => (e.created_at = convertMongooseDate(e.created_at)));
  }
  if (data[0]?.startDate) {
    data.map((e, index) => (e.startDate = convertMongooseDate(e.startDate)));
  }
  if (data[0]?.endDate) {
    data.map((e, index) => (e.endDate = convertMongooseDate(e.endDate)));
  }
  if (data[0]?.trainerDOB) {
    data.map((e, index) => (e.trainerDOB = convertMongooseDate(e.trainerDOB)));
  }
  if (data[0]?.employeeJoinDate) {
    data.map(
      (e, index) =>
        (e.employeeJoinDate = convertMongooseDate(e.employeeJoinDate))
    );
  }
  if (data[0]?.startTime && data[0]?.endTime) {
    data.map((e, index) => {
      e.classTiming = convertToMongooseStartEndTiming(e.startTime, e.endTime);
    });
  }

  if (actionButtons) {
    tableColumns.push({
      header: "Actions",
      Cell: ({ row }) => (
        <div className="hstack gap-2 fs-1">
          {viewButton && (
            <button
              onClick={() => callback(row.original, "view", row.index)}
              className="btn btn-icon btn-sm btn-warning rounded-pill"
            >
              <i className="mdi mdi-eye"></i>
            </button>
          )}
          {editButton &&
            !TradeLevels.includes(row.original?.tradeCode) &&
            !tradeType.includes(row.original?.typeCode) &&
            !registrationConstants.includes(row.original?.registrationCode) && (
              <button
                onClick={() => {
                  callback(row.original, null, row.index);
                }}
                className="btn btn-icon btn-sm btn-info rounded-pill"
              >
                <i className="bx bxs-edit-alt" />
              </button>
            )}
          {deleteButton &&
            !TradeLevels.includes(row.original?.tradeCode) &&
            !tradeType.includes(row.original?.typeCode) &&
            !registrationConstants.includes(row.original?.registrationCode) && (
              <button
                onClick={() => callback(row.original, "delete", row.index)}
                className="btn btn-icon btn-sm btn-danger rounded-pill"
              >
                <i className="bx bxs-trash" />
              </button>
            )}
          {verificationMailButton && (
            <button
              onClick={() => callback(row.original, "verify", row.index)}
              className="btn btn-icon btn-sm btn-success rounded-pill"
            >
              <i className="mdi mdi-check-circle" />
            </button>
          )}
          {leadModelButtons && row.original?.getPayment && (
            <button
              onClick={() => console.log("get payment")}
              className="btn btn-icon rounded-pill"
            >
              <i className="bx bx-money align-middle me-1 text-info" />
            </button>
          )}
          {leadModelButtons && row.original?.confirmed && (
            <button
              onClick={() => console.log("is confirmed")}
              className="btn btn-icon rounded-pill"
            >
              <i className="mdi mdi-check-circle align-middle text-success" />
            </button>
          )}
        </div>
      ),
    });
  }

  return (
    <div>
      <MaterialReactTable
        columns={tableColumns}
        data={data}
        enableColumnActions={false}
        enableFullScreenToggle={false}
        enableGlobalFilter={tableSearchBar}
        enableDensityToggle={false}
        enableColumnFilters={false}
        enableHiding={false}
        enableColumnFilterModes={false}
        initialState={{
          showGlobalFilter: true,
        }}
        enableRowNumbers
        enableGlobalFilterModes
        renderTopToolbarCustomActions={({}) => (
          <div>
            {downloadPdf && (
              <button
                className="btn btn-primary me-2"
                onClick={() =>
                  exportToPDFTable(data, dataKeys, tableHeaders, fileName)
                }
              >
                Download PDF
              </button>
            )}
            {downloadExcel && (
              <button
                className="btn btn-primary me-2"
                onClick={() => exportToExcel(data, fileName, tableHeaders)}
              >
                Download Excel
              </button>
            )}
            {leadModelButtons && (
              <div className="column">
                <button
                  className={`mx-1 btn ${leadValue == "all" && "btn-primary"}`}
                  onClick={() => {
                    setLeadValue("all");
                    updateLeadList("all");
                  }}
                >
                  All
                </button>
                <button
                  className={`mx-1 btn ${leadValue == "new" && "btn-primary"}`}
                  onClick={() => {
                    setLeadValue("new");
                    updateLeadList("new");
                  }}
                >
                  New
                </button>
                <button
                  className={`mx-1 btn ${
                    leadValue == "pending" && "btn-primary"
                  }`}
                  onClick={() => {
                    setLeadValue("pending");
                    updateLeadList("pending");
                  }}
                >
                  Pending
                </button>
                <button
                  className={`mx-1 btn ${
                    leadValue == "assign" && "btn-primary"
                  }`}
                  onClick={() => {
                    setLeadValue("assign");
                    updateLeadList("assign");
                  }}
                >
                  Assign
                </button>
                <button
                  className={`mx-1 btn ${
                    leadValue == "completed" && "btn-primary"
                  }`}
                  onClick={() => {
                    setLeadValue("completed");
                    updateLeadList("completed");
                  }}
                >
                  Completed
                </button>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};
