import { useNavigate } from "react-router-dom";
import { useTable } from "../hooks/useTable";

function PostBoard() {
  const navigate   = useNavigate();
  const { dataSource, onChangeNextPage, onChangePrevPage, onChangeLimit, pagination } =
    useTable({
      path: "posts",
      page: 1,
      limit: 4,
    });
  return (
    <div>
      <h1>PostBoard</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Body
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((post) => (
              <tr className="bg-white border-b  border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {post.title}
                </th>
                <td className="px-6 py-4">{post.body}</td>
                <td>
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => navigate(`posts/${post.id}`)}
                  >
                    Show Detail
                  </button>
                </td>
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
              onClick={onChangePrevPage}
            >
              Prev
            </button>
            <span style={{ marginTop: "4px" }}>{pagination.page}</span>
            <button
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={onChangeNextPage}
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

export default PostBoard;
