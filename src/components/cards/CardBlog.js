import React from "react";
import blogimg from "../../image/blog-1.jpg.webp";

function CardBlog({date , title,category}) {
  return (
    <div className="pl-[15px] pr-[15px] mb-[42px]">
      <div className="mb-[30px]">
        <img src={blogimg} />
      </div>
      <p className="text-[#bdbdbd] text-[14px] mb-[10px]">
        <span className="inline-block mr-[8px]">{date}</span> <a className="text-[#f15d44] text-[14px]" href="#">{category}</a>
      </p>
      <h4 className="text-[24px]">
        <a className="text-[#111111] font-[600] leading-[1.2]" href="#">{title}</a>
      </h4>
    </div>
  );
}

export default CardBlog;
