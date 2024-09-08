import { useCallback, useState } from "react";

import { Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CodeEditor from "@uiw/react-textarea-code-editor";

import cls from "./FileInputForm.module.scss";
import FileInput from "../../../../shared/ui/FileInput/FileInput";

interface FileInputFormProps {
  label?: string;
  handleUpload: (data: string) => void;
  value: string;
}

export const FileInputForm = (props: FileInputFormProps) => {
  const { label, handleUpload, value } = props;

  const [tabValue, setTabValue] = useState<string>("1");

  const handleChangeTab = useCallback((value: string) => {
    handleUpload("");
    setTabValue(value);
  }, []);

  return (
    <>
      <Typography>{label}</Typography>

      <TabContext value={tabValue}>
        <TabList onChange={(e, value) => handleChangeTab(value)}>
          <Tab label="File input" value={"1"} />
          <Tab label="Type manually" value={"2"} />
        </TabList>

        <TabPanel value={"1"}>
          <FileInput handleUpload={handleUpload} />
        </TabPanel>

        <TabPanel value={"2"}>
          <div className={cls.codeEditorContainer}>
            <CodeEditor
              value={value}
              language="ttl"
              placeholder="Type here"
              onChange={(e) => handleUpload(String(e.target.value))}
              padding={15}
              style={{
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
          </div>
        </TabPanel>
      </TabContext>
    </>
  );
};
