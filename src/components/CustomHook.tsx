import { useState } from "react";
import TodoBoard from "./leaderboard/TodoBoard";
import AlbumBoard from "./leaderboard/AlbumBoard";
import PostBoard from "./leaderboard/PostBoard";

function CustomHook() {
  const [tab, setTab] = useState("todo");

  function switchTab(nameTab: string) {
    setTab(nameTab);
  }

  return (
    <div>
      <h1>Custom hook</h1>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => switchTab("todo")}
      >
        Todo
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => switchTab("album")}
      >
        Album
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => switchTab("post")}
      >
        Post
      </button>
      <br />
      {tab === "todo" && <TodoBoard />}
      {tab === "album" && <AlbumBoard />}
      {tab === "post" && <PostBoard />}
    </div>
  );
}

export default CustomHook;
