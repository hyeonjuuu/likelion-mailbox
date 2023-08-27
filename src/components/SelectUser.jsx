import GoToEnvelope from "./GoToEnvelope";
import { useUserList } from "@/hooks/useUserList";
import PocketBase from "pocketbase";

function SelectUser({ searchTerm }) {
  const { data } = useUserList();

  // const filterUsers = data.filter((user) =>
  //   user.name.toLowerCase().includes(searchTerm.toLowerCase()),

  // );
  console.log(data);
  const handleCreateMessageToUser = async () => {
    const mailData = {
      fromId: "test",
      toId: "test",
      gifStamp: "https://example.com",
      content: "test",
      envelope: "white",
    };

    const pb = new PocketBase("https://likelion-mailbox.pockethost.io");
    const record = await pb.collection("test_message").create(mailData);
    console.log(record);
  };

  return (
    <ul className="grid grid-cols-3 m-10 gap-y-5 justify-items-center items-center">
      {filterUsers.map((item) => {
        const keyId = item.id;
        const name = item.user_name;
        return (
          <li
            onClick={handleCreateMessageToUser}
            key={keyId}
            className="w-[300px] h-[64px] rounded-[10px] bg-inputYellow hover:bg-lionYellow hover:cursor-pointer"
          >
            <GoToEnvelope name={name} keyId={keyId} />
          </li>
        );
      })}
    </ul>
  );
}

export default SelectUser;
