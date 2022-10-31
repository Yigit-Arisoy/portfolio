import React from "react";
import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/Alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text == "") {
      alert("Please enter a name");
    } else {
      searchUsers(text);

      setText("");
    }
  };

  const handleClear = () => {
    clearUsers();
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="relative flex ml-4  mt-4">
            <input
              type="text"
              placeholder="Search users"
              class="input input-bordered input-primary w-full max-w-xs focus:outline-none"
              value={text}
              onChange={handleText}
            />
            <button
              type="submit"
              className="btn btn-ghost text-primary font-bold btn-md relative right-20 w-20 border"
            >
              search
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="btn btn-outline text-primary font-bold btn-md borde relative right-16"
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserSearch;
