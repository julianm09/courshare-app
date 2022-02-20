import { useContext, createContext, useState } from "react";
import { themes } from "./variables";
//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
  theme: "default",
  view: "grid",
  activeCourse: {},
  setTheme: () => {},
  setView: () => {},
  setActiveCourse: () => {},
  setViewCourse: () => {},
};

const MyContext = createContext(initialStates);

export default function AppProvider({ children }) {
  //children all the pages/components insider this provider
  const [theme, setTheme] = useState(initialStates.theme);
  const [view, setView] = useState(initialStates.view);
  const [activeCourse, setActiveCourse] = useState(initialStates.activeCourse);
  const [viewCourse, setViewCourse] = useState(false);
  const handleViewCourse = (course) => {
    setActiveCourse(course);
    setViewCourse(true);
  };
  //put in the variables you want to share
  return (
    <MyContext.Provider
      value={{
        theme,
        setTheme,
        view,
        setView,
        activeCourse,
        setActiveCourse,
        handleViewCourse,
        viewCourse,
        setViewCourse
      }}
    >
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

export const useView = () => {
  const { view, setView } = useContext(MyContext);
  return { view, setView };
};

export const useActiveCourse = () => {
  const {
    activeCourse,
    setActiveCourse,
    handleViewCourse,
    viewCourse,
    setViewCourse,
  } = useContext(MyContext);
  return {
    activeCourse,
    setActiveCourse,
    handleViewCourse,
    viewCourse,
    setViewCourse,
  };
};
