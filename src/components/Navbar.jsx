export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-xl font-bold tracking-wider">
<span className="font-black tracking-widest">
  VV
</span>        </h1>

        <div className="hidden md:flex gap-8 text-sm">

          <a href="#about" className="hover:text-orange-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-orange-400 transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-orange-400 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-orange-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-orange-400 transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}