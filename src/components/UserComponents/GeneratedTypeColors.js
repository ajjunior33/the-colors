import { useState } from "react";
import { FiToggleRight, FiToggleLeft } from "react-icons/fi";
const GeneratedTypeColors = () => {
  const [somerDark, setSomerDark] = useState(false);
  const [somerLight, setSomerLight] = useState(false);

  function handleColor(color, type) {
    if (color === "dark" && type === "active") {
      if (somerLight === true) {
        setSomerLight(false);
        return setSomerDark(true);
      } else {
        return setSomerDark(true);
      }
    } else if (color === "dark" && type === "disable") {
      setSomerDark(false);
    } else if (color === "light" && type === "disable") {
      setSomerLight(false);
    } else if (color === "light" && type === "active") {
      if (somerDark === true) {
        setSomerDark(false);
        return setSomerLight(true);
      } else {
        return setSomerLight(true);
      }
    } else {
      setSomerDark(false);

      setSomerLight(false);
    }
  }

  return (
    <div className="list">
      <div className="item">
        {somerDark === true ? (
          <FiToggleRight
            onClick={() => handleColor("dark", "disable")}
            color="#3742fa"
          />
        ) : (
          <FiToggleLeft onClick={() => handleColor("dark", "active")} />
        )}
        Somente cores escuras
      </div>
      <div className="item">
        {somerLight === true ? (
          <FiToggleRight
            onClick={() => handleColor("light", "disable")}
            color="#3742fa"
          />
        ) : (
          <FiToggleLeft onClick={() => handleColor("light", "active")} />
        )}{" "}
        Somente cores claras
      </div>
    </div>
  );
};

export { GeneratedTypeColors };
