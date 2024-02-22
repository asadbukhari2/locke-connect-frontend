import React from 'react';
import { NoRecordFound } from './NoRecord.styles';
const NoRecord = ({ message }) => {
  return <NoRecordFound>{message ? message : 'No Record Found'}</NoRecordFound>;
};

export default NoRecord;
