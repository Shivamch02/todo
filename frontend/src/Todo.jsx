import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Todo = ({ todo, id }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex w-full border-b border-black">
        {" "}
        <div className="w-[70%] flex p-4 bg-gray-300">
          <div className="w-[20%] pl-2 flex items-center">
            <h1 className="text-2xl">{todo?.title}</h1>
          </div>
          <div className="w-[60%] flex items-center">
            <p>{todo?.description.slice(0, 160)}</p>
          </div>
          <div className="w-[20%] flex p-4 text-left items-center">
            <p>{todo?.status ? "Completed" : "Not Completed"}</p>
          </div>
        </div>
        <div className="w-[30%] flex justify-around p-2 bg-gray-300 items-center">
          <button
            className="px-8 h-10 bg-red-700 text-white font-bold rounded-lg"
            onClick={async () => {
              await fetch(`http://localhost:3000/todos/${id}`, {
                method: "DELETE",
                headers: {
                  "content-type": "application/json",
                },
              });
              navigate("/");
            }}
          >
            Delete
          </button>
          <button
            className="px-8 h-10 bg-yellow-700 text-white font-bold rounded-lg"
            onClick={() => {
              navigate(`/edit/${id}`);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
