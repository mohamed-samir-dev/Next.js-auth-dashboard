import { Color } from "../types/types";

interface ColorSelectorProps {
  colors: Color[];
  selectedColor: string;
  onColorSelect: (colorName: string) => void;
}

export default function ColorSelector({
  colors,
  selectedColor,
  onColorSelect,
}: ColorSelectorProps) {
  return (
    <div>
      <p className="text-sm font-semibold text-black mb-3">Colors</p>
      <div className="flex gap-4">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col items-center gap-1">
            <button
              onClick={() => onColorSelect(color.name)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColor === color.name
                  ? "border-gray-900 scale-110"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              style={{ backgroundColor: color.hex }}
            />
            <span className="text-xs text-gray-600">{color.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
