import SendButton from "./SendButton";

function WriteMessage({ className }) {
  return (
    <>
      <textarea
        className={className}
        cols="30"
        rows="10"
      ></textarea>
      <SendButton />
    </>
  );
}

export default WriteMessage;
