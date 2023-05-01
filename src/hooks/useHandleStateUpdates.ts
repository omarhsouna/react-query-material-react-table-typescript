import { useState } from "react";

const useHandleStateUpdates = (newState: any, callback?: () => void) => {
  const [prevState, setPrevState] = useState(newState);
  if (newState !== prevState) {
    if (callback) callback();
    setPrevState(newState);
  }
};

export default useHandleStateUpdates;
