"use client";
import "./globals.css";
import React, { useState } from "react";
import ThemeLoader from "./ThemeLoader";
import ThemeSelector from "./ThemeSelector";
import themesConfig from "./themesConfig.json";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>(
    themesConfig.defaultTheme || "default"
  );
  const handleThemeChange = (theme: string) => {
    setTimeout(() => {
      setSelectedTheme(theme);
    }, 9000);
  };
  const showThemeSelector = process.env.APP_MODE !== "production";

  return (
    <html lang="en">
      <body>
        {showThemeSelector && (
          <div className="w-full bg-black">
            <ThemeSelector onThemeChange={handleThemeChange} />
          </div>
        )}
        <ThemeLoader selectedTheme={selectedTheme}>{children}</ThemeLoader>
      </body>
    </html>
  );
};

export default Layout;
