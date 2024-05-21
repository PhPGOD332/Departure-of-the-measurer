import React, {FC} from 'react';
import styles from "./Logo.module.scss";
import Link from "next/link";

interface LogoProps {
    style?: object;
}

const Logo: FC<LogoProps> = ({style}) => {
    return (
        <Link className={styles.logoBlock} href='/' style={style}>
            <div className={styles.logoImg}>
                <img src="/images/logo.webp" alt="Логотип"/>
            </div>
            {/*<div className={styles.logoText}>*/}
            {/*    <span className={styles.logoTitle}>Твоя кухня</span>*/}
            {/*    <span className={styles.logoSubtext}>Мебельная фабрика</span>*/}
            {/*</div>*/}
        </Link>
    );
};

export default Logo;