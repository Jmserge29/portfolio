import {HomeIcon, IdentificationIcon, FolderOpenIcon} from "@heroicons/react/24/solid"

function HeaderLeft() {
  const styleIcon = "size-10 cursor-pointer rounded-xl hover:size-10";
  const navIcons = [
    {
      name: "Home",
      icon: <HomeIcon className={styleIcon}/>,
      url: "",
    },
    {
      name: "projects",
      icon: <FolderOpenIcon className={styleIcon}/>,
      url: "",
    },
    {
      name: "about",
      icon: <IdentificationIcon className={styleIcon}/>,
      url: "",
    },
  ];

  
  return (
    <header className="lg:fixed left-28 sm:left-14 top-1/3 hidden w-full lg:block lg:w-auto">
      <nav className="mx-auto">
        <ul className=" space-y-16 flex-col justify-center content-center">
          {navIcons.map((icon) => {
            return (
              <div className=" text-gray-800 hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  hover:text-white p-3 rounded-3xl hover:scale-110 transition ease-in-out duration-150  ">
                <a href={`#${icon.name}`}>
                {icon.icon}
                </a>
              </div>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}


export default HeaderLeft;

