import pb from "@/api/pocketbase";
import { useEffect } from "react";
import { useState } from "react";

export function useUserList() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("pending");

  async function getUserList() {
    try {
      setStatus("loading");
      const getUserName = await pb.collection("users").getFullList();
      setData(getUserName);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }

  useEffect(() => {
    getUserList();
  }, []);

  return { data, status };
}
