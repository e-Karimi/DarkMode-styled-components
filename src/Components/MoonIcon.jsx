import { BsMoon } from "react-icons/bs";
import { useTheme } from "styled-components";

export default function MoonIcon() {
  const theme = useTheme();

  return (
    <>
      <BsMoon className="icon" style={{ color: `${theme.icon}` }} />
    </>
  );
}
