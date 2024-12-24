interface PaginationProps {
  currentPage: number;
  totalProducts: number;
  onPageChange: (page: number) => void;
  limit: number;
}

const Pagination = ({
  currentPage,
  totalProducts,
  onPageChange,
  limit,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="flex justify-center items-center gap-2 p-5">
      <button
        className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded px-5 py-2 mx-2"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded px-5 py-2 mx-2"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
