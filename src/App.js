import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className=" w-full p-2 bg-slate-800">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-10">No Images Found.</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-10">Loading...</h1>
      ) : (
        <div className="flex flex-wrap gap-4 items-center justify-center ">
          {images.map((img) => (
            <ImageCard key={img.id} img={img} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
