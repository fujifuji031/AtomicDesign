import { createContext } from "react";

const UserConstext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "藤田";
  return (
    <UserConstext.Provider value={{ contextName }}>
      {children}
    </UserConstext.Provider>
  );
};
