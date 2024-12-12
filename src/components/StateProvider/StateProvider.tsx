import { createContext, useContext, useState, ReactNode } from "react";

interface StateContextType {
  selectedState: string;
  setSelectedState: (state: string) => void;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider = ({ children }: StateProviderProps) => {
  const [selectedState, setSelectedState] = useState<string>("");

  return (
    <StateContext.Provider value={{ selectedState, setSelectedState }}>
      {children}
    </StateContext.Provider>
  );
};
