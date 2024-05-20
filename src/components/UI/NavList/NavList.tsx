import React, {FC} from 'react';
import styles from "./NavList.module.scss";
import Link from "next/link";

const NavList: FC = () => {
    return (
        <div className={styles.navBlock}>
            <Link className={styles.navItem} href='#'>
                Как мы работаем
            </Link>
            <Link className={styles.navItem} href='#'>
                Наши кухни
            </Link>
            <Link className={styles.navItem} href='#'>
                Отзывы
            </Link>
            <Link className={styles.navItem} href='#'>
                Наша команда

            </Link>
        </div>
    );
};

export default NavList;