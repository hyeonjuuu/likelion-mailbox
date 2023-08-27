import SendButton from "./SendButton";
import { useUpdate as useUpdateMessage } from "@/hooks/useMessages";
import { useState } from "react";

const initialContent = {
  content: "",
};

function WriteMessage({ className }) {
  const [content, setContent] = useState(initialContent);
  const updateMessage = useUpdateMessage();
  const handleEditContent = () => {
    updateMessage("mkk5rmyoplcj8o8", content).catch((error) =>
      console.error(error),
    );
    
  };
  const handleContent = (e) => {
    setContent({
      content: e.target.value,
    });
  };

  setContent;
  return (
    <>
      <textarea
        className={className}
        cols="30"
        rows="10"
        onChange={handleContent}
      ></textarea>
      <SendButton handleEditContent={handleEditContent} />
    </>
  );
}

export default WriteMessage;
