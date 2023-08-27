import { Link } from "react-router-dom";
import { useUpdate as useUpdateMessage } from "@/hooks/useMessages";
import { useState } from "react";
import PocketBase from "pocketbase";
import { useEffect } from "react";

const initialToId = {
  toId: "",
};

function GoToEnvelope({ name, key }) {
  const localUserId = JSON.parse(localStorage.getItem("pocketbase_auth")).model
    .id;
  const [toId, setToId] = useState(initialToId);
  const updateMessage = useUpdateMessage();

  const handleEditToId = async (e) => {
    const target = e.target.innerHTML;
    console.log(target);
    const pb = new PocketBase("https://likelion-mailbox.pockethost.io");
    const record = (await pb.collection("users").getFullList()).filter(
      (item) => {
        return item.name === target;
      },
    );

    // console.log();
    setToId({
      toId: record[0].id,
    });
  };

  const [message, setMessage] = useState([]);

  // useEffect(() => {
  //   async function messageId() {
  //     const pb = new PocketBase("https://likelion-mailbox.pockethost.io");
  //     const record = await pb.collection("test_message").getFullList();

  //     setMessage(record[0].id);
  //     console.log(message);
  //   }
  //   messageId();
  // }, [message]);

  useEffect(() => {
    async function update() {
      const pb = new PocketBase("https://likelion-mailbox.pockethost.io");
      await pb.collection("test_message").update("oxz95wlkj4qv1r4", toId);
    }
    update();
  }, [toId]);

  return (
    <>
      <Link to="/selectStamp">
        <div
          onClick={handleEditToId}
          key={key}
          className="w-full h-full flex justify-center items-center font-extrabold"
        >
          {name}
        </div>
      </Link>
    </>
  );
}

export default GoToEnvelope;
