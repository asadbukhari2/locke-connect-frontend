import React, { useState } from 'react';
// import Pagination from '@/components/molecules/Pagination';
import TableHeader from '../TableHeader';
import { StyledTableLayout, TableFilters } from './TableLayout.styles';
import Pagination from '../Pagination';

function TableLayout({
  children,
  currentPage = 1,
  pageSize = 10,
  totalCount = 0,
  onChangeFilters = () => {},
  exportBtn,
  createBtn,
  filterBtns,
  noNegativeMargin,
  title,
  totalPages = 0,
}) {
  return (
    <>
      <TableFilters>
        <div className="heading">{title}</div>
        {filterBtns && <div className="btnsHolder">{filterBtns()}</div>}
      </TableFilters>

      <StyledTableLayout noNegativeMargin={noNegativeMargin}>
        <TableHeader
          total={totalCount}
          page={currentPage}
          resultPerPage={pageSize}
          setPageSize={_ => onChangeFilters({ pageSize: _, page: 1 })}
          exportBtn={exportBtn}
          createBtn={createBtn}
        />
        {children}
        {!!totalCount && totalCount > pageSize && (
          <Pagination
            page={currentPage}
            totalCount={totalCount}
            pageSize={pageSize}
            totalPages={totalPages}
            onPageChange={_ => onChangeFilters({ filter: '', page: _ })}
          />
        )}
      </StyledTableLayout>
    </>
  );
}

export default TableLayout;
