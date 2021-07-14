import React from "react";
import { useState } from "react";
import Header from "./Header";
import PopUp from "./PopUp";
import UserList from "./UserList";

function App() {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("Favorites");

  return (
    <>
      <UserList title={title} page={page}></UserList>
      <div className="px-4 py-2">
      <button
        onClick={() => setPage((page) => page + 1)}
        className="p-2 text-white bg-primary-300 rounded-xl"
      >
        Next Page
      </button>
      </div>
    </>
  );
}

export default App;
