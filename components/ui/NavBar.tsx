import ThemeChanger from "@/components/atom/ThemeChanger";
import NavLinks from "../atom/NavLinks";
import UserDropdown from "../login/UserDropdown";

function NavBar() {
  return (
    <div className="md:h-screen md:w-60 max-md:h-24 max-md:w-full p-4">
      <nav className="bg-base-300 size-full rounded-lg p-2 max-md:items-center max-md:flex">
        <section className="flex-1">
          <NavLinks />
        </section>
        <div className="flex items-center gap-x-4 flex-row md:hidden w-fit pe-2">
          <ThemeChanger />
          <UserDropdown />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
