import { createContext, useState } from "react";

export const UserConstext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserConstext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserConstext.Provider>
  );
};
