import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TableProps {
  path: string;
  page?: number | undefined;
  limit?: number | undefined;
}

export const useTable = ({ path, page = 1, limit = 3 }: TableProps) => {
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [pagination, setPagination] = useState({
    page,
    limit,
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

  function onChangePrevPage() {
    setPagination((prevState) => {
      const newPage = prevState.page - 1;
      navigate(`/leaderboard?page=${newPage}&limit=${prevState.limit}`, {
        replace: true,
      });
      return {
        ...prevState,
        page: newPage,
      };
    });
  }
  function onChangeNextPage() {
    setPagination((prev) => {
      const newPage = prev.page + 1;
      navigate(`/leaderboard?page=${newPage}&limit=${prev.limit}`, {
        replace: true,
      });
      return {
        ...prev,
        page: newPage,
      };
    });
  }

  function onChangeLimit(limit: number) {
    setPagination((prevState) => {
      navigate(`/leaderboard?page=${prevState.page}&limit=${limit}`, {
        replace: true,
      });
      return {
        ...prevState,
        limit,
      };
    });
  }
  return {
    dataSource,
    onChangePrevPage,
    onChangeNextPage,
    onChangeLimit,
    pagination,
  };
};
