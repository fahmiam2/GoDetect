export default function MessageError({ message }) {
  return (
    <textarea
      readOnly
      className="focus:shadow-outline size-16 w-full items-center rounded-xl border bg-gray-200 p-3 text-center text-gray-500 focus:outline-none"
      placeholder="input your text"
      value={message}
    />
  );
}
