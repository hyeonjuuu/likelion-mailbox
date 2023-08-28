function CircleButton({
  type,
  circleButtonText,
  width,
  height,
  onClick,
  borderWidth,
}) {
  const circleButtonSize = {
    width: width || "189px",
    height: height || "189px",
  };

  return (
    <>
      <button
        className={`bg-lionYellow ${borderWidth} border-black rounded-full cursor-pointer}`}
        type={type}
        style={circleButtonSize}
        onClick={onClick}
      >
        <span className="font-extrabold text-center text-[2.5rem]">
          {circleButtonText}
        </span>
      </button>
    </>
  );
}

export default CircleButton;
