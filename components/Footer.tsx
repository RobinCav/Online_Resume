import Image from "next/image";
import Link from "next/link";

function Footer()  {
    return (
       <footer className="self-end h-20 justify-center" >
        <section className=" flex flex-row w-1/10 self-center">
        <p>Created using</p>
        <ul className="flex flex-row bg-green-200 w-1/6 justify-around">
            <li >
            <Link href="/">
            <Image
                src="/CVLK2.png" 
                alt="LinkedIn Logo"
                width={20} 
                height={20} 
                className="cursor-pointer rounded-3xl" 
            />
            </Link>
            </li>

            <li>
            <Link href="/">
            <Image
                src="/CVLK2.png" 
                alt="LinkedIn Logo"
                width={20} 
                height={20} 
                className="cursor-pointer rounded-3xl" 
            />
            </Link>
            </li>

            <li>
            <Link href="/">
            <Image
                src="/CVLK2.png" 
                alt="LinkedIn Logo"
                width={20} 
                height={20} 
                className="cursor-pointer rounded-3xl" 
            />
            </Link>
            </li>
        </ul>
        </section>

        <section>
        <ul>
            <li>
            </li>

            <li>
            </li>

            <li>
            </li>
        </ul>
        </section>
       </footer>
    );
}

export default Footer;