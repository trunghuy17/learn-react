import React, { useEffect, useState } from "react";
import EffectHookDemoUser from "./EffectHookDemoUser";


/* Clean up function
    - Clean up always run before side effect
    - Clean up run after the component re-render or unmounts.
    - Not run for component first render
    - 
*/


interface IUser {
  email: string;
  role: string;
}

function EffectHooks() {
  const [count] = useState(0);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    console.log("useEffect with dependencies");
  }, [count]);

  useEffect(() => {
    console.log("useEffect no dependencies");
    async function fetchUser() {
      try {
        const res = await fetch(
          "https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user/67c28b62e28bda8b26fd3f9a"
        );
        const data = await res.json();
        setUser(data.data);
      } catch (err) {
        console.log("fetch user errors: ", err);
      }
    }
    fetchUser();
  },[]);

  return (
    <>
      <h1>EffectHook</h1>
      {user && (
        <div>
          Email: {user.email}
          <br />
          Role: {user.role}
        </div>
      )}
    <EffectHookDemoUser/>
    </>
  );
}

export default EffectHooks;
