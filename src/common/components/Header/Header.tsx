import { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { CiMenuBurger } from "react-icons/ci";
import clsx from "clsx";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsActive(sectionId)
    setTimeout(() => setIsActive(''), 1500)
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navData = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "info", title: "Info" },
  ];
  return (
    <>
      <div className={clsx(s.headerContainer, scrolled && s.scrolled)}>
        <div className={s.name}>PORTFOLIO</div>
        <ul>
          {navData.map((el, index) => (
            <li
              className={clsx(isActive === el.id && s.active)}
              key={index}
              onClick={() => scrollToSection(el.id)}
            >
              {el.title}
            </li>
          ))}
        </ul>
        <CiMenuBurger
          onClick={handleButton}
          className={s.menu}
          size={44}
          color="white"
        />
      </div>

      {isOpen && (
        <div className={s.dropdown}>
          {navData.map((el) => (
            <a
              className={s.dropdownItem}
              onClick={() => scrollToSection(el.id)}
            >
              {el.title}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
