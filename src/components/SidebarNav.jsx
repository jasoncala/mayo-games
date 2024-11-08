"use client";
import { usePathname } from "next/navigation";

export default function SidebarNav({ categoryMenu }) {
  const activeSegment = usePathname();

  // Define the HomeIcon component
  const HomeIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.75V20.25C3 20.6642 3.3358 21 3.75 21H9.75C10.1642 21 10.5 20.6642 10.5 20.25V15.75C10.5 15.3358 10.8358 15 11.25 15H12.75C13.1642 15 13.5 15.3358 13.5 15.75V20.25C13.5 20.6642 13.8358 21 14.25 21H20.25C20.6642 21 21 20.6642 21 20.25V9.75C21 9.6485 20.9854 9.5496 20.9566 9.4567L12.9566 2.4567C12.7616 2.2618 12.3987 2.2618 12.2038 2.4567L4.2038 9.4567C4.1749 9.5496 4.1601 9.6485 4.1601 9.75Z"
      />
    </svg>
  );

  // Define the CubeIcon component
  const CubeIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7.5L12 2.25L3 7.5M21 7.5V16.5L12 21.75L3 16.5V7.5M21 7.5L12 12.75M3 7.5L12 12.75M12 12.75V21.75"
      />
    </svg>
  );

  // Main menu items with icons
  const mainMenuItems = [
    {
      name: "Home",
      icon: HomeIcon,
      slug: "/",
    },
    {
      name: "New",
      icon: CubeIcon,
      slug: "/new-games",
    },
  ];

  return (
    <>
      <div className="text-accent text-xs mb-2">MENU</div>
      <ul className="bg-muted flex flex-col gap-2 mb-6">
        {mainMenuItems.map((item, i) => {
          // Assign the icon component to a variable starting with an uppercase letter
          const Icon = item.icon;
          return (
            <li key={i}>
              <a
                href={item.slug}
                className={`text-sm tracking-wide flex gap-2 items-center p-1 px-2 ${
                  activeSegment === item.slug
                    ? "active bg-primary rounded-md"
                    : "inactive hover:bg-primary rounded-md"
                }`}
              >
                <Icon className="h-6 w-6 text-accent" />
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="text-accent text-xs mb-2">CATEGORIES</div>
      <ul className="bg-muted flex flex-col gap-2 mb-6">
        {categoryMenu.map((item) => (
          <li key={item.id}>
            <a
              href={`/category/${item.slug}`}
              className={`text-sm tracking-wide flex gap-2 items-center p-1 px-2 ${
                activeSegment === `/category/${item.slug}`
                  ? "active bg-primary rounded-md"
                  : "inactive hover:bg-primary rounded-md"
              }`}
            >
              <div className={`categoryicon ${item.slug}`}></div>
              {item.title}{" "}
              <span className="text-accent">({item?.games?.length})</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
