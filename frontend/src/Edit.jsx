import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  return (
    <div className="bg-gray-900 flex flex-col">
      <div className="text-3xl py-6 text-center font-bold text-white">
        Edit Your Todo
      </div>
      <div className="w-full flex justify-around p-4">
        <div className="w-1/2 flex items-center">
          <input
            className="border-1 border-gray-700 mr-3 px-6 py-3 rounded-lg"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="border-1 border-gray-700 mr-3 px-6 py-3 rounded-lg"
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            className="w-12 h-12 rounded-lg mr-2"
            type="checkbox"
            placeholder="Description"
            onChange={(e) => {
              setStatus(e.target.checked);
            }}
          />
          <button
            className="bg-blue-700 rounded-lg px-6 py-3 text-white font-bold"
            onClick={async () => {
              await fetch(`http://localhost:3000/todos/${id}`, {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  title,
                  description,
                  status: status,
                }),
              });
              navigate("/todos");
            }}
          >
            Update Todo
          </button>
        </div>
      </div>
    </div>
  );
};
