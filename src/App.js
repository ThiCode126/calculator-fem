import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Calculator from "./Components/Calculator";

function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 't1'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.id = theme;
  }, [theme]);

  const handleChangeTheme = () => {
    if (theme === 't1') {
      setTheme('t2');
    } else if (theme === 't2') {
      setTheme('t3');
    } else if (theme === 't3') {
      setTheme('t1');
    } else {
      setTheme('t1');
    }
  }

  return (
    <>
      <Header theme={theme} handleChangeTheme={handleChangeTheme} />
      <Calculator />
    </>
  );
}

export default App;
