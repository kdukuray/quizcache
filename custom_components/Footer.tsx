export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Logo & brief */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">QuizCache</h2>
          <p className="text-sm text-gray-400">
            .......
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social icons */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">....</a>
            <a href="#" className="hover:text-white">....</a>
            <a href="#" className="hover:text-white">....</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-white">
        © {new Date().getFullYear()} QuizCache. All rights reserved.
      </div>
    </footer>
  );
}
