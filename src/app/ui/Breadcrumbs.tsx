'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs = pathSegments.map((segment, index) => {
        const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
        return { name: segment, url };
    });

    return <div> {breadcrumbs.map((crumb, index) => (
        <span key={index}>
            {' > '}
            <Link href={crumb.url}>{crumb.name}</Link>
        </span>
    ))}</div>;
};

export default Breadcrumbs;
