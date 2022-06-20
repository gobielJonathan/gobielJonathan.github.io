import { createContext, useState } from "react";

export const PageContext = createContext({
  current: 0,
  foward: () => {},
  backward: () => {},
});

const PageProvider = ({ children }) => {
  const [state, setState] = useState(0);

  const foward = () => {
    if (state + 1 > 6) {
      setState(6);
    } else {
      setState(state + 1);
    }
  };

  const backward = () => {
    if (state - 1 < 0) {
      setState(0);
    } else {
      setState(state - 1);
    }
  };

  return (
    <PageContext.Provider value={{ current: state, foward, backward }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
