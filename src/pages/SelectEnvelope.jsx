import red from "./../images/lion-envelope-color-red.png";
import carrot from "./../images/lion-envelope-color-carrot.png";
import pink from "./../images/lion-envelope-color-pink.png";
import orange from "./../images/lion-envelope-color-orange.png";
import yellow from "./../images/lion-envelope-color-yellow.png";
import skyblue from "./../images/lion-envelope-color-skyblue.png";
import blue from "./../images/lion-envelope-color-blue.png";
import backButton from "./../images/lion-back.png";
import { useState } from "react";
import { useEffect } from "react";
import fetchWeatherData from "@/utils/weatherAPI";
import useMessageItem from "@/hooks/useMessageItem";
import { useUpdate as useUpdateMessage } from "@/hooks/useMessages";
import { Link } from 'react-router-dom';

const initialEnvelopeState = {
  envelope: "",
};

function SelectEnvelope() {
  const [weatherData, setWeatherData] = useState(null);
  const { isLoading, data } = useMessageItem("mkk5rmyoplcj8o8");
  const [envelopeState, setEnvelopeState] = useState(initialEnvelopeState);

  const updateMessage = useUpdateMessage();

  useEffect(() => {
    async function fetchData() {
      const weatherFetchData = await fetchWeatherData();
      setWeatherData(weatherFetchData.main.temp);
    }

    if (!isLoading && data) {
      setEnvelopeState({
        envelope: envelopeData,
      });
    }

    fetchData();
  }, [isLoading, data]);

  const handleEditEnvelope = () => {
    updateMessage("mkk5rmyoplcj8o8", envelopeState).catch((error) =>
      console.error(error),
    );
  };

  let envelopeImage;
  let envelopeColor;
  let envelopeData;

  if (weatherData > 28) {
    envelopeImage = red;
    envelopeColor = "빨간색";
    envelopeData = "red";
  } else if (weatherData > 27) {
    envelopeImage = carrot;
    envelopeColor = "다홍색";
    envelopeData = "carrot";
  } else if (weatherData > 26) {
    envelopeImage = pink;
    envelopeColor = "분홍색";
    envelopeData = "pink";
  } else if (weatherData > 25) {
    envelopeImage = orange;
    envelopeColor = "주황색";
    envelopeData = "orange";
  } else if (weatherData > 24) {
    envelopeImage = yellow;
    envelopeColor = "노란색";
    envelopeData = "yellow";
  } else if (weatherData > 23) {
    envelopeImage = skyblue;
    envelopeColor = "하늘색";
    envelopeData = "skyblue";
  } else {
    envelopeImage = blue;
    envelopeColor = "파란색";
    envelopeData = "blue";
  }

  // if (data) {
  return (
    <>
      <div className="weatherWrapper relative w-[1280px] h-[832px] bg-primary px-[62px] py-[70px]">
        <div className="weatherTalk w-[1156px] h-[224px] bg-lionWhite rounded-[20px] px-[40px] py-[38px] font-bold text-[50px] text-center">
          <p className="weatherTalk__degree">
            멋사 본사의 현재 기온은{" "}
            <span className="text-lionOrange font-extrabold">
              {weatherData}도
            </span>{" "}
            네요!
          </p>
          <p className="weatherTalk__color">
            멋사 날씨에 맞춰 봉투는{" "}
            <span className="text-lionOrange font-extrabold">
              {envelopeColor}
            </span>{" "}
            으로!
          </p>
          <div className="envelopeWrapper m-auto">
            <img className="m-auto" src={envelopeImage} alt="편지봉투" />
            <Link to="/selectpage">
              <button
                className="yesButton absolute w-[150px] h-[150px] right-[565px] bottom-[185px] z-10 bg-lionYellow rounded-full border-8 font-extrabold text-[40px] text-center border-lionBlack"
                onClick={handleEditEnvelope}
              >
                좋아!
              </button>
            </Link>
            <a href="">
              <img
                className="absolute w-[88px] h-[88px] right-[56px] bottom-[66px]"
                src={backButton}
                alt="뒤로가기"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
// }
export default SelectEnvelope;
