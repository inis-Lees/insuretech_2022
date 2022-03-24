import React from "react";
import HospitalListItem from "./HospitalListItem";

const SearchResult = ({ hospitalList }) => {
  return (
    <div>
    {hospitalList.map((data, index) => {
      return <HospitalListItem key={index} addr={data.addr} clCd={data.clCd} clCdNm={data.clCdNm} yadmNm={data.yadmNm} ykiho={data.ykiho}></HospitalListItem>;
    })}
  </div>
  );
};

export default SearchResult;
