import { H1 } from ".";
import { BsList } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-30 flex justify-between w-full px-5 py-2 bg-transparent">
      <H1
        text="ACRIG"
        color="text-whiteprimary hover:text-redprimary duration-150"
      />
      <BsList className="flex text-4xl duration-150 cursor-pointer text-whiteprimary hover:text-redprimary" />
    </div>
  );
};

export default Navbar;
