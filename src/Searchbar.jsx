export default function Searchbar({ input, handleInput, handleQuery }) {
  return (
    <div className="search">
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleQuery}>Search</button>
    </div>
  );
}
