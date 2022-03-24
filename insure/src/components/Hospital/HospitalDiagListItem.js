import React from "react";
import styled from "styled-components";

const HospitalDiagListItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  border: 1px solid;
`;

const HospitalName = styled.div``;
const HospitalAddress = styled.div``;
const HospitalYkiho = styled.div``;
const HospitalLv = styled.div``;

const HospitalDiagListItem = ({hospitalDiagList, nodata}) => {
  return (
    <HospitalDiagListItemBlock>
      <HospitalName>{hospitalDiagList.yadmNm}</HospitalName>
      <HospitalAddress>{hospitalDiagList.shwSbjtCdNm}</HospitalAddress>
      <HospitalYkiho>{hospitalDiagList.crtrYm}</HospitalYkiho>
      <HospitalLv>
        {hospitalDiagList.mfrnIntrsIlnsCdNm1}<br/>
        {hospitalDiagList.mfrnIntrsIlnsCdNm2}<br/>
        {hospitalDiagList.mfrnIntrsIlnsCdNm3}<br/>
        {hospitalDiagList.mfrnIntrsIlnsCdNm4}<br/>
        {hospitalDiagList.mfrnIntrsIlnsCdNm5}
      </HospitalLv>
      <HospitalName>{nodata.data}</HospitalName>
    </HospitalDiagListItemBlock>
  );
};

export default HospitalDiagListItem;