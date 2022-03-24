import React from "react";
import axios from "axios";

const AxiosTest = () => {
  const handleClick = () => {
    axios.get("https://newsapi.org/v2/everything?q=코로나&from=2022-03-23&sortBy=popularity&apiKey=f9d16b9847fb43c09993979594fc4fbd").then(function (response) {
      // handle success
      console.log(response);
    });
  };
  return <button onClick={handleClick}>요청 전송</button>;
};

export default AxiosTest;
