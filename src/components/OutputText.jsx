export default function OutputText({ className, message }) {
  return (
    <textarea
      readOnly
      className={className}
      placeholder="input your text"
      value={message}
    />
  );
}
