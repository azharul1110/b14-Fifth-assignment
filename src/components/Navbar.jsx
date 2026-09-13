function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">

          
          <button className="md:hidden text-gray-600 text-xl">
            ☰
          </button>

         
          <img
            src="/src/assets/logo-text.png"
            alt="Dev Stack"
            className="w-28" 
            />

          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="text-pink-500 font-medium">
              Home
            </a>

            <a href="#" className="text-gray-600">
              Technologies
            </a>

            <a href="#" className="text-gray-600">
              Projects
            </a>

            <a href="#" className="text-gray-600">
              About
            </a>

            <a href="#" className="text-gray-600">
              Contact
            </a>
          </div>

          
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-600">
              Sign In
            </button>

            <button className="bg-pink-500 text-white text-sm px-5 py-2 rounded-full">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;