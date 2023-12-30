import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { FaCircleCheck } from "react-icons/fa6";

interface UiCheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width?: string;
  height?: string;
}
const UiCheckbox: FC<UiCheckboxProps> = ({
  children,
  className,
  width,
  height,
  checked,
  ...props
}) => {
  return (
    <div className={`w-${width} h-${height} relative`}>
      <input
        type="checkbox"
        checked={checked}
        className={`h-${height} w-${width} absolute left-0 top-0 z-10 cursor-pointer opacity-0`}
        {...props}
      />
      {checked ? (
        <FaCircleCheck className={`w-${width} h-${height} text-blue-400`} />
      ) : (
        <div
          className={`w-${width} h-${height} rounded-full border-1 border-gray-400 bg-gray-50`}
        ></div>
      )}
    </div>
  );
};

export default UiCheckbox;
