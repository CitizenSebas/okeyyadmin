import {
  RiNotification2Line,
  RiArrowDropDownLine,
  RiSearch2Line,
} from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b p-4">
      <form>
        <div className="relative">
          <RiSearch2Line className="absolute left-2 top-3"/>
          <input type="search" className="bg-gray-100 outline-none rounded-lg py-2 pl-8 pr-4" placeholder="Buscar" />
        </div>
      </form>
      <nav className="flex items-center gap-4">
        <a>
          <RiNotification2Line />
        </a>

        <a className="flex items-center gap-4">
          Administrador
          <RiArrowDropDownLine />
        </a>
      </nav>
    </header>
  );
};

export default Header;
