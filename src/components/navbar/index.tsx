import Image from 'next/image';
import casteliniLogo from '../../../public/images/logos/castelini-logo.png';

export const Navbar = () => {        
    return (
       <header className='bg-white sticky top-0 z-[20] shadow-lg mx-auto flex w-full items-center justify-between p-2'>
            <div>
                <Image src={casteliniLogo} alt='logo castelini' />
            </div>
       </header>
    );
}



