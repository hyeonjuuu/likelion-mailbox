import { Link } from 'react-router-dom';

function AccountActions() {
  return (
    <>
      <div className="w-full pb-7 text-[#454545] text-[12px] flex justify-between px-9 pt-4">
        <span>비밀번호를 잊어버렸나요 ?</span>
        <Link to="/signup">
          <span>회원가입</span>
        </Link>
      </div>
    </>
  );
}

export default AccountActions;
