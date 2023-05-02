import React, { useState, useEffect, useRef } from "react";
import { classNames } from "primereact/utils";
import { DataTable, DataTableStateEvent } from "primereact/datatable";
import { Column } from "primereact/column";
// import { ProductService } from './service/ProductService';
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { FileUpload } from "primereact/fileupload";
import { Toolbar } from "primereact/toolbar";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { API } from "../../API/API";
import { base_url } from "../../API/API";
import "../../Prime-theme/theme.css";

interface Log {
  id: any;
  value: number;
  date: Date | null;
  status: string;
  [key: string]: any;
}

export default function BloodSugarTable() {
  const emptyLog = {
    id: null,
    value: 0,
    status: "",
    date: null,
  };
  const [logs, setLogs] = useState<Log[]>([]);
  const [logDialog, setLogDialog] = useState<boolean>(false);
  const [deleteLogDialog, setDeleteLogDialog] = useState<boolean>(false);
  const [deleteLogsDialog, setDeleteLogsDialog] = useState<boolean>(false);
  const [log, setLog] = useState<Log>(emptyLog);
  const [selectedLogs, setSelectedLogs] = useState<Log[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<Log[]>>(null);
}