import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-sm shadow-cyan-400 card-compact bg-base-100 card-bordered  border-primary pop">
      <div className="flex-col  items-center card-body ">
        <div className="avatar">
          <div className="rounded-full w-16 ">
            <img src={avatar_url} alt="" />
          </div>
        </div>
        <div className="flex flex-col align-center">
          <h2 className="card-title mx-auto ">{login}</h2>
          <Link
            className="text-base-content text-opacity-60 hover:text-primary"
            to={`/users/${login}`}
          >
            Check Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
