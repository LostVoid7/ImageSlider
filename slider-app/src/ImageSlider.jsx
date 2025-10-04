import { useState } from "react";
import Images from "./Images";
import Searchbar from "./Searchbar";

export default function ImageSlider() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("dogs");
  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleQuery() {
    setQuery(input);
  }

  return (
    <div className="slider">
      <Searchbar
        input={input}
        handleInput={handleInput}
        handleQuery={handleQuery}
      />
      <Images query={query} />
    </div>
  );
}
