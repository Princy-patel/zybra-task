import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 User Management. All rights reserved.</p>
        <p>Contact us: princy@gmail.com</p>
        <div className="flex justify-center items-center mt-4 space-x-4">
          <Link
            href="https://github.com/Princy-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
          >
            <Github size={20} />
            <span>Princy Patel</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
