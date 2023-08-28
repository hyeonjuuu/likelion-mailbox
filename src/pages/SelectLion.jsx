import SearchBar from "@/components/SearchBar";
import SelectUser from "@/components/SelectUser";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import Header from "@/layout/Header";
import { useState } from "react";

function SelectLion() {
  useDocumentTitle("SelectLion");

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="w-[1280px] h-[832px]">
      <Header text={"어떤 사자에게 편지를 남겨볼까요?"} lionColor={"red"} />
      <SearchBar onSearch={setSearchTerm} />
      <SelectUser searchTerm={searchTerm} />
    </main>
  );
}

export default SelectLion;
