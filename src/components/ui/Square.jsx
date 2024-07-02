const Square = ({ value, onClick, disabled }) => {
  const xStyle = "text-[#ef6c40] text-[3rem]";
  const oStyle = "text-[#e59773] text-[3rem]";

  return (
    <div className="px-1 border border-[#503025]">
      <div
        className={`w-20 h-20 m-2 flex justify-center items-center text-2xl font-bold rounded-md bg-[#a27754] cursor-pointer ${
          disabled ? "pointer-events-none" : ""
        } ${value === "X" ? xStyle : value === "O" ? oStyle : "bg-gray-300"}`}
        onClick={onClick}
      >
        {value}
      </div>
    </div>
  );
};

export default Square;
