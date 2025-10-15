import { useTable } from "../hooks/useTable";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function TodoBoard() {
  const { dataSource, prevPage, nextPage, onChangeLimit,pagination } = useTable({
    path:'todos',
    page:1,
    limit:3
  });

  return (
    <div>
      <h1>TodoBoard</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Completed
              </th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((data: ITodo) => (
              <tr className="bg-white border-b  border-gray-200" key={data.id}>
                <td className="px-6 py-4">{data.title}</td>
                <td className="px-6 py-4">{data.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div className="flex justify-between ">
        <div className="flex ">
          <div className="flex ">
            <button
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={prevPage}
            >
              Prev
            </button>
            <span style={{ marginTop: "4px" }}>{pagination.page}</span>
            <button
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
        <div>
          Limit{" "}
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 "
            value={pagination.limit}
            onChange={(e) => onChangeLimit(parseInt(e.target.value))}
          >
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TodoBoard;
