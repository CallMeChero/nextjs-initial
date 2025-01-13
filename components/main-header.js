import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png';
import classes from "./main-header.module.css";

export default function MainHeader() {
    return <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logoImg.src} priority width={50} height={50} alt="plate with food" />
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
}