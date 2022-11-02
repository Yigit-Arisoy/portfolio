import React, { useEffect } from "react";
import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImSpinner10 as Spinner } from "react-icons/im";

function User() {
  const { user, getUser, getRepos, repos, loading, mode } =
    useContext(GithubContext);
  const params = useParams();
  const shadowColor = mode == "cupcake" ? "#65C3C8" : "#171212";

  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  if (loading)
    return <Spinner className="spinner mx-auto text-6xl text-primary" />;

  return (
    <>
      <div className="grid justify-items-center md:justify-items-start md:ml-16">
        <div className="container grid grid-cols-1  md:grid-cols-4 mx-2 w-11/12 mt-16 sm:w-11/12 md:w-10/12 lg:w-8/12">
          <div className="picture col-span-1 ">
            <figure className="">
              <img
                src={user.avatar_url}
                alt=""
                className={` rounded-xl shadow-lg shadow-gray-400/40 w-72 mx-auto md:mx-none`}
              />
            </figure>
          </div>
          <div className="profileInfo col-span-1 md:col-span-3 text-center md:text-left ml-4">
            <h1 className="font-bold text-primary-focus text-3xl">
              {user.name}
            </h1>
            <p className="mt-4 text-primary-content">{user.bio}</p>
            <a
              href={user.html_url}
              target="blank"
              className="btn btn-outline btn-primary mt-6"
            >
              Github Profile
            </a>
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none shadow-md shadow-gray-400/40 rounded-xl mt-8 pb-2 text-center">
              <div className="grid grid-rows-2">
                <p className="text-primary">Location</p>
                <p className="font-bold text-secondary">{user.location}</p>
              </div>

              <div className="grid grid-rows-2">
                <p className="text-primary">Website</p>
                <a
                  href={user.blog}
                  target="blank"
                  className="font-bold text-secondary"
                >
                  {user.blog}
                </a>
              </div>

              <div className="grid grid-rows-2">
                <p className="text-primary">Twitter</p>
                <a
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="blank"
                  className="font-bold text-secondary"
                >
                  {user.twitter_username}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container repos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-center md:text-left mt-8 items-left gap-8 w-11/12">
          {repos.map((repo, index) => {
            return (
              <div className="repo rounded-lg border  px-8 text-primary-focus  font-bold mt-4 pb-1 pt-1 shadow-md shadow-gray-400/50 btn btn-outline btn-primary">
                <a href={repo.html_url} target="blank">
                  {" "}
                  {repo.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default User;
