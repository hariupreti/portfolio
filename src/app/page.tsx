"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import themesConfig from "./themesConfig.json";
import { useRouter } from "next/navigation";
import Loading from "./components/Loading";

export default function page() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  // Load the theme from localStorage on the client side
  useEffect(() => {
    const storedTheme = localStorage.getItem("selectedTheme");
    setSelectedTheme(storedTheme || themesConfig.defaultTheme || "system");
  }, []);

  // Apply the selected theme and update localStorage
  useEffect(() => {
    if (selectedTheme) {
      document.documentElement.setAttribute("data-theme", selectedTheme);
      localStorage.setItem("selectedTheme", selectedTheme);
    }
  }, [selectedTheme]);

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

  // Prevent rendering until the selected theme is loaded
  if (selectedTheme === null) {
    return <Loading></Loading>; // Optionally, return a loading spinner here
  }

  return (
    <div className="min-h-screen bg-black p-4">
      <h1 className="text-3xl font-bold text-center mb-8 py-8">
        Pick Portfolio Theme
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 px-10">
        {themesConfig.availableThemes.map((theme) => (
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            layout="themeShow"
            key={"each-theme-view" + theme.name}
            transition={{ type: "spring", bounce: 0.25 }}
            onClick={() => handleThemeChange(theme.name)}
            className={`p-4 rounded-lg border border-white/5 shadow-lg cursor-pointer ${
              selectedTheme === theme.path
                ? "border-blue-900 "
                : "border-slate-800"
            }`}
          >
            <img
              src={theme.preview}
              alt={theme.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{theme.name}</h2>
            <p className="text-gray-600">{theme.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
