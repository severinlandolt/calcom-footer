import React, { useState } from "react";

interface ShineControlsProps {
  onChange: (controls: ShineControlsState) => void;
}

interface ShineControlsState {
  surfaceScale: number;
  specularConstant: number;
  specularExponent: number;
  lightingColor: string;
}

const ShineControls: React.FC<ShineControlsProps> = ({ onChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [controls, setControls] = useState<ShineControlsState>({
    surfaceScale: 2,
    specularConstant: 1.25,
    specularExponent: 300,
    lightingColor: "#222222",
  });

  const handleChange = (name: keyof ShineControlsState, value: number | string) => {
    setControls((prev) => {
      const newControls = { ...prev, [name]: value };
      onChange(newControls);
      return newControls;
    });
  };

  return (
    <div className="fixed top-4 right-4 bg-white shadow-lg rounded-md z-50 transition-all duration-300 ease-in-out" style={{ width: isCollapsed ? "auto" : "10rem" }}>
      <div className="flex justify-between items-center p-2 cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
        <h3 className="text-sm font-semibold">Shine Controls</h3>
        <button className="text-gray-500 hover:text-gray-700">
          {isCollapsed ? "+" : "-"}
        </button>
      </div>
      {!isCollapsed && (
        <div className="p-2 space-y-2">
          {Object.entries(controls).map(([key, value]) => (
            <div key={key} className="text-xs">
              <label htmlFor={key} className="block mb-1">
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </label>
              <input
                type={key === "lightingColor" ? "color" : "range"}
                id={key}
                min={key === "lightingColor" ? undefined : "0"}
                max={key === "surfaceScale" ? "10" : key === "specularConstant" ? "5" : "1000"}
                step={key === "surfaceScale" ? "0.1" : key === "specularConstant" ? "0.05" : "10"}
                value={value}
                onChange={(e) =>
                  handleChange(
                    key as keyof ShineControlsState,
                    key === "lightingColor"
                      ? e.target.value
                      : key === "specularExponent"
                      ? parseInt(e.target.value, 10)
                      : parseFloat(e.target.value)
                  )
                }
                className="w-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShineControls;