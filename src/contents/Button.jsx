const Button = ({ text, color, hoverBG }) => {
  return <button className={`h-11 p-2.5 cursor-pointer ${hoverBG === "green" ? "hover:text-white border hover:border-white hover:bg-green-500" : "hover:text-green-500 hover:bg-white hover:border hover:border-green-500"}   ${color === "green" ? "text-white bg-green-500" : "text-black border border-green-500"} rounded-10px rounded min-w-[93px]  mx-2 text-base font-medium font-Poppins`}>{text}</button>;
};

export const Button2 = ({ url }) => {
  return (
    <a href={url} className="min-h-11 px-0.5 py-2 md:p-2.5 cursor-pointer rounded text-sm md:text-lg   ring-2  text-green-500     hover:text-white   hover:bg-green-500 ring-green-500">
      Learn More &nbsp; <span className="text-xl">→</span>
    </a>
  );
};

export default Button;
