import pb from "@/api/pocketbase";
import CircleButton from "@/components/CircleButton";
import FormTitle from "@/components/FormTitle";
import GoToBackButton from "@/components/GoToBackButton";
import Input from "@/components/Input";
import Lion from "@/components/Lion";
import { useAuth } from "@/context/AuthContext";
import { useInputState } from "@/hooks/useInputState";
import FormContainer from "@/layout/FormContainer";
import { useNavigate } from "react-router-dom";

const inputFields = [
  { name: "username", text: "사자 이름", placeholder: "김사자" },
  { name: "email", text: "사자 이메일", placeholder: "lion@naver.com" },
  { name: "password", text: "비밀번호", placeholder: "******" },
  { name: "passwordConfirm", text: "비밀번호 확인", placeholder: "******" },
];

const initalValue = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

function SiginUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const { formState, handleChange } = useInputState(initalValue);

  const handleCreateUser = async () => {
    await signUp(formState);
    alert(
      `${formState.username} (으)로 가입 되었습니다 로그인 페이지로 이동합니다 🐣!`,
    );
    navigate("/signin");
  };

  return (
    <>
      <GoToBackButton className={"absolute top-[80px] right-[120px]"} />
      <FormContainer>
        <Lion className={"absolute top-[-130px]"} />
        <FormTitle text="회원가입" />
        <div className="bg-lionWhite px-9 pt-7 rounded-[20px] ">
          {inputFields?.map((field) => {
            return (
              <Input
                id={field.name}
                key={field.name}
                text={field.text}
                defaultValue={formState[field.name]}
                placeholderText={field.placeholder}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            );
          })}
        </div>
        <CircleButton
          type="button"
          circleButtonText="완료"
          width="140px"
          height="140px"
          borderWidth="border-4"
          handleCreateUser={handleCreateUser}
        />
      </FormContainer>
    </>
  );
}

export default SiginUp;