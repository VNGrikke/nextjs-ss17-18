"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
    const pathname = usePathname();
    const pathParts = pathname.split("/").filter((part) => part);

    return (
        <nav aria-label="breadcrumb" className="text-sm text-gray-600">
            <Link href="/" className="text-blue-500 hover:underline">Home</Link>
            {pathParts.map((part, index) => {
                const href = "/" + pathParts.slice(0, index + 1).join("/");
                return (
                    <span key={index}>
                        {" / "}
                        <Link href={href} className="text-blue-500 hover:underline">
                            {part}
                        </Link>
                    </span>
                );
            })}
        </nav>
    );
};


