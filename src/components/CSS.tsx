import { useState } from "react";
import styles from "../styles/myStyle.module.css";
import clsx from "clsx";

function CSS() {
  const [isAuth, setIsAuth] = useState(true);
  const objStyle = {
    color: " blue",
    fontSize: "15px",
    fontWeight: "bold",
  };

  function toggleIsAuth() {
    setIsAuth(!isAuth);
  }

  return (
    <div>
      <h1
        style={{
          color: "red",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Inline CSS
      </h1>
      <h1 style={objStyle}>OBJECT STYLE</h1>
      <h1 className={`${styles["text-color"]}`}>Module CSS</h1>
      <div
        // className={`
        // box box-sm
        // ${isAuth ? " box-red" : "box-black"}`}
        className={clsx("box box-sm", isAuth ? "box-red" : "")}
      >
        Box
      </div>
      <button type="button" onClick={toggleIsAuth}>
        Toggle Auth
      </button>
    </div>
  );
}

export default CSS;
