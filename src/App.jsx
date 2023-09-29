import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [trips, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        setData(e);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="mt-15 ">
      <h1 className="text-4xl font-semibold font-mono" >Travel</h1>
      <ul className="flex gap-8 	flex-col justify-center items-center  p-8   ">
        {trips &&
          trips.map((trip) => {
            return (
              <li key={trip.title} className="shadow-lg shadow-indigo-500/40 rounded-md p-4 ">
                <h2 className="  text-xl font-semibold font-mono">
                  {trip.title}
                </h2>
                <h3 className="  text-xl font-normal italic">{trip.price}</h3>
                <h4 className="text-xl font-medium font-serif">{trip.loc}</h4>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
