import Lion from "@/components/Lion";
import { useId } from "react";
import CircleButton from "@/components/CircleButton";
import GoToBackButton from "@/components/GoToBackButton";
import FormContainer from "@/layout/FormContainer";
import FormTitle from "@/components/FormTitle";
import Input from "@/components/Input";
import AccountActions from "@/components/AccountActions";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useInputState } from "@/hooks/useInputState";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const signInPassword = useId();
  const signInId = useId();
  const navigate = useNavigate();

  const { isAuth, user, token } = useAuth();

  const { formState: userValue, handleChange } = useInputState();

  console.log(userValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/selectpage");
  };

  return (
    <>
      <GoToBackButton className={"absolute top-[80px] right-[120px]"} />

      <FormContainer>
        <Lion className={"absolute top-[0]"} lionColor="red" />
        <FormTitle text="로그인" />
        <div className="bg-lionWhite px-9 pt-7 rounded-[20px]">
          <Input
            text="이메일"
            id={signInId}
            placeholderText="lion123@naver.com"
            // defaultValue={userValue.name}
            onChange={handleChange}
          />

          <Input
            text="비밀번호"
            id={signInPassword}
            placeholderText="*******"
            // defaultValue={userValue.password}
            onChange={handleChange}
          />
        </div>
        <AccountActions />
        <Link to="/selectpage">
          <CircleButton
            type="submit"
            circleButtonText="확인"
            width="140px"
            height="140px"
            borderWidth="border-4"
            handleSubmit={handleSubmit}
          />
        </Link>
      </FormContainer>
    </>
  );
}

export default SignIn;
