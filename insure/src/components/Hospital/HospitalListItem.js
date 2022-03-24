import axios from "axios";
import React, { useState } from 'react'
import styled from "styled-components";
import HospitalDiagListItem from "./HospitalDiagListItem";

const HospitalListItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  border: 1px solid;
`;

const HospitalName = styled.div``;
const HospitalLv = styled.div``;
const HospitalAddress = styled.div``;
const HospitalYkiho = styled.div``;

const HospitalListItem = ({ addr, clCd, clCdNm, yadmNm, ykiho }) => {
  const [hospitalDiagList, setHospitalDiagList] = useState([]);

  const moveToHospitalDetail = () => {
    window.open(`/hospitalDetail?ykiho=${ykiho}`);
    const options = {
      method: "GET"
      , url: "http://apis.data.go.kr/B551182/hospDiagInfoService1/getClinicTop5List1"
      , params: {
        serviceKey: "v+O08FP9gQNRADM7klvoV+uEEhrFLkS50VbSeqsJM9MFeZ8RUOpxlSO84Xzf3oyCY94LSbJHipS/NKn/Rb4C1A=="
        , ykiho: ykiho
        , pageNo : 1
        , numOfRows : 1
      }
    }
    axios(options)
      .then(function ({ data }) {
        setHospitalDiagList({});
        if (data.response.body.items != "") {
          setHospitalDiagList(data.response.body.items.item);
        } else {
          setHospitalDiagList({data: data.response.header.resultMsg});
        }
      });
  };
  return (
    <HospitalListItemBlock>
      <HospitalName>{yadmNm}</HospitalName>
      <HospitalLv>
        {clCdNm}
        {clCd}
      </HospitalLv>
      <HospitalAddress>{addr}</HospitalAddress>
      <HospitalYkiho>{ykiho}</HospitalYkiho>
      <button onClick={moveToHospitalDetail}>상세 정보보기</button>
      <HospitalDiagListItem hospitalDiagList={hospitalDiagList} nodata={hospitalDiagList}></HospitalDiagListItem>
    </HospitalListItemBlock>
  );
};

export default HospitalListItem;
