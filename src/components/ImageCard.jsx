const ImageCard = ({ img }) => {
  const tags = img.tags.split(",");

  return (
    <div className="h-96 w-72 group relative items-center justify-center overflow-hidden cursor-pointer rounded shadow-xl hover:shadow-teal-300 bg-[#a2a2a2] border-slate-600 border-2">
      <img src={img.webformatURL} alt="" className="h-[50%] w-full object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-center pb-2 text-xl mb-2">Photo by {img.user}</div>
        <ul>
          <li className="border-2 rounded border-slate-600 px-2 my-2 text-center">
            <strong>Views: </strong>
            {img.views}
          </li>
          <li className="border-2 rounded border-slate-600 px-2 my-2 text-center">
            <strong>Downloads: </strong>
            {img.downloads}
          </li>
          <li className="border-2 rounded border-slate-600 px-2 my-2 text-center">
            <strong>Likes: </strong>
            {img.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-slate-800 rounded-full px-3 py-1 text-sm font-semibold border-slate-600 border-2
        text-slate-200 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
