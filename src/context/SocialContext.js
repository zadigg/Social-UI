import React, { createContext, useContext, useState } from "react";

const Context = createContext();
export const SocialContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const toggleModal = () => {
    setModal((cur) => !cur);
  };

  const toggleSidebar = () => {
    setSidebar((cur) => !cur);
  };

  return (
    <Context.Provider value={{ modal, toggleModal, sidebar, toggleSidebar }}>
      {children}
    </Context.Provider>
  );
};
export const useSocialContext = () => useContext(Context);
