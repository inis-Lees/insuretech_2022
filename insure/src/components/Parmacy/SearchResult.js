import React from "react";

const SearchResult = ({ phamacyList }) => {
  return (
    <div>
    {phamacyList.map((data, index) => {
      return <p key={index}><a href={data.url} target="_blank">{index+1}.{data.yadmNm} - {data.addr}</a></p>;
    })}
  </div>
  );
};

export default SearchResult;
