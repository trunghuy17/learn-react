import { useEffect, useState } from "react";

interface TableProps {
  path: string;
  page?:number;
  limit?:number
}

export const useTable = ({ path }: TableProps) => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 3,
  });
  useEffect(() => {
    async function fetchDataSource() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${path}?_page=${pagination.page}&_limit=${pagination.limit}`
        );
        const data: any = await res.json();
        setDataSource(data);
      } catch (e) {
        console.log("Fail to fetch data");
      }
    }
    fetchDataSource();
  }, [pagination]);

  function prevPage() {
    setPagination((prev) => ({
      ...prev,
      page: pagination.page - 1,
    }));
  }
  function nextPage() {
    setPagination((prev) => ({
      ...prev,
      page: pagination.page + 1,
    }));
  }
  function onChangeLimit(limit: number) {
    setPagination((prev) => ({
      ...prev,
      page: 1,
      limit,
    }));
  }

  return {
    dataSource,
    prevPage,
    nextPage,
    onChangeLimit,
    pagination,
  };
};
