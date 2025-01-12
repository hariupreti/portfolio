import React from "react";
import Loading from "./components/Loading";

interface ThemeLoaderProps {
  selectedTheme: string;
  children: React.ReactNode; // Add this to accept children
}

const ThemeLoader: React.FC<ThemeLoaderProps> = ({
  selectedTheme,
  children,
}) => {
  const themes: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
    default: React.lazy(() => import("./themes/default/Layout")),
    theme1: React.lazy(() => import("./themes/theme1/Layout")),
  };

  const SelectedTheme = themes[selectedTheme] || themes["default"];

  return (
    <React.Suspense fallback={<Loading></Loading>}>
      <SelectedTheme>{children}</SelectedTheme>
    </React.Suspense>
  );
};

export default ThemeLoader;
