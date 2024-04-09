import Link from 'next/link';
import dynamic from 'next/dynamic';
const Breadcrumbs = dynamic(() => import('./Breadcrumbs'), { suspense: false });

const Navbar = () => {  
  return (
    <nav>
      <Link href="/">Home</Link>
      <Breadcrumbs/>
    </nav>
  );
};

export default Navbar;
