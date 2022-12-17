import React, { useEffect, useState } from "react";

const Main = () => {
  const [searchValue, setSearchValue] = useState("karachi");
  const [city, setCity] = useState(null);
  const [weatherCon, SetweatherCon] = useState("Clear");

  const getData = async () => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=b4bfe5aea55dbfbc6b545705cbbb1d7d`;
    const res = await fetch(api);
    const data = await res.json();
    console.log(data);
    setCity(data.main);
    SetweatherCon(data.weather[0]);
  };

  useEffect(() => {
    getData();
  }, [searchValue]);
  return (
    <div
      className={`h-screen ${
        weatherCon.main == "Haze" ? "smoke" : "bg-gray-800"
      }  lg:p-12 p-2 from-violet-500 to-fuchsia-500`}
    >
      <div className=" max-w-sm m-auto bg-indigo-500 shadow-lg shadow-indigo-500/50 ">
        <div className="inptDiv mx-auto flex items-center justify-center">
          <input
            className="m-2  lg:p-3 w-full p-2  "
            type={"search"}
            placeholder="Enter City Name"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="text-white text-center text-2xl">City Not Found</p>
        ) : (
          <>
            <h1 className="text-center p-4  text-5xl text-white">
              {searchValue}
            </h1>
            <div className="flex items-center justify-center p-6">
              <img src="./images/s2.png" />
            </div>
            <div className=" lg:p-6  p-4 lg:w-2/5 flex justify-center items-center mx-auto">
              <p className="text-center text-white text-4xl">
                {`${city.temp}`}°
              </p>
            </div>
            <div className="border-b-2 lg:p-2  border-gray-50 p-4 lg:w-2/5 flex justify-center items-center mx-auto">
              <p className="text-center text-white text-4xl">
                {weatherCon.main}
              </p>
            </div>
            <div className="bottom flex p-2 items-center justify-around mt-8">
              <p className="text-white text-2xl ">
                Temp Min
                <img src="./images/s2.png" className="h-12 mx-auto mt-2" />
                <p className="mx-auto text-center mt-2 text-2xl">
                  {`${city.temp_min}`}°
                </p>
              </p>
              <p className="text-white  text-2xl">
                Temp Max
                <img src="./images/s2.png" className="h-12 mx-auto mt-2" />
                <p className="mx-auto text-center text-2xl mt-2">
                  {`${city.temp_max}`}°
                </p>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
