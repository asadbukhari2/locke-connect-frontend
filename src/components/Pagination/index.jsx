import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { PaginationHolder } from './Pagination.styles';

const Pagination = ({ page, totalCount, totalPages = 0, pageSize, isLoading = false, onPageChange = () => {} }) => {
  const [currentPage, setCurrentPage] = useState(page);

  const handleNextPage = () => {
    const totalPages = Math.ceil(totalCount / pageSize);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };
  //For previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleCurrentPage = e => {
    onPageChange(e);
  };
  return (
    <PaginationHolder className="pagination">
      <div className="pages-holder">
        <button onClick={handlePrevPage} disabled={isLoading}>
          <GrFormPrevious size={25} />
        </button>
        <div className="pages">
          {Array.from({ length: totalPages }).map((_, index) => {
            if (
              (typeof window !== 'undefined' && window.innerWidth <= 600 && index < 6) ||
              (typeof window !== 'undefined' &&
                window.innerWidth > 600 &&
                (index < 4 || (index >= currentPage - 2 && index <= currentPage + 2) || index > 10))
            ) {
              return (
                <span
                  key={index}
                  onClick={() => {
                    setCurrentPage(index + 1);
                    handleCurrentPage(index + 1);
                  }}
                  className={currentPage === index + 1 ? 'active' : ''}>
                  {index + 1}
                </span>
              );
            } else if (typeof window !== 'undefined' && window.innerWidth > 600 && index === 6) {
              return <span key={index}>...</span>;
            } else if (typeof window !== 'undefined' && window.innerWidth > 600 && index === 10) {
              return (
                <>
                  <div key={index - 1} onClick={() => setCurrentPage(10)}>
                    {10}
                  </div>
                  <span key={index} onClick={() => setCurrentPage(11)} className={currentPage === 11 ? 'active' : ''}>
                    {11}
                  </span>
                </>
              );
            }
            return null;
          })}
        </div>

        <button onClick={handleNextPage} disabled={isLoading}>
          <GrFormNext size={25} />
        </button>
      </div>
    </PaginationHolder>
  );
};

export default Pagination;
