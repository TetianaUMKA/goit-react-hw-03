import { useId } from "react";

export default function SearchBox({ value, onHandleSetContactFilter }) {
  const id = useId();

  const handleChange = (e) => {
    onHandleSetContactFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor={`${id}-search`}>Find contacts name by name</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        id={`${id}-search`}
      />
    </div>
  );
}
