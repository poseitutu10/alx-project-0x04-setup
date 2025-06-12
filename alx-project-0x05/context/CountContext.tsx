import { createContext, ReactNode, useContext, useState } from "react";

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}
export const Context = createContext<CountContextProps | undefined>(undefined);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((count) => count + 1);

  const decrement = () => setCount((count) => (count > 0 ? count - 1 : 0));

  return <Context.Provider value={{count, increment, decrement}}>{children}</Context.Provider>;
};


export const useCount = () => {
    const countObject = useContext(Context);

    if(!countObject){
        throw new Error("useCount must be within context provider")
    }

    return countObject;
}