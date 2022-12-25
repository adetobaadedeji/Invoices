import { useDarkMode } from "hooks/useDarkMode";
import { logo, moon, sun, avatar } from "images";

export const Sidebar = () => {
  const [isdarkMode, toggleMode] = useDarkMode(false);

  return (
    <aside
      className="fixed top-0 left-0 w-full flex justify-between items-center h-20 bg-bgTert dark:bg-bgSec-dark transition-all 
       md:h-screen md:w-auto md:flex-col md:rounded-tr-[1.25rem] md:rounded-br-[1.25rem]"
    >
      <section className="">
        <img src={logo} alt="" className="h-full max-h-20 md:max-h-max" />
      </section>

      <section className="flex items-center justify-center h-full md:h-auto md:flex-col md:w-full">
        <div className="px-6 h-full flex items-center justify-center md:h-auto md:py-6 md:w-full">
          <img
            src={isdarkMode ? sun : moon}
            onClick={toggleMode}
            alt="darktheme icon"
          />
        </div>
        <div className="px-6 h-full flex items-center justify-center border-l border-gray2 md:h-auto md:py-6 md:border-l-0 md:border-t md:w-full">
          <img src={avatar} alt="user" className="h-10 w-10 rounded-full" />
        </div>
      </section>
    </aside>
  );
};
