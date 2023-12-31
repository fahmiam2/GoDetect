export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <p className="text-sm">&copy; 2023 GoDetect. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-4">
          {/* Social media icons or links go here */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-white"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-white"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
