import Lion from "@/components/Lion";
import CircleButton from "@/components/CircleButton";
import GoToBackButton from "@/components/GoToBackButton";
import FormContainer from "@/layout/FormContainer";
import FormTitle from "@/components/FormTitle";
import Input from "@/components/Input";
import AccountActions from "@/components/AccountActions";
import { useNavigate } from "react-router-dom";
import { useInputState } from "@/hooks/useInputState";
import pb from "@/api/pocketbase";

const signInFields = [
  { name: "email", text: "이메일", placholder: "lion123@naver.com" },
  { name: "password", text: "비밀번호", placholder: "*******" },
];

const initalValue = {
  username: "",
  email: "",
  password: "",
};

function SignIn() {
  const navigate = useNavigate();

  const { formState, handleChange } = useInputState(initalValue);

  const handleChangeUserValue = (e) => {
    const { id, value } = e.target;
    handleChange(id, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      await pb.collection("users").authWithPassword(email, password);
      alert("로그인에 성공하였습니다 다음 페이지로 이동할게요 🥳");
      navigate("/selectpage");
    } catch (error) {
      alert("로그인 이메일 이나 비밀번호 정보가 일치하지 않습니다");
    }
  };

  return (
    <>
      <GoToBackButton className={"absolute top-[80px] right-[120px]"} />

      <FormContainer>
        <Lion className={"absolute top-[0]"} lionColor="red" />
        <FormTitle text="로그인" />
        <div className="bg-lionWhite px-9 pt-7 rounded-[20px]">
          {signInFields.map((field) => {
            return (
              <Input
                id={field.name}
                key={field.name}
                text={field.text}
                defaultValue={formState[field.name]}
                placeholderText={field.placholder}
                onChange={handleChangeUserValue}
              />
            );
          })}
        </div>
        <AccountActions />
        <CircleButton
          type="submit"
          circleButtonText="확인"
          width="140px"
          height="140px"
          borderWidth="border-4"
          onClick={handleSubmit}
        />
      </FormContainer>
    </>
  );
}

export default SignIn;
