import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [image, setImage] = useState();
  const [showNoti, setShowNoti] = useState(false);
  const [showProfile, setShowProfile] = useState(false)
  const [showStatus, setShowStatus] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [token, setToken] = useState(false)
  const [isOpen, setIsOpen] = useState(true);
  const nav = useNavigate()

  const submitHandler = () => {
    setToken(!token)
    if (token === true) nav("/")
  }

  const toggleShow = () => {
    setShow(!show);
  };

  const toggleLanguage = () => {
    setShowLanguage(!showLanguage);
  };

  const toggleNoti = () => {
    setShowNoti(!showNoti);
  };
  const toggleProfile = () => {
    setShowProfile(!showProfile)
    setShowStatus(false)
  }
  const toggleStatus = () => {
    setShowStatus(!showStatus)
  }
  const toggleShowPass = () => {
    setShowPass(!showPass)
  }


  const hide = () => {
    show === true && setShow(false);
    showLanguage === true && setShowLanguage(false);
  };

  const data = {
    show,
    setShow,
    toggleShow,
    showLanguage,
    toggleLanguage,
    image,
    setImage,
    showNoti,
    toggleNoti,
    showProfile,
    toggleProfile,
    showStatus,
    toggleStatus,
    showPass,
    toggleShowPass,
    token,
    setToken,
    submitHandler,
    hide,
    isOpen,
    setIsOpen
  };
  return <stateContext.Provider value={data}>{children}</stateContext.Provider>;
};

export const stateContextCustom = () => useContext(stateContext);
