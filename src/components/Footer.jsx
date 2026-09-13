import logoText from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="px-[72.5px] pt-16 pb-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          <div>
            <img
              src={logoText}
              alt="Dev Stack"
              className="mb-4 w-28"
            />

            <p className="max-w-xs text-xs leading-5 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-4 text-xs text-gray-500">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold text-gray-800">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-3 text-xs text-gray-400">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold text-gray-800">
              COMPANY
            </h3>

            <div className="flex flex-col gap-3 text-xs text-gray-400">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold text-gray-800">
              LEGAL
            </h3>

            <div className="flex flex-col gap-3 text-xs text-gray-400">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-5 text-xs text-gray-400 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;