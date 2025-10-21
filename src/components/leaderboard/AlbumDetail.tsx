import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AlbumDetail() {
  const [albumById, setAlbumById] = useState<any>(null);
  const params = useParams();
  const albumId = params?.albumId;

  useEffect(() => {
    if (!albumId) return;
    async function fetchAlbumById() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${albumId}`
        );
        const data = await res.json();
        setAlbumById(data);
      } catch (e) {
        console.log("Fail to fetch album by id");
      }
    }
    fetchAlbumById();
  }, [albumId]);
  return (
    <div>
      <h1>Album detail</h1>
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
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {albumById?.userId}
              </th>
              <td className="px-6 py-4">{albumById?.title}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AlbumDetail;
