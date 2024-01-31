import React from 'react';
import { NoRecordFound } from './NoRecord.styles';
const NoRecordFound = ({ message }) => {
  return <NoRecordFound>{message ? message : 'No Record Found'}</NoRecordFound>;
};

export default index;
