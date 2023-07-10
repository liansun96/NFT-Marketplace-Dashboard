import React from "react";
import "./Pagination.css";

const AuthorCard = ({ author }) => {
  return (
    <div key={author.id}>
      <div className="flex items-center justify-center h-[55px] w-[55px] rounded-full bg-heading_text">
        <div className="">
          <img
            src={author.image}
            className="w-[50px] h-[50px] rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
