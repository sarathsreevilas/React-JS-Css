import React from "react";
import Child from "./Child";
import homeCss from "./Home.module.css";
import btnCss from "./Button.module.css";

const Home = () => {
  return (
    <div className={homeCss.header}>
      <h1>Welcome Home</h1>
      <Child />
      <button type="button" className={btnCss.loginBtn}>
        Login
      </button>
      <button type="button" className={btnCss.logoutBtn}>
        logout
      </button>
    </div>
  );
};

export default Home;
