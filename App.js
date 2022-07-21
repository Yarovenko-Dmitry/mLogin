import React, { FC, useState } from "react";

import { MainScreen } from "./src/csreens/MainScreen";
import { AuthScreen } from "./src/csreens/AuthScreen";

const App: FC = () => {
  const [isLogged, setIsLogged] = useState(false);

  if (isLogged) {
    return <MainScreen />;
  } else {
    return <AuthScreen setIsLogged={setIsLogged}/>;
  }
};

export default App;
