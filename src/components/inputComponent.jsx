import { useState } from "react";
import showPasswordIcon from "../assets/icons/showpassword.png";

const CustomInput = ({
    type,
    name,
    value,
    placeholder,
    onChange,
    ...otherProps
}) => {
    const [inputType, setInputType] = useState(type);

    const showPassword = () => {
        setInputType((prev) => (prev === "password" ? "text" : "password"));
    };

    return (
        <>
            {type !== "password" ? (
                <input
                    className="border border-gray-300 rounded-md px-3 py-2  outline-none focus:border-blue-500 mb-4"
                    type={type}
                    name="email"
                    placeholder={`Enter your email`}
                    value={value}
                    onChange={onChange}
                    {...otherProps}
                />
            ) : (
                <div className="relative mb-4">
                    <input
                        className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500  w-full"
                        type={inputType}
                        placeholder={placeholder}
                        value={value}
                        name={name}
                        onChange={onChange}
                        {...otherProps}
                    />
                    <div
                        className="absolute right-3 top-0  h-full items-center flex justify-center cursor-pointer"
                        onClick={showPassword}
                    >
                        <img className="w-5" src={showPasswordIcon} alt="" />
                    </div>
                </div>
            )}
        </>
    );
};

export default CustomInput;
