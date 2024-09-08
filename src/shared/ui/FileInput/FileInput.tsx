import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

import { Button, TextareaAutosize, Typography } from "@mui/material";

import cls from "./FileInput.module.scss";

const FileInput: React.FC<{ handleUpload: (rdfData: string) => void }> = ({
  handleUpload,
}) => {
  const [fileContent, setFileContent] = useState<string>("");
  const [file, setFile] = useState<File>();

  // adding the file
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "file/ttl": [".ttl"],
    },
    maxFiles: 1,
    onDrop: async (acceptedFile) => {
      if (acceptedFile[0]) {
        setFile(acceptedFile[0]);

        const reader = new FileReader();
        reader.onload = (e) => {
          setFileContent(e.target?.result as string);
          handleUpload(e.target?.result as string);
        };
        reader.readAsText(acceptedFile[0]);
      }
    },
  });

  return (
    <>
      {fileContent ? (
        <>
          <div className={cls.chooseFileContainer}>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <Button variant="outlined" color="primary" size="small">
                <Typography fontSize={12}>Choose another file</Typography>
              </Button>
            </div>
            <Typography fontSize={14}>{file?.name}</Typography>
          </div>

          <div className={cls.textAreaContainer}>
            <TextareaAutosize
              minRows={3}
              readOnly
              value={fileContent}
              className={cls.textArea}
            />
          </div>
        </>
      ) : (
        <div
          {...getRootProps({ className: "dropzone" })}
          className={cls.dropZone}
        >
          <input {...getInputProps()} />
          <Typography fontSize={14}>Drag and Drop your file here or</Typography>
          <Button variant="outlined" color="primary" size="small">
            <Typography fontSize={12}>Choose file</Typography>
          </Button>
        </div>
      )}
    </>
  );
};

export default FileInput;
