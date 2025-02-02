import React from "react";
import CardWithButton from "./CardWithButton";

const BlogContent = () => {
  const data = [
    {
      img: "/images/blogimg.png",
      title: "Build Your API stack",
      content: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: "/images/blogimg.png",
      title: "Build Your API stack",
      content: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: "/images/blogimg.png",
      title: "Build Your API stack",
      content: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: "/images/blogimg.png",
      title: "Build Your API stack",
      content: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: "/images/blogimg.png",
      title: "Build Your API stack",
      content: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: "/images/blogimg.png",
      title: "Build Your API stack",
      content: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <div className="h-[105vh] pt-10 px-14 w-full">
      {/* <div className="h-3/4 w-full flex justify-around mt-10 flex-wrap">
        {data.map((items, index) => (
          <div
            key={index}
            className="group h-80 w-[30%] flex flex-col border rounded-md bg-[#F5F7FA] p-4"
          >
            <div className="h-[50%] relative flex justify-center">
              <Image className="rounded-lg " src={items.img} alt="it" fill />
            </div>
            <div className="h-[40%] relative ">
              <div className="w-full flex justify-between m-2">
                <h1 className="text-left font-semibold text-[20px]">
                  {items.title}
                </h1>
                <p className="m-1">10 Jan, 2024</p>
              </div>
              <p className="">{items.content}</p>
            </div>
            <div className="h-[10%] relative flex justify-center">
              <Button
                text="Read More"
                textColor="#FF0000"
                noBg
                height={30}
                weight={150}
                icon
              />
            </div>
          </div>
        ))}
      </div> */}
      <div className='m-10 grid md:grid-cols-3 grid-cols-1 gap-3 sm:grid-cols-2'>
        
        {
            data.map((item, index) => (
                <div key={index} className='mb-4 flex justify-center'>

                    <CardWithButton imgSrc={item.img} title={item.title} content={item.content} btnText='Explore' id={index}  />
                </div>
            ))
        }
       

    </div>
    </div>
  );
};

export default BlogContent;
