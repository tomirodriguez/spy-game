import { createContext } from "react";

import { type PropsWithChildren } from "react";

type ContextProps = {
  // showModal: boolean;
};

export const UIContext = createContext({} as ContextProps);

export const UIProvider = ({ children }: PropsWithChildren) => {
  return (
    <UIContext.Provider value={{}}>
      <>{children}</>
    </UIContext.Provider>
  );
};
