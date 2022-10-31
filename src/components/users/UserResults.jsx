import React, { useContext } from "react";
import { ImSpinner10 as Spinner } from "react-icons/im";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <>
        <div className="grid grid-cols-1 gap-8 mt-8 mx-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {users.map((user, index) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      </>
    );
  } else return <Spinner className="spinner mx-auto text-6xl text-primary" />;
}

export default UserResults;
