import { Link } from 'react-router-dom';
function SendButton({ handleEditContent }) {

  return (
    <>
      <Link to="/selectenvelope">
        <button
          type="button"
          className="absolute right-[54px] top-[600px] w-[216px] h-[64px] bg-[#FFC63E] border-[4px] border-solid border-black rounded-[10px] py-2 px-5 text-[30px]"
          onClick={handleEditContent}
        >
          보내기
        </button>
      </Link>
    </>
  );
}

export default SendButton;
