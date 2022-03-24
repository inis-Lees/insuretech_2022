import React from "react";

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map((data, index) => {
        return <p key={index}><a href={data.url} target="_blank">{index+1}.{data.title}</a></p>;
      })}
    </div>
  );
};

export default NewsList;
