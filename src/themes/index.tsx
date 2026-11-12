import { createContext, useContext } from "react";
import type React from "react";
import { darkChalk } from "./dark-chalk";
import { edumotion } from "./edumotion";
import type { Theme, ThemeName } from "./types";

export type { Theme, ThemeName };

const themes: Record<ThemeName, Theme> = { edumotion, "dark-chalk": darkChalk };

const ThemeContext = createContext<Theme>(edumotion);

export const useTheme = (): Theme => useContext(ThemeContext);

// Theme by name outside a ThemeProvider; unknown names fall back to edumotion like ThemeProvider does.
export const getTheme = (name?: string): Theme =>
  themes[name as ThemeName] ?? edumotion;

export const ThemeProvider: React.FC<{
  readonly name?: string;
  readonly children: React.ReactNode;
}> = ({ name, children }) => {
  const theme = themes[name as ThemeName] ?? edumotion;
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Lets a scene pick its own theme so it also works as a standalone composition.
export const themed = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P & { readonly theme?: string }> => {
  const Themed: React.FC<P & { readonly theme?: string }> = ({
    theme,
    ...rest
  }) => (
    <ThemeProvider name={theme}>
      <Component {...(rest as unknown as P)} />
    </ThemeProvider>
  );
  return Themed;
};

export const themeSchema = {
  theme: {
    type: "string",
    default: "edumotion",
    description: "Design system: edumotion",
  },
} as const;

// Large headline size, scaled per design system.
export const headlineSize = (theme: Theme, size: number): number =>
  Math.round(size * theme.type.scale);
