const RightCardContent = (props) => {
  return (
    <div className="h-full w-full absolute top-0 left-0 p-5 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full flex justify-center items-center h-7 w-7">
        {props.id+1}
      </h2>
      <div>
        <p className="text-xl text-white mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          suscipit aliquam, sed aliquid fugiat eaque!
        </p>
        <div className="flex items-center gap-3">
          <button style={{backgroundColor:props.color}} className=" text-white font-medium px-8 py-2 rounded-full">
           {props.tag}
          </button>
          <span className="h-[1px] w-10 bg-white/70"></span>
          <span className="bg-blue-600 text-white p-2 rounded-lg">
            <i className="ri-arrow-right-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
