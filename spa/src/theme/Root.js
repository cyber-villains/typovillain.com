import React, {useState, useEffect, createContext} from 'react';
import Modal from 'react-modal';

function getUser(setU) {
  fetch( 'https://api.villain.network/user',
    {
      method: 'GET',
      credentials: 'include',
      // mode: 'cors',
    })
    .then(response => response.json())
    .then(data => {
    if (data.message === "Forbidden") {
      throw new Error("Forbidden")
    } else {
      setU(data);
      sessionStorage.setItem("isAuth", "1");
      console.log("root set user and session.");
    }
    })
    .catch((error) => {
      setU(null);
      sessionStorage.removeItem("isAuth");
      console.log('not authenticated.');
    })
}

Modal.setAppElement('#__docusaurus');

export const UserContext = createContext(null);

// Default implementation, that you can customize
export default function Root({children}) {
  const [user, setUser] = useState(null);

  // attempt to load user
  useEffect(() => {
    if (user === null) {
      getUser(setUser);
    }
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}