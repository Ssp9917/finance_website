import { Link } from "react-router-dom";
import { FaHouseUser, FaUsers } from "react-icons/fa";
import { IoQrCodeSharp } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";


const menuItems = [
  {
    title: "MENU",
    items: [
      {
        label: "Users",
        href: "/admin",
        icon:<FaHouseUser/>
      },
      {
        label:"Details",
        href:"/admin/details",
        icon:<TbListDetails/>
      },
      {
        label:"Registered Users",
        href:"/admin/users",
        icon:<FaUsers/>
      }
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              to={item.href} // Corrected prop to "to"
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-gray-200"
            >
              {item.icon}
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
