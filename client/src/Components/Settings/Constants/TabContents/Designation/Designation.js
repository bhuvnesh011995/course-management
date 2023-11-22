import { useMemo, useState } from "react";
import AddNew from "./AddNew";
import { Card } from "react-bootstrap";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";



export default function Designation() {
    const [isOpen,setIsOpen] = useState(false)


    const columns = useMemo(() => [
        {
          accessorKey: 'name',
          header: 'Designation',
        }
      ],[])

  return (
    <Card>
    <AddNew show={isOpen} setShow={setIsOpen}  />
      <Card.Body>
        <div class="tab-pane">
          <h4>List All Designations</h4>
          <p class="card-title-desc" style={{ textAlign: "right" }}>
            <button
              class="btn btn-primary text-right"
              onClick={() => setIsOpen(true)}
            >
              Add New Designation
            </button>
          </p>
          

<MaterialReactTable
      columns={columns}
      data={[]}
      enableColumnActions={false}
      enableColumnFilters={false}
      enableSorting={false}
      enableTopToolbar={false}
      enableRowActions
                  positionActionsColumn="last"
                  enableRowNumbers
                  rowNumberMode="static"
                  renderRowActions={({ row, table }) => (
                    <Box
                      sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
                    >
                        <IconButton
                        color="secondary"
                        onClick={() => {
                          table.setEditingRow(row);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                        <IconButton
                        color="error"
                        onClick={() => {}}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}
    />
        </div>
      </Card.Body>
    </Card>
  );
}
