import React from "react";
import {
  DocumentContainer,
  DocumentItem,
  DocumentInfo,
  Value,
  StyledButton,
} from "./selectedDocumentList.styles";
import { shortenFileName } from "@/helpers/common";

const SelectedDocumentsList = ({ type, selectedDocuments, removeFile }) => {
  console.log(selectedDocuments, type);
  return (
    <DocumentContainer>
      {type === "images" &&
        selectedDocuments?.map((data) => (
          <DocumentItem key={data.id}>
            <DocumentInfo>
              <Value>{shortenFileName(data.name, 10)}</Value>
              <StyledButton onClick={() => removeFile(data)}>x</StyledButton>
            </DocumentInfo>
          </DocumentItem>
        ))}
      {type === "document" &&
        selectedDocuments.map((data) => (
          <DocumentItem key={data.id}>
            <DocumentInfo>
              <Value>{shortenFileName(data.name, 10)}</Value>
              <StyledButton onClick={() => removeFile(data)}>x</StyledButton>
            </DocumentInfo>
          </DocumentItem>
        ))}
      {type === "property" && (
        <DocumentItem>
          <DocumentInfo>
            <Value>{selectedDocuments.title}</Value>
            <StyledButton onClick={() => removeFile()}>x</StyledButton>
          </DocumentInfo>
        </DocumentItem>
      )}
      {type === "contact" && (
        <DocumentItem>
          <DocumentInfo>
            <Value>{selectedDocuments.name}</Value>
            <StyledButton onClick={() => removeFile()}>x</StyledButton>
          </DocumentInfo>
        </DocumentItem>
      )}
    </DocumentContainer>
  );
};

export default SelectedDocumentsList;
