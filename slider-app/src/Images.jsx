import { useEffect, useState } from "react";
import "./index.css";

export default function Images({ query }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    setImages([]);
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=24&client_id=VYFqBdfGNFbJ9YXSv4Hif9xXBI50Tl4Hr61tQSsVSj8`
    ).then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch from Unsplash API");
      }
      return res
        .json()
        .then((data) => {
          setImages(data.results);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    });
  }, [query]);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>Error: {error}</p>;

  function Next() {
    if (isActive === images.length - 1) {
      setIsActive(0);
    } else setIsActive(isActive + 1);
  }

  function Previous() {
    if (isActive === 0) {
      setIsActive(images.length - 1);
    } else setIsActive(isActive - 1);
  }
  if (images.length === 0) return <p>No images found for “{query}”</p>;

  return (
    <div className="parent">
      <button onClick={Previous}>Prev</button>
      <div className="img-div">
        {images.map((image, index) => (
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Unsplash photo"}
            key={index}
            className={index === isActive ? "normal" : "hidden"}
          />
        ))}
      </div>
      <button onClick={Next}>Next</button>
    </div>
  );
}
