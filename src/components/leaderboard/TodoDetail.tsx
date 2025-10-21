import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TodoDetail() {
  const [todoById, setTodoById] = useState<any>(null);
  const params = useParams();
  const todoId = params?.todoId;

  useEffect(() => {
    if (!todoId) return;
    async function fetchTodoById() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      const data = await res.json();
      setTodoById(data);
    }
    fetchTodoById();
  }, [todoId]);
  return (
    <div>
      <h1>User</h1>
      <br />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Completed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  border-gray-200">
              <td className="px-6 py-4">{todoById?.userId}</td>
              <td className="px-6 py-4">{todoById?.title}</td>
              <td className="px-6 py-4">{todoById?.completed ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoDetail;
