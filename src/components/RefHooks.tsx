import { useEffect, useRef, useState } from "react";
import LikeButton from "./LikeButton";
import Dialog from "./Dialog";

function RefHooks() {
  const [timeStamp, setTimeStamp] = useState(Date.now());
  const fullNameRef = useRef<any>(null);
  const countRef = useRef<number>(0);
  const isSkipFirstRender = useRef(true);
  const buttonRef = useRef<any>(null);
  const dialogRef = useRef<any>(null);
  const [dialogText, setDialogText] = useState("");

  function submit() {
    console.log("fullNameRef:", fullNameRef);
    countRef.current = countRef.current + 1;

    // console.log("Ref Hook:", {
    //   countRef: countRef.current,
    // });
    fullNameRef.current.focus();
    fullNameRef.current.select();

    isSkipFirstRender.current = false;
    const text = dialogRef.current.getText();
    setDialogText(text);

    // document.getElementById('likeButton')?.setAttribute('style','background-color:red')
    buttonRef.current.updateBgColor();
    dialogRef.current.exposeToggleModa();
    setTimeStamp(Date.now());
  }

  useEffect(() => {
    //call background API -> when user interact with web
    if (isSkipFirstRender.current) return;
    console.log("Run effect background api");
    fetch("https://jsonplaceholder.typicode.com/todos?_page1&_limit=3").then(
      (res) => res.json()
    );
  }, [timeStamp]);

  return (
    <div>
      <h1>Use Ref</h1>
      Count: {countRef.current}
      <br />
      <input type="text" ref={fullNameRef} name="" id="" />
      <button type="button" onClick={submit}>
        Submit
      </button>
      <br />
      <LikeButton ref={buttonRef} />
      <h1>{dialogText}</h1>
      <h6>Demo UseRef with model</h6>
      <Dialog ref={dialogRef} />
    </div>
  );
}

export default RefHooks;
