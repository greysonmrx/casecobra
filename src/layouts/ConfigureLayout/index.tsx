import React from "react";

import { Steps } from "./components/Steps";

const ConfigureLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 flex-1 flex flex-col">
      <Steps />
      {children}
    </div>
  );
};

export { ConfigureLayout };
