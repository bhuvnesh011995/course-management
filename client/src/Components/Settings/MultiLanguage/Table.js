import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import LanguageModal from "./LanguageModal";

export default function Table({ data, getLanguages }) {
  const [showLagModal, setShowLngModal] = useState(false);
  const [language, setLanguage] = useState({});

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "code",
        header: "Code",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
    ],
    []
  );

  return <></>;
}
