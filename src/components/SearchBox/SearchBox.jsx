export default function SearchBox({ value, onsetContactFilter }) {
  return (
    <div>
      <label></label>
      <input
        type="text"
        value={value}
        onChange={(e) => onsetContactFilter(e.target.value)}
      />
    </div>
  );
}
