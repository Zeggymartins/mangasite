import Link from "next/link";
import styles from "./component.module.css"

export default function NavBar(){
    return(
        <div  className={styles.nav}>
            <ul>
                <Link href=''>
                <li>
                    Home
                </li>
                </Link>
                <Link href=''>
                <li>
                    Genres
                </li>
                </Link>
                <Link href=''>
                <li>
                    My library
                </li>
                </Link>
                <Link href=''>
                <li>
                    publish
                </li>
                </Link>
            </ul>
        </div>
    )
}