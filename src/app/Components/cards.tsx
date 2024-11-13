const cardsData = [
    {
      heading: "training Courses",
      paragraph: "The gradual accumulation of information about atomic and small-scale behaviour...",
      bgColor: "bg-white",
      boxcolor: "bg-[#FFDCD1]",
      hrcolor: "bg-[#E74040]"
    },
    {
      heading: "2,769 online courses",
      paragraph: "The gradual accumulation of information about atomic and small-scale behaviour...",
      bgColor: "bg-white",
      boxcolor: "bg-[#B9EAA8]",
      hrcolor: "bg-[#E74040]"
    },
    {
      heading: "training Courses",
      paragraph: "The gradual accumulation of information about atomic and small-scale behaviour...",
      bgColor: "bg-[#23A6F0]",
      boxcolor: "bg-[#FFDCD1]",
      hrcolor: "bg-white"
    }
  ];
  
  const Cards = () => {
    return (
      <div className="flex flex-row w-[1500px] h-[360px] gap-[50px] mt-10 justify-center  mx-auto">
        {cardsData.map((card, index) => (
          <div key={index} className={`h-[292px] w-[350px] py-9 px-10 gap-5 ${card.bgColor}`}>
            <div className={`h-[76px] w-[70px] rounded-xl py-6 px-5 gap-5 ${card.boxcolor}`}></div>
            <h5
              className={`w-[200px] h-[24px] font-bold text-[16px] mt-3 ${
                index === 2 ? "text-white" : "text-[#252B42]"
              }`}
            >
              {card.heading}
            </h5>
            <hr className={`h-[5px] w-[55px] mt-4 ${card.hrcolor}`} />
            <p
              className={`text-justify mt-4 text-[20px] font-normal ${
                index === 2 ? "text-white" : "text-[#737373]"
              }`}
            >
              {card.paragraph}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Cards;
  