import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Appbar } from "../Components/Appbar";

export const Blog = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      <Appbar />
      <div className="">
        {data && (
          <div className=" bg-slate-100  px-10 py-10 md:px-40">
            <div className="bg-white shadow rounded-sm p-10">
              <h1 className="text-4xl text-left font-semibold mb-2">
                {data.title}
              </h1>
              <div className="flex justify-between mb-2">
                <div className="mb-2">by {data.author.name || "Default"}</div>
                <div className="text-gray-500 font-light">
                  {Math.ceil(data.content.length / 400)} Minutes
                </div>
              </div>

              <p className="text-gray-500 text-lg">{data.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
