import ReactPlayer from "react-player";

export default function OutputVideo({ src }) {
  return (
    <ReactPlayer url={src} controls width="100%" height="auto" loop={true} />
  );
}
