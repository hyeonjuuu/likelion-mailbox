import GoToBackButton from "@/components/GoToBackButton";
import MessageLion from "@/components/MessageLion";
import SelectPageButton from "@/components/SelectPageButton";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

function SelectPage() {
  const userValue = JSON.parse(localStorage.getItem("pocketbase_auth"));

  const { createData } = useAuth();

  const handleCreateData = () => {
    const userID = userValue.model.id;

    const data = {
      fromId: userID,
      toId: "",
      gifStamp: "",
      content: "",
      envelope: "",
    };

    createData("test_message", data);
  };

  return (
    <>
      <div className="flex flex-col gap-[80px] justify-center items-center h-full mr-10">
        <div className="flex flex-col items-end">
          <MessageLion role="write" color="red" />
          <Link to="/selectLion">
            <SelectPageButton
              role="write"
              text="남겨볼래!"
              onClick={handleCreateData}
            />
          </Link>
        </div>

        <div className="flex flex-col items-end">
          <MessageLion role="confirm" color="blue" />
          <Link to="/showcardlist">
            <SelectPageButton role="read" text="확인해볼래!" />
          </Link>
        </div>
      </div>

      <div className="absolute top-10 right-[60px]">
        <GoToBackButton color="yellow" />
      </div>
    </>
  );
}

export default SelectPage;
