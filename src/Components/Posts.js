import React from "react";
import { useParams } from "react-router-dom";

const Posts = (props) => {
  console.log(props);
  //   const { params } = props.match;
  const { category } = useParams(); //gives u the parameter that you passed in app js as a parameter

  return (
    <div>
      <h1>this is post page {category}</h1>
    </div>
  );
};

export default Posts;
