"use client";
import useIsMobile from "./CheckNarrow";
import HeaderDesktop from "./HeaderWide";
import HeaderMobile from "./HeaderNarrow";
import { useTheme } from "next-themes";

export default function Header() {
  const isMobile = useIsMobile(690);
  const { theme } = useTheme();
  const isDark = theme === "dark"; // Determine if the current theme is dark

  return isMobile ? (
    <HeaderMobile isDark={isDark} />
  ) : (
    <HeaderDesktop isDark={isDark} />
  );
}
