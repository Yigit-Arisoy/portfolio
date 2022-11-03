import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import GithubContext from "../context/github/GithubContext";
import { useContext } from "react";

function Home() {
  let { navActive } = useContext(GithubContext);
  return (
    <div className={navActive ? "blurBg" : ""}>
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
