import { IconGithub, IconInstagram, IconLinkedin } from "./SocialMediaIcon";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <p className="text-sm">&copy; 2024 GoDetect. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4 px-5">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
