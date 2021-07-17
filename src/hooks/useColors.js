import { useContext } from "react";

import { ColorsContext } from "../contexts/ColorsContext";

export function useColors() {
  const value = useContext(ColorsContext);
  return value;
}
