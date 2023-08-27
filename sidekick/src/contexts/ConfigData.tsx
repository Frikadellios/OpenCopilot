import { ReactNode, createContext, useContext } from "react";
import { Options } from "../lib/types";

export type ConfigDataContextType = Pick<
  Options,
  "token" | "initialMessages" | "fixed" | "headers" | "apiUrl"
>;

const ConfigDataContext = createContext<ConfigDataContextType | undefined>(
  undefined
);

export default function ConfigDataProvider({
  children,
  data,
}: {
  data: ConfigDataContextType;
  children: ReactNode;
}) {
  return (
    <ConfigDataContext.Provider value={data}>
      {children}
    </ConfigDataContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConfigData(): ConfigDataContextType | undefined {
  const context = useContext(ConfigDataContext);
  if (!context) {
    throw new Error("useConfigData must be used within a ConfigDataProvider");
  }
  return context;
}
