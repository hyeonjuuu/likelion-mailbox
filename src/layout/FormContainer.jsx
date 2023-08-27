function FormContainer({ children, onSubmit }) {
  return (
    <>
      <form
        className="w-[443px] h-[600px] bg-lionGray border-4 rounded-[20px] flex flex-col items-center relative"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </>
  );
}

export default FormContainer;
