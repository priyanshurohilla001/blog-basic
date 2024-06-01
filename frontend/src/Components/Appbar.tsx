import { useNavigate } from "react-router-dom";
type AppbarProps = {
    AuthorName?: string;
};

export const Appbar = ({AuthorName}:AppbarProps) => {
  const navigate = useNavigate();

  AuthorName = AuthorName ? AuthorName : "Default";

  return (
    <div className=" bg-white z-10000 sticky top-0 shadow">
      <div className="flex justify-between p-4 md:px-20 ">
        <a href="/" className="font-semibold text-2xl">Medium</a>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/blogs")}
            className="hover:text-blue-700"
          >
            Blogs
          </button>
          <button
            onClick={() => navigate("/create")}
            className="hover:text-blue-700"
          >
            create
          </button>
          <div className="bg-slate-700 flex justify-center items-center text-white rounded-full size-8">
            {AuthorName[0]}
          </div>
        </div>
      </div>
    </div>
  );
};
