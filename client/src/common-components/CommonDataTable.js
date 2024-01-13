import { MaterialReactTable } from "material-react-table";

import {
  convertMongooseDate,
  convertToMongooseStartEndTiming,
  exportToExcel,
  exportToPDFTable,
  filePath,
} from "./useCommonUsableFunctions";
import { useEffect, useState } from "react";
import {
  TradeLevels,
  registrationConstants,
  tradeType,
} from "../Constants/newLeadContants";
import { dayColors } from "../Constants/table.constants";
import { FormattedMessage } from "react-intl";
import { languageObject } from "../Constants/tableLanguageConstants";
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";

export const CommonDataTable = ({
  data,
  tableHeaders,
  updateLeadList,
  actionButtons,
  editButton,
  deleteButton,
  callback,
  fileName = "newFile",
  viewButton,
  tableSearchBar = true,
  downloadExcel,
  downloadPdf,
  verificationMailButton,
  checkMailButtonClick,
  checkMailFunction,
  leadModelButtons,
  enableRowNumbers = true,
  selectDataByOne = false,
}) => {
  const { user } = useAuth();
  useEffect(() => {
    if (leadModelButtons) updateLeadList("all");
  }, []);
  const [leadValue, setLeadValue] = useState("all");
  const dataKeys = Object.keys(tableHeaders);
  const tableColumns = [];
  dataKeys.map((e, index) => {
    if (e == "trainerName") {
      tableColumns.push({
        accessorKey: e,
        Cell: ({ row }) => (
          <div className='d-flex align-items-center'>
            {row.original?.trainerImagePath && (
              <div className='me-2'>
                {" "}
                <span className='avatar avatar-sm avatar-rounded'>
                  <img src={filePath(row.original?.trainerImagePath)} alt='' />{" "}
                </span>{" "}
              </div>
            )}
            <div className='fw-semibold'>{row.original.trainerName}</div>
          </div>
        ),
        header: tableHeaders[e],
        Header: () => (
          <FormattedMessage
            id={languageObject[tableHeaders[e]]}
            defaultMessage={tableHeaders[e]}
          />
        ),
      });
      return;
    }
    if (e == "durationStatus") {
      tableColumns.push({
        accessorKey: e,
        Cell: ({ row }) => (
          <div className='d-flex align-items-center justify-content-center'>
            {row.original.durationStatus}
          </div>
        ),
        header: tableHeaders[e],
        Header: () => (
          <FormattedMessage
            id={languageObject[tableHeaders[e]]}
            defaultMessage={tableHeaders[e]}
          />
        ),
      });
      return;
    }
    if (e == "status") {
      tableColumns.push({
        accessorKey: e,
        Cell: ({ row }) => (
          <div className='row '>
            <div className='d-flex flex-wrap'>
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
        Header: () => (
          <FormattedMessage
            id={languageObject[tableHeaders[e]]}
            defaultMessage={tableHeaders[e]}
          />
        ),
      });
      return;
    }

    if (e == "leadRegistrationName") {
      tableColumns.push({
        accessorKey: e,
        Cell: ({ row }) => (
          <div
            onClick={() => callback(row.original, "view", row.index)}
            className='cursor-pointer'
          >
            {row.original.leadRegistrationName}
          </div>
        ),
        header: tableHeaders[e],
        Header: () => (
          <FormattedMessage
            id={languageObject[tableHeaders[e]]}
            defaultMessage={tableHeaders[e]}
          />
        ),
      });
      return;
    }
    if (e == "lectureDay") {
      tableColumns.push({
        accessorKey: e,
        Cell: ({ row }) => (
          <div className='row '>
            <div className='d-flex flex-wrap'>
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
        Header: () => (
          <FormattedMessage
            id={languageObject[tableHeaders[e]]}
            defaultMessage={tableHeaders[e]}
          />
        ),
      });
      return;
    }
    tableColumns.push({
      accessorKey: e,
      header: tableHeaders[e],
      Header: () => (
        <FormattedMessage
          id={languageObject[tableHeaders[e]]}
          defaultMessage={tableHeaders[e]}
        />
      ),
    });
  });

  data.map((e, index) => {
    if (e?.created_at) {
      e.created_at = convertMongooseDate(e.created_at);
    }
    if (e?.updated_at) {
      e.updated_at = convertMongooseDate(e.updated_at);
    }
    if (e?.date) {
      e.date = convertMongooseDate(e.date);
    }
    if (e?.startDate) {
      e.startDate = convertMongooseDate(e.startDate);
    }
    if (e?.endDate) {
      e.endDate = convertMongooseDate(e.endDate);
    }
    if (e?.trainerDOB) {
      e.trainerDOB = convertMongooseDate(e.trainerDOB);
    }
    if (e?.joinDate) {
      e.joinDate = convertMongooseDate(e.joinDate);
    }
    if (e?.startTime && e?.endTime) {
      e.classTiming = convertToMongooseStartEndTiming(e.startTime, e.endTime);
    }
  });

  if (actionButtons) {
    tableColumns.push({
      header: "Actions",
      Header: () => (
        <FormattedMessage id='Actions' defaultMessage={"Actions"} />
      ),
      Cell: ({ row }) => (
        <div className='hstack gap-2 fs-1'>
          {viewButton && (
            <button
              onClick={() => callback(row.original, "view", row.index)}
              className='btn btn-icon btn-sm btn-warning rounded-pill'
            >
              <i className='mdi mdi-eye'></i>
            </button>
          )}
          {/* !tradeType.includes(row.original?.typeCode) && */}
          {row.original._id != user.userData._id &&
            editButton &&
            !TradeLevels.includes(row.original?.tradeCode) &&
            !registrationConstants.includes(row.original?.registrationCode) && (
              <button
                onClick={() => {
                  callback(row.original, null, row.index);
                }}
                className='btn btn-icon btn-sm btn-info rounded-pill'
              >
                <i className='bx bxs-edit-alt' />
              </button>
            )}
          {deleteButton &&
            !TradeLevels.includes(row.original?.tradeCode) &&
            !tradeType.includes(row.original?.typeCode) &&
            !registrationConstants.includes(row.original?.registrationCode) && (
              <button
                onClick={() => callback(row.original, "delete", row.index)}
                className='btn btn-icon btn-sm btn-danger rounded-pill'
              >
                <i className='bx bxs-trash' />
              </button>
            )}
          {verificationMailButton && (
            <button
              onClick={() => {
                if (checkMailButtonClick) {
                  const mailChecked = checkMailFunction(row);
                  if (mailChecked) return;
                }
                callback(row.original, "sendMail", row.index);
              }}
              className='btn btn-icon btn-sm btn-success rounded-pill'
            >
              <i className='mdi mdi-check-circle' />
            </button>
          )}
          {leadModelButtons && row.original?.status == "confirmed" && (
            <button className='btn btn-icon rounded-pill'>
              <i className='bx bx-money align-middle me-1 text-info' />
            </button>
          )}
          {leadModelButtons && row.original?.status == "confirmed" && (
            <button className='btn btn-icon rounded-pill'>
              <i className='mdi mdi-check-circle align-middle text-success' />
            </button>
          )}
        </div>
      ),
    });
  }

  return (
    <div className='p-3'>
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
        enableRowNumbers={enableRowNumbers}
        enableGlobalFilterModes
        renderTopToolbarCustomActions={({}) => (
          <div>
            {downloadPdf && (
              <button
                className='btn btn-primary me-2'
                onClick={() =>
                  exportToPDFTable(data, dataKeys, tableHeaders, fileName)
                }
              >
                Download PDF
              </button>
            )}
            {downloadExcel && (
              <button
                className='btn btn-primary me-2'
                onClick={() => exportToExcel(data, fileName, tableHeaders)}
              >
                Download Excel
              </button>
            )}
            {leadModelButtons && (
              <div className='column'>
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
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};
