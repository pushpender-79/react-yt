import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    // console.log("Data aa gya...")
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    // console.log(response)
    // console.log(response.data)
    setUserData(response.data);
    // console.log(response.data)
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h3 className="text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      // return idx
      return (
        <div key={idx} className="flex-none basis-[calc(20%-0.6rem)]">
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black text-white h-screen flex flex-col">
      {/* <h1 className="text-white text-2xl font-bold p-2">{index}</h1> */}
      <div className="flex-1 flex flex-wrap gap-3 p-2 overflow-hidden">
        {printUserData}
      </div>
      <div className="flex justify-center gap-6 items-center p-3">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h4>page{index}</h4>
        <button
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
