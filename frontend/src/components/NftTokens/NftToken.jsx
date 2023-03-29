import React from "react";
import "../NftTokens/NftToken.css"

const NftToken = (props) => {
  return (
    <>
      <div className="nft-tokens" >
        {props.img}
        <p className="title">{props.name}</p>
      </div>
    </>
  );
};

export default NftToken;
