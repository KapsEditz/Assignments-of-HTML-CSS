import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [bgColor, setBgColor] = useState("#ffffff");

  function changeColor() {
    if (bgColor === "#ababab") {
      setBgColor("#d584fe");
    } else if (bgColor === "#d584fe") {
      setBgColor("#2fff78");
    } else if (bgColor === "#2fff78") {
      setBgColor("#00fff7");
    } else if (bgColor === "#00fff7") {
        setBgColor("#ff0073")
    } else {
        setBgColor("#ababab")
    }
  }

  return (
    <ThemeContext.Provider value={{ bgColor, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}