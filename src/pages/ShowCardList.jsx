import LetterList from "@/components/LetterList";
import Header from "@/layout/Header";


function ShowCardList() {
  return (
    <>
      <Header
        text="편지가 이만큼 도착했어요!"
        lionColor="blue"
        fillColor={"#0D77D8"}
      />
      <div className="flex flex-row justify-center my-4">
          <LetterList />
      </div>
    </>
  );
}

export default ShowCardList;
