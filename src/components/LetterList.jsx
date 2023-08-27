import { Link } from "react-router-dom";
import Envelope from "./Envelope";
import useMessageList from "@/hooks/useMessageList";
import { useState } from "react";
import { useEffect } from "react";

function Letter() {
  const { data } = useMessageList();
  let userId = data?.items[5];
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredItems(data.items.filter((item) => item.toId === userId.toId));
    }
  }, [data, userId]);

  return (
    <ul className="flex flex-wrap gap-4 max-w-[1280px] justify-between px-4">
      {filteredItems.map((item) => (
        <li key={item.id}>
          <Link to="/viewcard" className="flex flex-col justify-center items-center">
            <Envelope color={item.envelope} />
            <span className="flex justify-end self-center items-center bg-lionYellow w-[250px] h-[34px] rounded-[10px] text-[20px] font-bold pr-6">
              From. {item.fromId}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Letter;
