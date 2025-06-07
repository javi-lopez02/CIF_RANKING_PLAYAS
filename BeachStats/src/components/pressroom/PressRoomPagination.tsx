import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PressRoomPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getVisiblePages = () => {
    const pages = [];
    const showPages = 5; // Número de páginas visibles

    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    const end = Math.min(totalPages, start + showPages - 1);

    // Ajustar el inicio si estamos cerca del final
    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8 pb-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronLeft className="w-4 h-4" />
      </button>

      {getVisiblePages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            currentPage === page
              ? "bg-sky-600 text-white"
              : "text-gray-700 hover:text-white hover:bg-dark-800"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PressRoomPagination;
