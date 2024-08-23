export default function SearchBox({ value, onHandleSetContactFilter }) {
  const handleChange = (e) => {
    onHandleSetContactFilter(e.target.value);
  };

  return (
    <div>
      <label></label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
