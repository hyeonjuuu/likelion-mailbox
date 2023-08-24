import Lion from '@/components/Lion';
import CircleButton from '@/components/CircleButton';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="bg-messa ge bg-cover bg-no-repeat w-[1144px] h-[800px] flex flex-col items-center justify-center relative">
        <span className="text-[40px] mb-[107px] font-medium">
          멋쟁이사자가 된 동기들에게
        </span>
        <Link to="/signin">
          <CircleButton circleButtonText={'편지 쓰기'} type={'submit'} />
        </Link>
        <Lion className={'absolute top-[445px] right-[150px]'} />
        <Lion />
        <Link to="/signin">
          <CircleButton circleButtonText={'편지 쓰기'} />
        </Link>
        <div>
          <Lion width={400} height={400} />
        </div>
      </div>
    </>
  );
}

export default Home;
