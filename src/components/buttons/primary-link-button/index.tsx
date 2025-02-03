import Link from "next/link"

interface IPrimaryLinkButtonProps {
    linkText: string,
    linkRef: string
}

export const PrimaryLinkButton: React.FC<IPrimaryLinkButtonProps> = ({ linkText, linkRef }) => {
    return (
        <Link className="font-semibold border-2 border-primary-red text-primary-red rounded-md px-4 py-2 uppercase hover:bg-primary-red hover:text-white transition-all" href={linkRef}>
            {linkText}
        </Link>
    )
}

