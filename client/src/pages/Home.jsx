import { useEffect, useState } from "react";
import { api } from "../api/api";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/Card";


const Home = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(api);
      setData(res.data);
    } catch (error) {
      console.log(error);
    };
  }


  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="flex flex-col  px-6 bg-slate-100 h-[100vh]">
      <Navbar />

      <div className="w-full px-3 mt-4">
        <h1 className="font-bold text-3xl underline">Profile</h1>
      </div>

      <div>
        {
          data?.results?.map((data, index) => (
            <Card key={index} data={data} />
          ))
        }
      </div>

    </div>
  )
}

export default Home;