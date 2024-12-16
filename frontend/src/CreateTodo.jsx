import { useState } from "react";

export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-gray-900">
      <div className="w-full flex justify-around p-4">
        <div className="w-1/2">
          <input
            className="border-1 border-gray-700 mr-3 px-6 py-3 rounded-lg"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className="border-1 border-gray-700 mr-3 px-6 py-3 rounded-lg"
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            className="bg-blue-700 rounded-lg px-6 py-3 text-white font-bold"
            onClick={async () => {
              await fetch("http://localhost:3000/todos", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  title,
                  description,
                }),
              });
            }}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};
