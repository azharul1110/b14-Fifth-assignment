import logoText from "../assets/logo-text.png";

function Navbar() { 
  return ( 
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white"> 
      <div className="w-full px-6 py-3 md:px-16"> 
        <div className="flex items-center justify-between"> 
 
          <button className="text-lg text-gray-600 md:hidden"> 
            ☰ 
          </button> 
 
          <img 
            src={logoText} 
            alt="Dev Stack" 
            className="w-28" 
          /> 
 
          <div className="hidden items-center gap-8 text-sm md:flex"> 
            <a href="#" className="font-medium text-pink-500"> 
              Home 
            </a> 
            <a href="#" className="text-gray-500 hover:text-pink-500"> 
              Technologies 
            </a> 
            <a href="#" className="text-gray-500 hover:text-pink-500"> 
              Projects 
            </a> 
            <a href="#" className="text-gray-500 hover:text-pink-500"> 
              About 
            </a> 
            <a href="#" className="text-gray-500 hover:text-pink-500"> 
              Contact 
            </a> 
          </div> 
 
          <div className="flex items-center gap-3"> 
            <button className="text-sm text-gray-600"> 
              Sign In 
            </button> 
 
            <button className="gradient-bg rounded-full px-5 py-2 text-sm text-white"> 
              Sign Up 
            </button> 
          </div> 
 
        </div> 
      </div> 
    </nav> 
  ); 
} 
 
export default Navbar;