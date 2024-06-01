type BlogGridProps = {
  title: string;
  content: string;
  id: string;
  author?: string;
};

export const BlogGrid = ({ title, content, id, author }: BlogGridProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg p-10 mb-10 bg-white">
      <div className="flex justify-between mb-4">
        <AuthorComponent author={author} />
        <h5 className="font-light text-gray-500">
          {Math.ceil(content.length / 400) + " Minute"}
        </h5>
      </div>

      <h1 className="text-3xl font-semibold mb-2 line-clamp-3 md:line-clamp-1">
        {title}
      </h1>
      <p className=" mb-2 text-gray-500 ">
        {content.length < 100 ? content : content.slice(0, 200) + "..."}
      </p>
      <a
        href={`/blog/${id}`}
        className=" hover:text-blue-700 flex justify-end items-center gap-2 "
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </a>
    </div>
  );
};

type AuthorComponentProps = {
  author?: string;
};

function AuthorComponent({ author }: AuthorComponentProps) {
  const authorName = author ? author : "Default";
  const publishedDate = "26 July 2021";
  return (
    <div className="flex gap-2 items-center justify-around ">
      <div className="bg-slate-700 flex justify-center items-center text-white rounded-full size-8">
        {authorName[0]}
      </div>
      <div>{authorName}</div>
      <div>&#xB7;</div>
      <h5 className="text-gray-500 text-sm font-light">{publishedDate}</h5>
    </div>
  );
}
