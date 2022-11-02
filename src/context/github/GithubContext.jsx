import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_URL;
const GITHUB_TOKEN = process.env.REACT_APP_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialStates = {
    users: [],
    loading: false,
    user: {},
    repos: [],
    mode: "light",
  };

  const [state, dispatch] = useReducer(githubReducer, initialStates);

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({ q: text });
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
      {}
    );

    const { items } = await response.json();
    dispatch({ type: "GET_USERS", payload: items });
  };

  const getUser = async (login) => {
    setLoading();

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}`
    );
    const data = await response.json();
    dispatch({ type: "GET_USER", payload: data });
  };

  const getRepos = async (login) => {
    setLoading();

    const response = await fetch(`https://api.github.com/users/${login}/repos`);
    const data = await response.json();
    dispatch({ type: "GET_REPOS", payload: data });
  };

  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  const changeMode = () => {
    if (document.documentElement.getAttribute("data-theme") == "forest") {
      document.documentElement.setAttribute("data-theme", "cupcake");
    } else {
      document.documentElement.setAttribute("data-theme", "forest");
    }

    dispatch({
      type: "CHANGE_MODE",
      payload: document.documentElement.getAttribute("data-theme"),
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
        changeMode,

        repos: state.repos,
        mode: state.mode,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
