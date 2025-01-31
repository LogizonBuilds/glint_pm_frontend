import React from "react";

const BlogHero = () => {
  return (
    <div className="bg-[url('/images/blogbg.png')] bg-cover bg-center h-screen w-full justify-center text-white">
      {/* <div className="absolute inset-0 bg-gray/80 z-0"></div> */}
      <div className="flex flex-col items-center text-center justify-center h-full w-full">
        <h1 className="text-[40px] font-medium text-center">Blogs</h1>
        <p className="sm:text-[30px]  text-[30px] font-inter-500 text-[#FFFFFF] text-center">
          Insights and tips from our experts <br /> on how to grow your business{" "}
          <br />
        </p>
      </div>
    </div>
  );
};

export default BlogHero;
