import axios from 'axios';
import React, { useState } from 'react'
import Header from '../components/Header';
import SearchInput from '../components/Hospital/SearchInput';
import SearchResult from '../components/Hospital/SearchResult';

const HospitalPage = () => {

  const [hospitalList, setPhamacyList] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInputText(value);
  };


  const handleClick = () => {
    const options = {
      method: "GET"
      , url: "http://apis.data.go.kr/B551182/hospInfoService1/getHospBasisList1"
      , params: {
        serviceKey: "v+O08FP9gQNRADM7klvoV+uEEhrFLkS50VbSeqsJM9MFeZ8RUOpxlSO84Xzf3oyCY94LSbJHipS/NKn/Rb4C1A=="
        , emdongNm: searchInputText
        , clCD : 31
      }
    }
    axios(options)
      .then(function ({ data }) {
        setPhamacyList([]);
        setPhamacyList(data.response.body.items.item);
      });
  };
  return (
    <div>
      <Header title={"병원 검색"}></Header>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <SearchResult hospitalList={hospitalList}></SearchResult>
    </div>
  )
}

export default HospitalPage