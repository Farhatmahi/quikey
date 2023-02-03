import { useEffect, useState } from "react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <nav
        className={`fixed top-0 left-0 flex items-center justify-between p-2 text-white w-full -mb-[72px] bg-white z-50 ${
          isScrolled
            ? "transition duration-500 "
            : ""
        }`}
      >
        <img src="/asset/qlogo.png" alt="" />
        
    
      </nav>
    );
  };
  
  export default Header;