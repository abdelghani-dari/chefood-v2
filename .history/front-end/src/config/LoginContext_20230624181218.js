import React, { createContext, useState, useEffect } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [prod, setProd] = useState([]);
  const [isLoggedFromOffers, setIsLoggedFromOffers] = useState(false);




  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    id: null,
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: null,
    admin: 0
  });







  useEffect(() => { 

    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedLoggedIn !== null) {
      setLoggedIn(storedLoggedIn === 'true');
    }
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [userData, isLoggedIn]);


  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserData({});
    localStorage.removeItem('userData');
    setIsLoggedFromOffers(false)
  };
  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, userData, setUserData, prod, setProd, loading, setLoading,isLoggedFromOffers,setIsLoggedFromOffers}}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginProvider };


