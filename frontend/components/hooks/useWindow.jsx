import { useEffect, useState } from "react";

const useWindow = () => {
  const [window, setWindow] = useState(null);
  useEffect(() => setWindow(true), []);

  return window;
};

export default useWindow;
