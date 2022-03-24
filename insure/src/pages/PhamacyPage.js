import axios from 'axios';
import React, { useState } from 'react'
import Header from '../components/Header'
import SearchInput from '../components/Parmacy/SearchInput'
import SearchResult from '../components/Parmacy/SearchResult';

const Phamacy = () => {
    const [phamacyList, setPhamacyList] = useState([]);
    const [searchInputText, setSearchInputText] = useState("");

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchInputText(value);
    };

    const handleClick = () => {
        const options = {
            method: "GET"
            , url: "http://apis.data.go.kr/B551182/pharmacyInfoService/getParmacyBasisList"
            , params: {
                serviceKey: "v+O08FP9gQNRADM7klvoV+uEEhrFLkS50VbSeqsJM9MFeZ8RUOpxlSO84Xzf3oyCY94LSbJHipS/NKn/Rb4C1A=="
                , emdongNm: searchInputText
            }
        }
        axios(options)
            .then(function ({ data }) {
                console.log(data);
                setPhamacyList(data.response.body.items.item);
            });
    };
    return (
        <div>
            <Header title={"약국 검색"}></Header>
            <SearchInput
                handleChange={handleChange}
                handleClick={handleClick}
            ></SearchInput>
            <SearchResult phamacyList={phamacyList}></SearchResult>
        </div>
    )
}

export default Phamacy