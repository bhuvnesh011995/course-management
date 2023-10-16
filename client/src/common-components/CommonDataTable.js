import { MaterialReactTable } from "material-react-table";

import {
  convertMongooseDate,
  exportToExcel,
  exportToPDFTable,
} from "./useCommonUsableFunctions";
import moment from "moment";

export const CommonDataTable = ({
  data,
  tableHeaders,
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
  const dataKeys = Object.keys(tableHeaders);
  const tableColumns = [];
  dataKeys.map((e, index) => {
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
    } else {
      tableColumns.push({ accessorKey: e, header: tableHeaders[e] });
    }
  });
  if (data[0]?.created_at) {
    data.map((e, index) => (e.created_at = convertMongooseDate(e.created_at)));
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
          {editButton && (
            <button
              onClick={() => callback(row.original, null, row.index)}
              className="btn btn-icon btn-sm btn-info rounded-pill"
            >
              <i className="bx bxs-edit-alt" />
            </button>
          )}
          {deleteButton && (
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
                onClick={() => exportToExcel(data, fileName)}
              >
                Download Excel
              </button>
            )}
            {leadModelButtons && (
              <div className="column">
                <button className="mx-1 btn btn-primary">New</button>
                <button className="mx-1 btn btn-primary">Pending</button>
                <button className="mx-1 btn btn-primary">Assign</button>
                <button className="mx-1 btn btn-primary">Completed</button>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};
