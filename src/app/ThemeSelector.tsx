"use client";

import React, { useState, useEffect } from "react";
import themesConfig from "./themesConfig.json";

interface ThemeSelectorProps {
  onThemeChange: (theme: string) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onThemeChange }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>(
    themesConfig.defaultTheme || "system"
  );

  if (selectedTheme) {
    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("selectedTheme", selectedTheme);
  }

  useEffect(() => {
    onThemeChange(selectedTheme);
  }, [selectedTheme, onThemeChange]);

  return (
    <div className="theme-selector p-2">
      <div className="grid container mx-auto grid-flow-col">
        <div className="text-green-600 my-auto">Mode: Development</div>
        <div className="text-end">
          <label htmlFor="theme-select" className="mr-2">
            Theme:
          </label>
          <select
            id="theme-select"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            className="p-2 border rounded bg-white/5 h-min border-none ring-0 outline-none px-2"
          >
            {themesConfig.availableThemes.map((theme) => (
              <option key={theme.key} value={theme.key}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
