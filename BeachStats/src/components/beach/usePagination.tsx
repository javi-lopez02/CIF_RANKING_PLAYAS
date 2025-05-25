import { useCallback, useMemo, useState } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number = 12) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return {
      currentItems,
      totalPages,
      indexOfFirstItem,
      indexOfLastItem: Math.min(indexOfLastItem, items.length),
    };
  }, [items, currentPage, itemsPerPage]);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      if (pageNumber > 0 && pageNumber <= paginationData.totalPages) {
        setCurrentPage(pageNumber);
      }
    },
    [paginationData.totalPages]
  );

  const resetToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  return {
    currentPage,
    ...paginationData,
    handlePageChange,
    resetToFirstPage,
  };
}
