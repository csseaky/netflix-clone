import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");
  const [emailPlaceholderText, setEmailPlaceholderText] = useState(
    "Email address"
  );
  return (
    <AppContext.Provider value={{ language, setLanguage, emailPlaceholderText, setEmailPlaceholderText }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
