import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ToggleButton from "./Components/ToggleButton";
import MoonIcon from "./Components/MoonIcon";
import SunIcon from "./Components/SunIcon";
import {
  GlobalStyles,
  OuteContainer,
  InnerContainer,
  Title,
  SubTitle,
} from "./assets/StyledComponents/StyledComponents";
import "./App.css";

const darkTheme = {
  bg: "#222",
  title: "#fbfbfb",
  subTitle: "#fbfbfb",
  icon: "#fbfbfb",
};

const lightTheme = {
  bg: "#fbfbfb",
  title: "#333",
  subTitle: "#444",
  icon: "#444",
};

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <OuteContainer>
          <InnerContainer>
            <SunIcon />
            <ToggleButton toggleTheme={toggleTheme} />
            <MoonIcon />
          </InnerContainer>
          <Title>Toggle Theme</Title>
          <SubTitle>Library : Styled Components</SubTitle>
        </OuteContainer>
      </ThemeProvider>
    </>
  );
}
