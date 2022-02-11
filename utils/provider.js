import { useContext, createContext, useState } from "react";
import { themes } from "./variables";
//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
  theme: "default",
  setTheme: () => {},
};

const MyContext = createContext(initialStates);

export default function AppProvider({ children }) {
  //children all the pages/components insider this provider
  const [theme, setTheme] = useState(initialStates.theme);
  //put in the variables you want to share
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <style jsx global>
        {`
          body {
            background-color: ${themes[theme].body};
          }
        `}
      </style>
      {children}
    </MyContext.Provider>
  );
}

//use the Context to create Hooks like useTheme
export const useTheme = () => {
  const { theme, setTheme } = useContext(MyContext);
  return { theme, setTheme };
};
