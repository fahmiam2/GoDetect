import { IconGithub, IconInstagram, IconLinkedin } from "./SocialMediaIcon";

export default function Footer() {
  return (
    <footer className="bg-black py-5 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
        <div className="text-left">
          <p className="text-sm">&copy; 2024 GoDetect. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4 px-5">
          <a
            href="https://www.instagram.com/fahmi_am2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/fahmiam2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedin />
          </a>
          <a
            href="https://github.com/fahmiam2"
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
