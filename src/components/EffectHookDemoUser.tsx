import React, { useEffect, useState } from "react";

//https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user?page=${metaData.page}&limit=${metaData.limit}
//https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user


/*
First render: 27 - 28 - 20 - 6 - 13 
Next - render: 27 - 28 - 23 - 20 - 16 - 13 
First render: Render with initial state -> Run layoutEffects -> Effect 
Next- Render: render with state update -> clean up layoutEffects -> Run layoutEffects -> clean up effects -> run effects  
*/

interface IUser {
  _id: string;
  email: string;
  role: string;
}

function EffectHookDemoUser() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [metaData, setMetaData] = useState({
    page: 1,
    limit: 1,
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(
          `https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user?page=${metaData.page}&limit=${metaData.limit}`
        );
        const data = await res.json();
        setUsers(data.data);
      } catch (err) {
        console.log("Fetch user fail");
      }
    }
    fetchUser();
  }, [metaData]);

  function onChangeLimit(e: React.ChangeEvent<HTMLSelectElement>) {
    setMetaData((prev) => ({
      ...prev,
      limit: Number(e.target.value),
    }));
  }

  function onPrevPage() {
    setMetaData((prev) => ({
      ...prev,
      page: prev.page - 1,
    }));
  }

  function onNextPage() {
    setMetaData((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  }

  return (
    <div style={{ width: "550px" }}>
      <table border={1} cellPadding={1} cellSpacing={1}>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>role</th>
        </tr>
        {users.length > 0 ? (
          <>
            {users.map((user) => (
              <tr>
                <th>{user._id}</th>
                <th>{user.email}</th>
                <th>{user.role}</th>
              </tr>
            ))}
          </>
        ) : (
          <tr>
            <th colSpan={3}>No data</th>
          </tr>
        )}
      </table>
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <select name="" id="" value={metaData.limit} onChange={onChangeLimit}>
          <option value={1}>1</option>
          <option value={3}>3</option>
          <option value={5}>5</option>
        </select>
        <div>
          <button onClick={onPrevPage}>Prev Page</button>
          <span>{metaData.page}</span>
          <button onClick={onNextPage}>Next Page</button>
        </div>
      </div>
    </div>
  );
}

export default EffectHookDemoUser;
