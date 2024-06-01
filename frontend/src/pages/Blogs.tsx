import { useEffect, useState } from "react";
import { BlogGrid } from "../Components/BlogGrid";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../Components/Appbar";

export const Blogs = () => {
  const [data, setData] = useState([]); //data is an array of objects [ {title: "title", content: "content", id: "id"}
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin"); //redirect to login page
    }

    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
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
    <div>
      <Appbar AuthorName={data[0] && data[0].author.name}/>
      <div className="px-10 py-10 md:px-40 bg-slate-50">
        <h1 className="text-6xl text-center mb-20">Blogs</h1>
        {data &&
          data.map((blog, index) => (
            <div key={index}>
              <BlogGrid
                title={blog.title}
                content={blog.content}
                id={blog.id}
                author={blog.author.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
