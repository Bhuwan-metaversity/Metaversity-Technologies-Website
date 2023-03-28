import React from "react";
import "../NftTokens/NftToken.css"

const NftToken = (props) => {
  return (
    <>
      <div className="nft-tokens" >
        {props.img}
        <p className="title">{props.name}</p>
        {/* style={{marginTop:"auto",fontSize:"16px", textAlign:"center"}} */}
      </div>
    </>
  );
};

export default NftToken;
