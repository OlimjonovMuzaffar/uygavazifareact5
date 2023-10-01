import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [trips, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        const mahsulotlar = e.products.slice(0, 4);
        setData(mahsulotlar);
        console.log(mahsulotlar);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="mt-15 ">
      <h1 className="text-4xl font-semibold font-mono">Phones</h1>
      <ul className="flex gap-8 	flex-col justify-center items-center  p-8 cursor: pointer  ">
        {trips &&
          trips.map((trip) => {
            return (
              <li
                key={trip.title}
                className=" w-80 shadow-lg shadow-indigo-500/40 rounded-md p-4 cursor-pointer"
              >
                <h1 className=" text-xl font-semibold font-serif">
                  {trip.title}
                </h1>
                <h2 className="  text-xl font-semibold font-mono">
                  {trip.description}
                </h2>
                <img src={trip.thumbnail} alt="" />
                <h3 className="  text-xl font-normal font-medium">
                  Price: {trip.price}
                </h3>
                <h4 className="text-xl font-medium font-serif">
                  Rating: {trip.rating}
                </h4>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
