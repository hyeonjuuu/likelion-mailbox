import { useState } from "react";
import debounce from "./../utils/debounce";

export const useInputState = (initialValues) => {
  const [formState, setFormState] = useState(initialValues);

  const handleChange = debounce((fieldName, value) => {
    if (Object.hasOwnProperty.call(formState, fieldName)) {
      // 유효한 fieldName인지 확인
      setFormState((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    }
  }, 500);

  return { formState, handleChange };
};
