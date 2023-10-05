import { BsSun } from "react-icons/bs";
import { useTheme } from "styled-components";

export default function SunIcon() {
  const theme = useTheme();

  return (
    <>
      <BsSun className="icon" style={{ color: `${theme.icon}` }} />
    </>
  );
}
