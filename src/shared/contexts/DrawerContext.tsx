import React, { createContext, useCallback, useContext, useState } from "react";

const DrawerContext = createContext({} as IDrawerContextData);

interface IDrawerProvider {
  children: React.ReactNode;
}
interface IDrawerOptions {
  icon: string;
  label: string;
  path: string;
}
interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptions[];
  toggleDrawerOpen: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}
export function useAppDrawerContext(): IDrawerContextData {
  return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<IDrawerProvider> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        setDrawerOptions: handleSetDrawerOptions,
        toggleDrawerOpen,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
