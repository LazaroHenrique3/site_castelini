import Link from "next/link";

interface ILinkGroup {
    title: string;
    links: { label: string; url: string }[];
}


export const LinkGroup: React.FC<ILinkGroup> = ({ title, links }) => (
    <ul className="space-y-3">
        <li className="text-center md:text-left">
            <p className="text-lg text-white uppercase font-semibold">{title}</p>
            <div className="h-[3px] w-6 bg-primary-red"></div>
        </li>
        {links.map((link) => (
            <li key={link.label} className="text-center md:text-left">
                <Link
                    href={link.url}
                    className="text-sm text-white uppercase cursor-pointer hover:underline"
                >
                    {link.label}
                </Link>
            </li>
        ))}
    </ul>
);
