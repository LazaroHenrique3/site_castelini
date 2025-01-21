import { usePathname } from 'next/navigation'; 
import Link from "next/link";

export interface INavLink {
  href: string;
  label: string;
}

export const NavLink: React.FC<INavLink> = ({ href, label }) => {
  const pathname = usePathname(); 

  const isActive = pathname === href;

  return (
    <div className="flex flex-col px-2 py-3 group">
      <Link
        href={href}
        className={`text-base font-semibold text-primary-gray uppercase cursor-pointer ${isActive ? 'text-primary-red shadow-md' : ''}`}
      >
        {label}
      </Link>
      <div className="h-[3px] w-6 bg-primary-red transition-all duration-300 group-hover:w-12"></div>
    </div>
  );
};
