import debounce from "@/utils/debounce";
import { useState } from "react";
import { useId } from "react";
import SearchButton from "./SearchButton";

function SearchBar({ onSearch }) {
  const searchId = useId();
  const [searchInput, setSearchInput] = useState("");

  // 검색창
  const handleChangeInput = debounce((e) => {
    const userInputValue = e.target.value.toLowerCase();
    onSearch(userInputValue);
  }, 300);

  // 엔터 눌렀을 때 초기화 되지 않도록
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex items-center justify-center py-10"
      >
        <label htmlFor={searchId} className="sr-only">
          검색
        </label>
        <input
          type="text"
          name="search"
          id={searchId}
          placeholder="   검색어를 입력하세요"
          defaultValue={searchInput}
          onChange={handleChangeInput}
          className="w-[993px] h-[57px] rounded-[10px] border-2 border-solid border-lionBlack bg-lionWhite mr-2 outline-lionYellow"
        />
        <SearchButton searchInput={searchInput} />
      </form>
    </>
  );
}

export default SearchBar;
