import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostBoardDetail() {
  const [postById, setPostById] = useState<any>(null);
  const params = useParams();
  const postId = params?.postId;

  useEffect(() => {
    if (!postId) return;
    async function fetchPostById() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const data = await res.json();
        setPostById(data);
      } catch (e) {
        console.log("Fail to fetch post by Id");
      }
    }
    fetchPostById();
  }, [postId]);

  return (
    <div>
      <h1>Post Board</h1>
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
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  border-gray-200">
              <td className="px-6 py-4">{postById?.userId}</td>
              <td className="px-6 py-4">{postById?.title}</td>
              <td className="px-6 py-4">{postById?.body}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PostBoardDetail;
