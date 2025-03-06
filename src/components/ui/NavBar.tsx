import ThemeChanger from "../atom/ThemeChanger";

function NavBar() {
  return (
    <div className="md:h-screen md:w-60 max-md:h-24 max-md:w-full p-4">
      <nav className="bg-accent size-full rounded-xl p-2 max-md:items-center max-md:flex">
        <div className="flex-1">main</div>
        <div className="md:hidden">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
