import GoToBackButton from '@/components/GoToBackButton';
import MessageFrom from '@/components/MessageFrom';
import MessageTo from '@/components/MessageTo';
import WriteMessage from '@/components/WriteMessage';

function WriteCard() {
  return (
    <div className="relative bg-white w-[1208px] h-[746px] my-11 mx-9 rounded-[20px]">
      <MessageTo
        className={
          'pt-4 bg-[url("/_handwriting_dear.png")] w-[880px] h-[110px] text-[#4A9944] pl-[580px] text-[46px]'
        }
              toName={'종윤'}
      />
      <GoToBackButton
        className={
          'bg-[url("/lion_back.svg")] absolute w-[88px] h-[88px] top-[14px] right-[20px]'
        }
      />
      <div className="flex">
        <WriteMessage
          className={
            'bg-[#F5F5F5] w-[708px] h-[528px] ml-[54px] mt-9 text-[20px] font-[700]'
          }
        />
        <img className="ml-9 mt-9 h-[536px]" src="/Vector 2.png" alt="" />
        <div className="flex flex-col mt-9 ml-9">
          <MessageFrom
            className={
              'text-[36px] mt-[22px]'
            }
            fromName={'수완'}
          />
        </div>
      </div>
    </div>
  );
}

export default WriteCard;
