const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth
}) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none
      rounded-full border-2 
      ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : "bg-coral-red  text-white"}
      ${fullWidth && 'w-full'}`
    }
    >
      {label}
      {iconUrl && <img src={iconUrl} className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
