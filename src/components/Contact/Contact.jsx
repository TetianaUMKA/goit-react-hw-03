export default function Contact({ contact: { name, number } }) {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button">Delete</button>
    </>
  );
}
