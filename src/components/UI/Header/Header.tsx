'use client'
import React, {FC, useEffect, useRef, useState} from 'react';
import styles from './Header.module.scss';
import Link from "next/link";
import Logo from "@/components/UI/Logo/Logo";

const Header: FC = () => {
    const [burgerVisible, setBurgerVisible] = useState<boolean>(false);
    const [blurHeader, setBlurHeader] = useState<boolean>(false);
    const burgerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition != 0) {
                setBlurHeader(true);
            } else {
                setBlurHeader(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const documentClick = (e: MouseEvent): void => {
        e.stopPropagation();
        if (e.target !== burgerRef.current) {
            setBurgerVisible(false);
            document.body.classList.remove('overflow');
        }

        document.removeEventListener('click', documentClick);
    }

    const burgerToggle = (): void => {
        if (burgerVisible) {
            setBurgerVisible(false);
            document.body.classList.remove('overflow');
            document.removeEventListener('click', documentClick);
        } else {
            setBurgerVisible(true);
            document.body.classList.add('overflow');
            document.addEventListener('click', documentClick);
        }
    }

    return (
        <header className={`${styles.header} ${blurHeader ? styles.blurHeader : ''}`}>
            <div className={`${styles.navContainer} gridBlock`}>
                <Logo />
                <div className={`${styles.burgerMenuBlock} ${burgerVisible ? styles.active : ''}`} onClick={() => burgerToggle()}>

                </div>
                <div className={`${styles.burgerWrapper} ${burgerVisible ? styles.burgerActive : ''}`} ref={burgerRef}>
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
                    <div className={styles.contactsBlock}>
                        <Link className={styles.profileBlock} href='#'>
                            <img src="/images/person.svg" alt="person account" className={styles.profileImg}/>
                            <span className={styles.profileText}>Кабинет</span>
                        </Link>
                        <Link href='tel:+74959885528' className={styles.phoneBlock}>
                        <svg viewBox="0 0 51 51" className={styles.phoneIcon}>
                                <g filter="url(#filter0_dd_268_686)">
                                    <path
                                        d="M28.3433 31.999C27.9399 31.9873 27.5355 31.9096 27.1362 31.7999C26.5045 31.6261 25.9129 31.3554 25.3356 31.0521C24.7348 30.7367 24.1657 30.3709 23.6239 29.962C23.0171 29.5043 22.452 28.9994 21.9382 28.4401C21.1585 27.5903 20.4774 26.6673 19.9245 25.6539C19.6925 25.2287 19.4962 24.7862 19.3385 24.3281C19.2047 23.9379 19.0898 23.5422 19.0353 23.1323C18.9636 22.5943 18.984 22.065 19.2581 21.5789C19.3477 21.4204 19.4606 21.27 19.5852 21.1375C19.8889 20.8154 20.2053 20.506 20.5176 20.1926C20.7317 19.9778 20.982 19.8254 21.2836 19.77C21.6442 19.704 21.9703 19.8005 22.244 20.0316C22.4993 20.247 22.7368 20.4837 22.9734 20.7199C23.3208 21.0669 23.6636 21.4194 24.0029 21.7745C24.2048 21.9858 24.3213 22.2398 24.3478 22.5334C24.3712 22.7904 24.3055 23.0276 24.1687 23.2395C24.0741 23.3858 23.9597 23.5224 23.8386 23.6484C23.597 23.9003 23.3452 24.1432 23.0954 24.3875C23.0624 24.42 23.0598 24.4454 23.0787 24.4865C23.2831 24.9275 23.5593 25.3222 23.8706 25.6925C24.3198 26.2269 24.8086 26.7221 25.3534 27.16C25.7074 27.4445 26.0808 27.699 26.4958 27.8885C26.5436 27.9103 26.564 27.8905 26.5925 27.8625C26.8799 27.5806 27.1657 27.2977 27.4562 27.0193C27.6245 26.8578 27.8153 26.7262 28.0442 26.6678C28.4358 26.5672 28.798 26.6398 29.1017 26.9076C29.3682 27.1422 29.619 27.3952 29.8713 27.6456C30.1673 27.9392 30.4588 28.2384 30.7502 28.5361C30.8942 28.6834 31.0259 28.8399 31.1093 29.0319C31.2553 29.3677 31.2355 29.6979 31.0839 30.0255C30.9898 30.2287 30.8443 30.3923 30.6892 30.5502C30.4415 30.8022 30.1958 31.0562 29.9511 31.3112C29.5152 31.7663 28.9816 31.9924 28.3412 32L28.3433 31.999ZM19.7403 22.6558C19.7515 22.795 19.7561 22.9347 19.7754 23.0728C19.8212 23.4 19.9067 23.7175 20.016 24.0299C20.2093 24.58 20.4621 25.1027 20.7454 25.6107C21.045 26.1476 21.3996 26.648 21.7857 27.1265C22.157 27.5867 22.5446 28.0307 22.9729 28.4401C23.5792 29.0202 24.2348 29.5384 24.9464 29.9813C25.4241 30.2785 25.921 30.5421 26.4373 30.7692C27.0106 31.0211 27.5991 31.2081 28.2283 31.2553C28.709 31.2914 29.1159 31.1573 29.4394 30.7875C29.5925 30.6127 29.7619 30.4517 29.9252 30.2856C30.0351 30.1738 30.1515 30.0682 30.2573 29.9529C30.3209 29.8833 30.3789 29.8055 30.4247 29.7233C30.4964 29.5947 30.5076 29.4545 30.4369 29.322C30.3947 29.2427 30.3433 29.1645 30.2802 29.1015C29.8021 28.6184 29.3204 28.1384 28.8392 27.6583C28.7761 27.5953 28.7141 27.5313 28.6459 27.475C28.4781 27.3378 28.2827 27.3226 28.0971 27.4348C28.0274 27.477 27.9623 27.5308 27.9038 27.5882C27.6617 27.8255 27.4236 28.0662 27.1835 28.3055C27.1011 28.3878 27.0223 28.4747 26.9333 28.5488C26.7471 28.7038 26.536 28.7424 26.3188 28.625C26.0009 28.4533 25.6804 28.2826 25.3778 28.0861C24.976 27.8255 24.6102 27.5166 24.2643 27.1834C23.8488 26.7831 23.452 26.3676 23.1077 25.9028C22.8172 25.5111 22.5461 25.1088 22.3569 24.6567C22.3121 24.5495 22.2841 24.4403 22.2918 24.324C22.303 24.1482 22.4072 24.0253 22.5268 23.91C22.8025 23.6438 23.0771 23.3766 23.3508 23.1084C23.4022 23.0581 23.4515 23.0048 23.4953 22.9484C23.6636 22.731 23.6646 22.5085 23.4937 22.2926C23.4352 22.2184 23.3625 22.156 23.2959 22.0884C22.8457 21.6343 22.3955 21.1801 21.9444 20.7265C21.8935 20.6757 21.8406 20.6254 21.7826 20.5843C21.6295 20.4751 21.4581 20.4527 21.2897 20.532C21.1905 20.5782 21.0995 20.6513 21.0201 20.728C20.7373 21.0023 20.4586 21.2807 20.1834 21.5626C20.0908 21.6576 20.0033 21.7607 19.9311 21.871C19.7754 22.1082 19.7409 22.3779 19.7398 22.6558H19.7403Z"></path>
                                    <path
                                        d="M32 24.8015C31.999 24.9727 31.8703 25.1129 31.6902 25.1479C31.5381 25.1774 31.3591 25.0809 31.3021 24.9264C31.267 24.832 31.2457 24.7319 31.2268 24.6323C31.1424 24.1873 30.9827 23.7683 30.8082 23.3527C30.5747 22.797 30.2528 22.2972 29.858 21.8456C29.56 21.5047 29.2354 21.1888 28.8702 20.9155C28.4821 20.6249 28.0737 20.3719 27.6301 20.1774C27.1754 19.9778 26.7054 19.8264 26.2145 19.7421C26.1565 19.7319 26.098 19.7161 26.0451 19.6918C25.8926 19.6217 25.8107 19.4652 25.8371 19.3077C25.8666 19.1345 25.9861 19.0111 26.1596 19.0009C26.2481 18.9953 26.3407 19.0162 26.4287 19.0375C26.6957 19.102 26.9653 19.1594 27.2257 19.2447C27.5004 19.3347 27.7685 19.4469 28.034 19.5617C28.5386 19.7796 28.9923 20.0814 29.4226 20.4207C29.7797 20.7026 30.1098 21.0115 30.4028 21.3584C30.7807 21.8065 31.1109 22.288 31.3657 22.8163C31.4959 23.0861 31.617 23.3619 31.7157 23.6448C31.8423 24.0075 31.9293 24.3829 31.9964 24.7619C31.9995 24.7786 31.999 24.7954 31.9995 24.802L32 24.8015Z"></path>
                                    <path
                                        d="M26.1291 21.3554C26.2155 21.3737 26.3361 21.395 26.4551 21.425C26.9968 21.5616 27.4923 21.7943 27.9465 22.1204C28.2222 22.318 28.4674 22.5486 28.6846 22.8051C29.1764 23.3863 29.4913 24.0553 29.6317 24.8045C29.6759 25.0392 29.561 25.217 29.3412 25.2592C29.1724 25.2917 28.9923 25.1901 28.9364 25.0174C28.8967 24.8955 28.8789 24.7664 28.8423 24.643C28.4704 23.3883 27.6591 22.5618 26.4088 22.1697C26.274 22.1275 26.1316 22.1113 25.9948 22.0767C25.8132 22.031 25.7069 21.8639 25.7323 21.6749C25.7567 21.4961 25.919 21.3523 26.1296 21.3549L26.1291 21.3554Z"></path>
                                </g>
                                <defs>
                                    <filter id="filter0_dd_268_686" x="0" y="0" width="51" height="51"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                       result="hardAlpha"></feColorMatrix>
                                        <feOffset></feOffset>
                                        <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                                        <feColorMatrix type="matrix"
                                                       values="0 0 0 0 0.95 0 0 0 0 0.547485 0 0 0 0 0.419583 0 0 0 1 0"></feColorMatrix>
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                                 result="effect1_dropShadow_268_686"></feBlend>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                       result="hardAlpha"></feColorMatrix>
                                        <feOffset></feOffset>
                                        <feGaussianBlur stdDeviation="9.5"></feGaussianBlur>
                                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                                        <feColorMatrix type="matrix"
                                                       values="0 0 0 0 0.95 0 0 0 0 0.547485 0 0 0 0 0.419583 0 0 0 1 0"></feColorMatrix>
                                        <feBlend mode="normal" in2="effect1_dropShadow_268_686"
                                                 result="effect2_dropShadow_268_686"></feBlend>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_268_686"
                                                 result="shape"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                            <span className={styles.phoneText}>+7 (495) 988-55-28</span>
                        </Link>
                        <div className={styles.socialBlock}>
                            <Link className={styles.socialItem} target='_blank' href='https://t.me/LevitinTvoyaKuhnya'>
                                <svg width='36px' height='36px' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_3442_269)">
                                        <path
                                            d="M23.7678 18.4623C23.7692 18.4469 23.7706 18.4321 23.7713 18.4166C23.7713 18.4088 23.7713 18.4011 23.7721 18.394C23.7918 18.1053 23.7932 17.8159 23.7636 17.5272C23.7594 17.4892 23.7446 17.449 23.7453 17.4173C23.7481 17.3244 23.7333 17.2364 23.7192 17.1462C23.698 17.0082 23.667 16.873 23.6409 16.7364C23.6085 16.5653 23.5437 16.4026 23.5155 16.2294C23.5049 16.1646 23.4767 16.0935 23.4478 16.0308C23.3703 15.8632 23.3125 15.6871 23.2307 15.5217C23.1539 15.3653 23.0764 15.2097 22.9911 15.059C22.8198 14.7576 22.6196 14.4752 22.3933 14.2126C22.1121 13.8865 21.8034 13.5901 21.4523 13.3387C21.3692 13.2788 21.286 13.2183 21.2007 13.1605C20.8039 12.8936 20.381 12.6767 19.9312 12.5148C19.3751 12.3148 18.7999 12.2042 18.2107 12.1711C17.9513 12.1564 17.6912 12.1655 17.4325 12.193C17.1576 12.2218 16.8848 12.2648 16.6142 12.3261C16.2695 12.4042 15.934 12.5155 15.6118 12.6563C15.4201 12.7401 15.2228 12.8218 15.0494 12.945C15.0296 12.9591 15.0092 12.9725 14.9873 12.9845C14.8302 13.0676 14.6885 13.176 14.5383 13.2704C14.4615 13.3183 14.4044 13.3894 14.3226 13.4316C14.2825 13.4528 14.25 13.4901 14.2127 13.5183C14.1626 13.5563 14.1246 13.6098 14.0731 13.6457C14.0097 13.6901 13.9533 13.7415 13.8997 13.7957C13.7806 13.9182 13.6587 14.0372 13.5508 14.1717C13.4155 14.34 13.278 14.5069 13.1554 14.6851C12.9129 15.0351 12.7085 15.4055 12.5492 15.8005C12.392 16.1899 12.2743 16.5899 12.2052 17.0047C12.1644 17.2476 12.1333 17.4906 12.1242 17.737C12.115 17.9715 12.1023 18.206 12.1397 18.4391C12.1432 18.5511 12.158 18.6616 12.1728 18.7722C12.2405 19.2729 12.3667 19.7573 12.5626 20.2235C12.6958 20.5404 12.8537 20.8453 13.0412 21.1333C13.1913 21.3636 13.3401 21.5946 13.5262 21.7974C13.665 21.9495 13.8095 22.0967 13.9575 22.2403C14.0633 22.3431 14.1669 22.4502 14.2839 22.5389C14.4108 22.6347 14.5362 22.7325 14.6701 22.8213C14.7998 22.9072 14.9288 22.9924 15.0649 23.0684C15.4955 23.3093 15.9474 23.4994 16.4246 23.6254C16.832 23.7332 17.2457 23.8029 17.6672 23.8205C17.6813 23.8395 17.6961 23.8388 17.7116 23.8219C18.045 23.824 18.3777 23.8247 18.7097 23.779C19.0678 23.7297 19.4188 23.6536 19.7621 23.5424C20.3394 23.3557 20.8722 23.0818 21.3649 22.7276C21.5722 22.5783 21.7667 22.4128 21.9542 22.2403C22.0994 22.1065 22.2214 21.9516 22.3532 21.8051C22.5082 21.6326 22.6506 21.4516 22.7845 21.2643C22.953 21.0291 23.0912 20.7756 23.2173 20.5158C23.2751 20.396 23.3273 20.2735 23.3766 20.1503C23.4619 19.939 23.5338 19.7235 23.5923 19.5038C23.6839 19.1616 23.7432 18.8144 23.7692 18.4609L23.7678 18.4623Z"
                                            fill="#F8F9FB"/>
                                        <path
                                            d="M26.9658 17.2715C26.9594 17.213 26.9362 17.1511 26.9376 17.1025C26.9425 16.9595 26.9192 16.8236 26.8974 16.6842C26.865 16.4715 26.817 16.2631 26.7769 16.0525C26.7261 15.7885 26.6274 15.5378 26.5837 15.2709C26.5675 15.1716 26.5238 15.061 26.4787 14.9639C26.3596 14.7054 26.2694 14.4343 26.1439 14.178C26.0255 13.9372 25.9064 13.697 25.7738 13.4646C25.5095 12.9999 25.2015 12.564 24.8519 12.1591C24.4177 11.6563 23.9419 11.1993 23.4006 10.8113C23.2716 10.719 23.144 10.6254 23.0129 10.5366C22.4011 10.1247 21.7491 9.7909 21.0555 9.54091C20.1984 9.23178 19.3102 9.06277 18.4017 9.01066C18.002 8.98813 17.6009 9.00221 17.202 9.04446C16.7777 9.08883 16.3569 9.15572 15.9403 9.25008C15.4088 9.3705 14.8915 9.54303 14.3945 9.75992C14.0992 9.88878 13.7947 10.0148 13.5275 10.205C13.4965 10.2268 13.4655 10.2479 13.4317 10.2655C13.1885 10.3937 12.9707 10.5606 12.7395 10.707C12.6218 10.7817 12.533 10.8908 12.4075 10.9563C12.3455 10.9887 12.2954 11.0465 12.2376 11.0894C12.1601 11.1479 12.1016 11.231 12.0227 11.2859C11.9247 11.3542 11.8373 11.4331 11.7555 11.5169C11.5715 11.7056 11.3833 11.8901 11.217 12.0971C11.0084 12.357 10.7962 12.6147 10.6066 12.8886C10.233 13.428 9.91793 13.9998 9.67123 14.6089C9.42876 15.2089 9.24761 15.8265 9.14047 16.4652C9.07773 16.8391 9.0298 17.2151 9.015 17.5947C9.0009 17.9559 8.98117 18.3172 9.03897 18.677C9.04461 18.8496 9.06716 19.02 9.08972 19.1911C9.19404 19.9629 9.38858 20.7107 9.69097 21.4297C9.89679 21.9184 10.1393 22.3881 10.4297 22.8331C10.6609 23.1881 10.8906 23.5444 11.1775 23.8577C11.3925 24.0915 11.6145 24.319 11.8429 24.5408C12.0064 24.6999 12.1657 24.8647 12.3462 25.0013C12.5421 25.1492 12.736 25.3006 12.9411 25.4365C13.1413 25.5689 13.3408 25.7006 13.5494 25.8175C14.2134 26.1886 14.9098 26.4822 15.6464 26.6773C16.2744 26.8435 16.9123 26.9505 17.5629 26.978C17.5847 27.0076 17.6073 27.0062 17.6313 26.9808C18.1451 26.9843 18.6582 26.985 19.17 26.9146C19.7219 26.8386 20.2632 26.721 20.7926 26.5498C21.6828 26.2625 22.5047 25.8393 23.2638 25.2936C23.5838 25.0633 23.8827 24.8084 24.1724 24.5415C24.3958 24.3352 24.5847 24.0965 24.787 23.8704C25.026 23.6049 25.2459 23.3254 25.4524 23.036C25.7118 22.6733 25.9247 22.2825 26.1192 21.8818C26.2087 21.6973 26.2884 21.5086 26.3652 21.3177C26.4963 20.9924 26.6077 20.66 26.6979 20.3213C26.8389 19.7939 26.9305 19.2573 26.9707 18.7129C26.9728 18.6897 26.9749 18.6665 26.9763 18.6425C26.9763 18.6306 26.977 18.6193 26.9777 18.6073C27.0081 18.1616 27.0109 17.7158 26.9644 17.2708L26.9658 17.2715ZM16.2518 18.6862C16.2561 18.6841 16.2603 18.682 16.2631 18.6799C16.2596 18.682 16.2561 18.6841 16.2518 18.6862ZM16.2779 18.651C16.2793 18.6369 16.2779 18.6214 16.2779 18.6073C16.2779 18.6214 16.28 18.6369 16.2779 18.651ZM16.2652 18.677C16.2652 18.677 16.2695 18.6735 16.2709 18.6714C16.2695 18.6735 16.2673 18.6749 16.2652 18.677ZM16.2723 18.6672C16.2723 18.6672 16.2744 18.6637 16.2751 18.6615C16.2751 18.6637 16.273 18.6651 16.2723 18.6672ZM16.2758 18.6587C16.2758 18.6587 16.2772 18.6538 16.2772 18.6517C16.2772 18.6545 16.2765 18.6566 16.2758 18.6587ZM22.1191 15.6209C22.043 16.1842 21.9655 16.7483 21.8823 17.3109C21.8203 17.7327 21.7477 18.1524 21.6807 18.5735C21.6779 18.5904 21.6779 18.608 21.6765 18.6256C21.6053 19.0397 21.5376 19.4552 21.4629 19.8685C21.3445 20.5199 21.2543 21.1769 21.0943 21.8205C21.0477 22.0085 20.9653 22.1839 20.8342 22.3311C20.7439 22.4318 20.629 22.5001 20.4951 22.5022C20.3408 22.5043 20.1878 22.4754 20.044 22.4099C19.8086 22.3022 19.5929 22.1635 19.3793 22.0191C18.7351 21.5825 18.0894 21.148 17.4466 20.71C17.2654 20.5868 17.0906 20.4544 16.9144 20.3234C16.8411 20.2692 16.7791 20.203 16.7269 20.1277C16.6275 19.9861 16.6205 19.8404 16.7121 19.6932C16.7523 19.6291 16.7988 19.5685 16.8425 19.5066C17.1992 19.1601 17.5509 18.8087 17.9139 18.4693C18.2917 18.1165 18.6843 17.7799 19.0403 17.4039C19.2517 17.1806 19.4808 16.975 19.6838 16.744C19.7148 16.7088 19.7458 16.6736 19.7621 16.6286C19.7987 16.5279 19.7395 16.4441 19.6338 16.4462C19.5696 16.4476 19.5139 16.4722 19.4618 16.5053C19.3257 16.5912 19.1897 16.6771 19.0544 16.7645C18.365 17.2123 17.6785 17.6644 16.9997 18.1285C16.7791 18.2792 16.5535 18.4242 16.3301 18.5714C16.3181 18.5792 16.3061 18.5869 16.2948 18.5946C16.2836 18.5904 16.2793 18.5975 16.2765 18.6066C16.2589 18.6228 16.2413 18.639 16.2236 18.6545L16.1362 18.7017C16.125 18.6953 16.1221 18.7045 16.1193 18.7122C16.108 18.7242 16.0961 18.7355 16.0848 18.7475L16.046 18.7721C16.0411 18.7756 16.0369 18.7798 16.0319 18.7834C16.0249 18.7883 16.0178 18.7932 16.0101 18.7989C15.9882 18.8129 15.9664 18.827 15.9445 18.8411C15.9445 18.8446 15.9459 18.8482 15.9466 18.8517C15.9487 18.8587 15.9509 18.8658 15.9523 18.8728C15.9509 18.8658 15.948 18.8587 15.9466 18.8517C15.9459 18.8482 15.9445 18.8446 15.9445 18.8411C15.8839 18.8552 15.843 18.8981 15.7993 18.9383C15.7563 18.951 15.7281 18.9932 15.6802 18.9974C15.6689 18.9974 15.652 18.9925 15.6464 18.9981C15.5512 19.0911 15.4271 19.1341 15.3108 19.1904C15.2996 19.1862 15.2953 19.1932 15.2925 19.2024C15.2869 19.2052 15.2819 19.208 15.2763 19.2101C15.1628 19.2355 15.0571 19.284 14.9429 19.3094C14.7561 19.3502 14.5778 19.3094 14.4002 19.27C13.8539 19.1488 13.321 18.9798 12.7973 18.7834C12.6958 18.7453 12.5978 18.6989 12.5097 18.6348C12.5048 18.6348 12.4984 18.6355 12.4921 18.6362C12.4984 18.6362 12.5041 18.6348 12.5097 18.6348C12.3673 18.4665 12.3758 18.344 12.5428 18.2003C12.7254 18.0433 12.9474 17.9588 13.1659 17.8693C13.419 17.7658 13.6657 17.6489 13.9152 17.5391C14.2148 17.4074 14.5179 17.2813 14.8188 17.1511C15.1847 16.9926 15.5505 16.8328 15.9163 16.6743C16.1729 16.5638 16.4302 16.4546 16.6867 16.3448C16.9722 16.2222 17.2563 16.0976 17.5424 15.9765C17.8307 15.8547 18.1233 15.7406 18.4094 15.6152C18.8373 15.4279 19.2743 15.2645 19.7043 15.0829C20.1378 14.8998 20.5776 14.7308 21.0209 14.5744C21.2416 14.497 21.4671 14.4209 21.7089 14.4266C22.0169 14.4336 22.1494 14.6195 22.1635 14.8779C22.1769 15.1265 22.1501 15.3744 22.117 15.6202L22.1191 15.6209Z"
                                            fill="url(#paint0_radial_3442_269)"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_3442_269" x="0" y="0" width="36" height="36"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                           result="hardAlpha"/>
                                            <feOffset/>
                                            <feGaussianBlur stdDeviation="4.5"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix"
                                                           values="0 0 0 0 0.168627 0 0 0 0 0.615686 0 0 0 0 0.854902 0 0 0 0.33 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                     result="effect1_dropShadow_3442_269"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3442_269"
                                                     result="shape"/>
                                        </filter>
                                        <radialGradient id="paint0_radial_3442_269" cx="0" cy="0" r="1"
                                                        gradientUnits="userSpaceOnUse"
                                                        gradientTransform="translate(24.3015 11.7007) rotate(133.64) scale(17.8243 17.8245)">
                                            <stop stopColor="#33A5DF"/>
                                            <stop offset="1" stopColor="#0D7EC4"/>
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </Link>
                            <Link className={styles.socialItem} target='_blank' href='https://wa.me/79804160380'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.00235404 8.91785C-0.0138628 8.48215 0.0566451 8.03517 0.123628 7.58818C0.253362 6.72453 0.517061 5.90178 0.895688 5.11568C1.01555 4.8661 1.15304 4.62569 1.29406 4.38669C1.59019 3.88401 1.93568 3.4194 2.31995 2.98229C2.66402 2.591 3.04688 2.24061 3.45583 1.91771C3.67299 1.74569 3.8965 1.58001 4.13341 1.4383C4.37102 1.29588 4.60722 1.15135 4.85541 1.02445C5.20019 0.848901 5.55061 0.683927 5.91373 0.556318C6.2853 0.425889 6.66182 0.307446 7.04961 0.227779C7.30837 0.174198 7.56855 0.131191 7.82942 0.0888902C8.08466 0.0472941 8.34272 0.0324886 8.60078 0.0155681C8.77282 0.00428782 8.94556 -0.00487727 9.1169 0.00287795C9.41021 0.0169783 9.70282 0.0360139 9.99543 0.0670347C10.6857 0.140357 11.3541 0.301806 12.0084 0.528822C12.2834 0.624705 12.5513 0.738213 12.815 0.862297C13.1824 1.03432 13.5307 1.23948 13.8776 1.44887C13.9749 1.50739 14.0806 1.56943 14.166 1.635C14.2908 1.73159 14.4177 1.82888 14.5432 1.92617C14.7533 2.08974 14.95 2.26881 15.1524 2.44084C15.3441 2.60369 15.5204 2.78488 15.6748 2.98864C15.7566 3.0965 15.8581 3.19309 15.9449 3.29884C16.3588 3.80575 16.719 4.34791 17.0173 4.93167C17.1999 5.28911 17.3529 5.65854 17.4862 6.03644C17.63 6.44394 17.7463 6.86131 17.8232 7.28643C17.8676 7.53037 17.9092 7.77501 17.9339 8.02318C17.9558 8.24174 17.9727 8.46029 17.9868 8.67955C17.9974 8.8403 18.0016 9.00034 17.9995 9.16038C17.9966 9.38316 17.9656 9.60454 17.9508 9.82662C17.9191 10.3096 17.826 10.7805 17.7062 11.2472C17.4622 12.1927 17.0681 13.0711 16.54 13.8925C16.1917 14.4339 15.7982 14.9366 15.3399 15.3878C15.0529 15.6698 14.7568 15.942 14.429 16.176C14.2315 16.317 14.0334 16.4573 13.8254 16.5821C13.6033 16.7154 13.377 16.843 13.1471 16.9649C12.5598 17.2766 11.9457 17.5149 11.3055 17.6897C10.9268 17.7933 10.5412 17.861 10.1541 17.9217C9.56533 18.014 8.97306 18.0112 8.3808 17.9781C7.58547 17.9329 6.81834 17.7489 6.06673 17.4909C5.63452 17.3421 5.21711 17.1602 4.8124 16.9473C4.5762 16.8232 4.33929 16.6984 4.12001 16.544C4.07277 16.5109 4.02482 16.501 3.96912 16.5208C3.82458 16.5722 3.67934 16.6223 3.53338 16.6695C2.95804 16.8543 2.38199 17.0376 1.80594 17.2216C1.44353 17.3372 1.08042 17.4521 0.718008 17.5684C0.69192 17.5769 0.658077 17.5818 0.645385 17.5621C0.627053 17.5332 0.633399 17.4972 0.646796 17.462C0.696151 17.3294 0.745507 17.1976 0.787811 17.0629C0.851268 16.8627 0.9112 16.6618 0.977477 16.463C1.03952 16.2747 1.10369 16.0858 1.16996 15.8982C1.20099 15.8101 1.24611 15.7206 1.25387 15.6177C1.2588 15.5556 1.3138 15.4851 1.33777 15.4174C1.46187 15.0677 1.57609 14.7145 1.69736 14.3634C1.72345 14.2873 1.7023 14.233 1.65858 14.1709C1.22919 13.5597 0.876651 12.9076 0.609426 12.2103C0.452899 11.8014 0.325985 11.3826 0.23221 10.9532C0.156061 10.605 0.106706 10.2539 0.0580552 9.90135C0.0136353 9.58057 0.00235406 9.25837 0.00446929 8.91644L0.00235404 8.91785ZM4.02553 5.36032C3.94515 5.47383 3.92893 5.61201 3.89509 5.74033C3.83304 5.97369 3.7858 6.21198 3.78228 6.45592C3.77875 6.6632 3.76888 6.87118 3.80343 7.07775C3.90426 7.68407 4.14469 8.2368 4.44928 8.76416C4.61638 9.05321 4.81381 9.32183 5.00841 9.59326C5.24602 9.92532 5.49139 10.251 5.7572 10.5598C5.88905 10.7135 6.01949 10.8693 6.16051 11.0146C6.37344 11.2324 6.59483 11.4418 6.81341 11.6547C7.11307 11.9466 7.44375 12.2018 7.78007 12.4458C8.01698 12.6178 8.26446 12.7778 8.52393 12.9174C8.78692 13.0591 9.05132 13.1973 9.3256 13.3129C9.62244 13.4384 9.92844 13.5428 10.2288 13.6577C10.4453 13.7409 10.6667 13.8086 10.8881 13.8734C11.0502 13.9214 11.2209 13.951 11.3894 13.9827C11.7179 14.0433 12.0486 14.0631 12.3751 13.9975C12.9504 13.8819 13.4644 13.6373 13.8825 13.2135C14.0221 13.0718 14.1568 12.9266 14.2259 12.7334C14.3486 12.3901 14.4325 12.0418 14.4191 11.6724C14.4127 11.5003 14.3465 11.3868 14.1928 11.3114C13.7366 11.0858 13.2825 10.8567 12.8284 10.6261C12.5908 10.5056 12.344 10.4069 12.0951 10.3124C11.9309 10.2496 11.7673 10.2348 11.6171 10.3526C11.6044 10.354 11.5875 10.3448 11.5847 10.3674C11.5043 10.4484 11.4324 10.5359 11.3626 10.6268C11.1757 10.87 11.0002 11.1224 10.7971 11.3537C10.6582 11.5123 10.4932 11.5892 10.2824 11.5617C10.1943 11.5504 10.1132 11.5166 10.0314 11.4848C9.69859 11.3551 9.38271 11.1901 9.07177 11.0167C9.06543 11.0125 9.05838 11.0082 9.05203 11.004C9.04639 11.0012 9.04145 10.9984 9.03581 10.9955C9.01607 10.973 8.99069 10.9589 8.96319 10.949C8.55142 10.6698 8.1446 10.3836 7.78783 10.0332L7.75116 9.99724C7.67854 9.91404 7.60521 9.83085 7.53259 9.74766C7.2844 9.46283 7.05031 9.16743 6.83386 8.85722C6.82892 8.85087 6.82398 8.84453 6.81905 8.83748C6.7852 8.7839 6.74854 8.73172 6.71681 8.67744C6.64207 8.54842 6.55535 8.42857 6.49542 8.28968C6.43619 8.15361 6.48978 8.04856 6.56522 7.9562C6.70482 7.78559 6.85712 7.62484 7.0073 7.46339C7.15043 7.30899 7.26677 7.13697 7.34292 6.94168C7.39016 6.82112 7.37394 6.69422 7.32459 6.57436C7.1871 6.2423 7.05172 5.90883 6.9093 5.57888C6.74502 5.19817 6.61105 4.80406 6.41504 4.43675C6.34876 4.31266 6.26909 4.20197 6.12314 4.16672C6.0343 4.14557 5.93982 4.135 5.85027 4.13429C5.6874 4.13288 5.52453 4.11173 5.36024 4.14205C5.12898 4.18435 4.91181 4.25344 4.73695 4.41559C4.50287 4.63345 4.29134 4.87104 4.12988 5.14952C4.1052 5.16574 4.09463 5.19041 4.08969 5.21861C4.08546 5.22566 4.08193 5.23342 4.0777 5.24047C4.06219 5.24611 4.06642 5.26021 4.06431 5.27149C4.04739 5.27854 4.04809 5.29334 4.04739 5.30744C4.04457 5.31308 4.04245 5.31872 4.03963 5.32437L4.03681 5.3286L4.03963 5.33283C4.03399 5.34129 4.02835 5.35045 4.02271 5.35891L4.02553 5.36032Z"
                                        fill="#4BAF4F"/>
                                    <path
                                        d="M8.97994 0.000146541C9.02577 0.000146541 9.07089 0.00085146 9.11672 0.00367154C9.41004 0.0177719 9.70264 0.0368074 9.99525 0.0678283C10.6855 0.14115 11.3539 0.3026 12.0082 0.529616C12.2832 0.625499 12.5512 0.739007 12.8149 0.86309C13.1822 1.03512 13.5305 1.24028 13.8774 1.44967C13.9747 1.50818 14.0805 1.57022 14.1658 1.63579C14.2906 1.73238 14.4175 1.82967 14.543 1.92696C14.7531 2.09053 14.9498 2.2696 15.1522 2.44163C15.344 2.60449 15.5202 2.78568 15.6747 2.98943C15.7564 3.0973 15.858 3.19389 15.9447 3.29964C16.3586 3.80655 16.7189 4.34871 17.0171 4.93246C17.1997 5.28991 17.3527 5.65934 17.486 6.03723C17.6298 6.44473 17.7462 6.8621 17.823 7.28723C17.8674 7.53117 17.909 7.77581 17.9337 8.02397C17.9556 8.24253 17.9725 8.46109 17.9866 8.68035C17.9972 8.84109 18.0014 9.00113 17.9993 9.16117C17.9965 9.38396 17.9655 9.60533 17.9506 9.82741C17.9189 10.3104 17.8258 10.7813 17.706 11.248C17.462 12.1935 17.0679 13.0719 16.5398 13.8933C16.1915 14.4347 15.798 14.9374 15.3397 15.3886C15.0528 15.6706 14.7566 15.9428 14.4288 16.1768C14.2314 16.3178 14.0332 16.4581 13.8252 16.5829C13.6031 16.7162 13.3768 16.8438 13.1469 16.9657C12.5596 17.2774 11.9455 17.5157 11.3053 17.6905C10.9267 17.7941 10.541 17.8618 10.1539 17.9224C9.79289 17.9788 9.42978 18 9.06666 18C8.83822 18 8.60907 17.9915 8.38062 17.9789C7.58529 17.9337 6.81817 17.7497 6.06656 17.4917C5.63434 17.3429 5.21694 17.161 4.81222 16.9481C4.57602 16.824 4.33911 16.6992 4.11984 16.5448C4.08881 16.523 4.05779 16.5117 4.02465 16.5117C4.00702 16.5117 3.98799 16.5152 3.96895 16.5223C3.82441 16.5737 3.67916 16.6238 3.53321 16.671C2.95787 16.8558 2.38182 17.0391 1.80577 17.2231C1.44336 17.3387 1.08024 17.4536 0.717834 17.5699C0.705143 17.5742 0.690336 17.5777 0.677645 17.5777C0.664953 17.5777 0.652262 17.5742 0.645211 17.5636C0.626879 17.5347 0.633225 17.4987 0.646621 17.4635C0.695977 17.3309 0.745332 17.1991 0.788342 17.0644C0.851799 16.8642 0.91173 16.6633 0.978008 16.4645C1.04005 16.2762 1.10422 16.0873 1.17049 15.8997C1.20152 15.8116 1.24664 15.7221 1.2544 15.6191C1.25933 15.5571 1.31433 15.4866 1.3383 15.4189C1.4624 15.0692 1.57662 14.716 1.69789 14.3649C1.72398 14.2888 1.70283 14.2345 1.65911 14.1724C1.22972 13.5612 0.877182 12.9091 0.609957 12.2118C0.45343 11.8029 0.326516 11.3841 0.23274 10.9547C0.156592 10.6065 0.107236 10.2554 0.058586 9.90285C0.0141661 9.58207 0.00288484 9.25987 0.00500008 8.91794C-0.0112167 8.48224 0.0592912 8.03525 0.126274 7.58827C0.255303 6.72462 0.519707 5.90187 0.898334 5.11577C1.0182 4.86619 1.15569 4.62578 1.2967 4.38678C1.59284 3.8841 1.93832 3.41949 2.32259 2.98238C2.66667 2.59109 3.04953 2.2407 3.45847 1.9178C3.67564 1.74577 3.89915 1.5801 4.13605 1.43839C4.37366 1.29597 4.60986 1.15144 4.85805 1.02454C5.20284 0.84899 5.55255 0.684015 5.91637 0.556407C6.28795 0.425978 6.66446 0.307535 7.05225 0.227868C7.31102 0.174286 7.57119 0.13128 7.83207 0.088979C8.08731 0.0473828 8.34537 0.0325774 8.60343 0.0156569C8.73034 0.00719666 8.85655 0.000146541 8.98276 0.000146541M11.9533 14.0392C12.0957 14.0392 12.2381 14.0265 12.3798 13.9983C12.9552 13.8827 13.4692 13.638 13.8873 13.2143C14.0269 13.0726 14.1616 12.9274 14.2307 12.7342C14.3533 12.3909 14.4372 12.0426 14.4238 11.6732C14.4175 11.5011 14.3512 11.3876 14.1975 11.3122C13.7413 11.0866 13.2873 10.8574 12.8332 10.6269C12.5956 10.5063 12.3488 10.4076 12.0999 10.3132C12.0238 10.2843 11.9476 10.2652 11.8729 10.2652C11.7869 10.2652 11.7022 10.2899 11.6219 10.3534H11.619C11.6148 10.3534 11.6099 10.3527 11.6049 10.3527C11.5972 10.3527 11.5908 10.3548 11.5894 10.3682C11.5091 10.4492 11.4371 10.5367 11.3673 10.6276C11.1805 10.8708 11.0049 11.1232 10.8019 11.3545C10.6813 11.492 10.541 11.5681 10.3689 11.5681C10.3429 11.5681 10.3154 11.566 10.2872 11.5625C10.199 11.5512 10.1179 11.5173 10.0361 11.4856C9.70335 11.3559 9.38747 11.1909 9.07653 11.0175C9.07019 11.0133 9.06314 11.009 9.05679 11.0048C9.05115 11.002 9.04622 10.9992 9.04058 10.9963C9.02083 10.9738 8.99545 10.9597 8.96795 10.9498C8.55619 10.6706 8.14936 10.3844 7.79259 10.034C7.7806 10.022 7.76791 10.01 7.75592 9.99803C7.6833 9.91483 7.60997 9.83164 7.53735 9.74845C7.28916 9.46362 7.05508 9.16822 6.83862 8.85801C6.83368 8.85167 6.82875 8.84532 6.82381 8.83827C6.78997 8.78469 6.7533 8.73252 6.72157 8.67823C6.64754 8.54921 6.56011 8.42936 6.50018 8.29047C6.44095 8.1544 6.49454 8.04935 6.56998 7.957C6.70959 7.78638 6.86188 7.62564 7.01207 7.46419C7.1552 7.30979 7.27153 7.13776 7.34768 6.94247C7.39492 6.82192 7.37871 6.69501 7.32935 6.57516C7.19186 6.24309 7.05649 5.90962 6.91406 5.57967C6.74978 5.19896 6.61581 4.80485 6.4198 4.43754C6.35352 4.31346 6.27385 4.20277 6.1279 4.16752C6.03906 4.14637 5.94458 4.13579 5.85503 4.13509C5.75985 4.13438 5.66396 4.12663 5.56807 4.12663C5.50038 4.12663 5.43269 4.13015 5.365 4.14284C5.13374 4.18514 4.91657 4.25423 4.74171 4.41639C4.50763 4.63424 4.2961 4.87183 4.13464 5.15031C4.10996 5.16653 4.09939 5.19121 4.09445 5.21941C4.09022 5.22646 4.0867 5.23421 4.08247 5.24126C4.06695 5.2469 4.07119 5.261 4.06907 5.27228C4.05215 5.27933 4.05285 5.29414 4.05215 5.30824C4.04933 5.31388 4.04721 5.31952 4.04439 5.32516L4.04157 5.32939L4.04439 5.33362C4.03875 5.34208 4.03311 5.35124 4.02747 5.3597C3.94709 5.47321 3.93087 5.6114 3.89703 5.73971C3.83498 5.97307 3.78774 6.21137 3.78422 6.45531C3.78069 6.66258 3.77082 6.87056 3.80537 7.07713C3.9062 7.68345 4.14663 8.23618 4.45122 8.76354C4.61833 9.0526 4.81575 9.32121 5.01035 9.59264C5.24796 9.92471 5.49333 10.2504 5.75914 10.5599C5.89099 10.7136 6.02143 10.8694 6.16245 11.0147C6.37538 11.2325 6.59677 11.4419 6.81535 11.6548C7.11501 11.9467 7.44569 12.2019 7.78201 12.4459C8.01892 12.6172 8.2664 12.7779 8.52587 12.9175C8.78886 13.0592 9.05327 13.1974 9.32754 13.313C9.62438 13.4385 9.93038 13.5429 10.2307 13.6578C10.4472 13.741 10.6686 13.8087 10.89 13.8735C11.0522 13.9215 11.2228 13.9511 11.3913 13.9828C11.5774 14.0173 11.7643 14.0385 11.9504 14.0385M5.40449 6.48421L5.44961 6.46588L5.47782 6.34885C5.51518 6.43627 5.55185 6.5244 5.58851 6.61323C5.52858 6.6795 5.46724 6.74859 5.40519 6.82051C5.40519 6.81698 5.40378 6.81416 5.40378 6.81064C5.39885 6.77327 5.40096 6.65624 5.40308 6.57093C5.40308 6.54202 5.40449 6.51312 5.40449 6.48421ZM12.0287 12.4134C12.1063 12.3246 12.1789 12.2365 12.2473 12.1497C12.3255 12.1892 12.4017 12.228 12.4764 12.2661C12.3728 12.3218 12.2374 12.3732 12.059 12.4085C12.0498 12.4106 12.0393 12.412 12.0287 12.4134Z"
                                        fill="#4BB854"/>
                                    <path
                                        d="M7.79065 10.0346C8.14741 10.385 8.55354 10.6712 8.96601 10.9504C8.97165 10.9948 8.97236 11.0477 9.03863 10.997C9.04428 10.9998 9.04921 11.0026 9.05485 11.0054C9.0612 11.0096 9.06825 11.0139 9.07459 11.0188C9.38624 11.1922 9.70141 11.3572 10.0342 11.4869C10.116 11.5187 10.1971 11.5525 10.2852 11.5638C10.4953 11.5913 10.6603 11.5137 10.7999 11.3558C11.003 11.1246 11.1785 10.8722 11.3654 10.6289C11.4352 10.538 11.5071 10.4506 11.5875 10.3695C11.5981 10.3645 11.6093 10.3596 11.6199 10.3547C11.7708 10.2369 11.9337 10.2517 12.098 10.3145C12.3469 10.409 12.5936 10.507 12.8312 10.6282C13.2846 10.8588 13.7394 11.0879 14.1956 11.3135C14.3493 11.3896 14.4156 11.5025 14.4219 11.6745C14.4353 12.0439 14.3521 12.3929 14.2287 12.7355C14.1596 12.928 14.0249 13.0739 13.8853 13.2156C13.4672 13.6394 12.9539 13.884 12.3779 13.9996C12.0514 14.0652 11.7207 14.0455 11.3922 13.9848C11.2237 13.9538 11.053 13.9235 10.8909 13.8755C10.6702 13.8107 10.4481 13.7423 10.2316 13.6598C9.93056 13.5442 9.62526 13.4398 9.32842 13.3151C9.05415 13.1994 8.78974 13.0612 8.52675 12.9195C8.26728 12.7792 8.01909 12.6192 7.78289 12.4479C7.44586 12.2039 7.11518 11.948 6.81623 11.6568C6.59765 11.4439 6.37626 11.2345 6.16333 11.0167C6.02231 10.8722 5.89187 10.7156 5.76002 10.562C5.4935 10.2525 5.24884 9.92673 5.01123 9.59537C4.81663 9.32394 4.6192 9.05533 4.4521 8.76627C4.14751 8.23892 3.90708 7.68618 3.80625 7.07986C3.7717 6.87329 3.78228 6.66602 3.7851 6.45804C3.78933 6.2141 3.83657 5.9758 3.89791 5.74244C3.93175 5.61413 3.94797 5.47594 4.02835 5.36244C4.03399 5.35398 4.03963 5.34481 4.04527 5.33635L4.04245 5.33212L4.04527 5.32789C4.05373 5.32507 4.06008 5.32084 4.05303 5.31097C4.05444 5.29687 4.05303 5.28136 4.06995 5.27501C4.07418 5.26444 4.07911 5.25386 4.08335 5.24399C4.08758 5.23694 4.0911 5.22919 4.09533 5.22214C4.12424 5.20804 4.13059 5.18125 4.13552 5.15305C4.29698 4.87456 4.50851 4.63697 4.74259 4.41912C4.91745 4.25626 5.13462 4.18787 5.36588 4.14557C5.53017 4.11526 5.69304 4.13641 5.85591 4.13782C5.94546 4.13852 6.03994 4.14839 6.12878 4.17025C6.27402 4.2055 6.3544 4.31619 6.42068 4.44027C6.61669 4.80759 6.75066 5.20099 6.91494 5.5824C7.05736 5.91235 7.19203 6.24583 7.33023 6.57789C7.38029 6.69774 7.3958 6.82465 7.34856 6.9452C7.27241 7.1405 7.15608 7.31252 7.01294 7.46692C6.86276 7.62837 6.71047 7.78911 6.57086 7.95973C6.49542 8.05208 6.44183 8.15713 6.50106 8.2932C6.56169 8.43139 6.64842 8.55194 6.72245 8.68096C6.75418 8.73595 6.79014 8.78813 6.82469 8.841C6.82962 8.84735 6.83456 8.85369 6.8395 8.86074C7.05525 9.17095 7.29004 9.46635 7.53823 9.75118C7.61085 9.83437 7.68347 9.91757 7.7568 10.0008C7.7568 10.0247 7.76949 10.0367 7.79347 10.0367L7.79065 10.0346Z"
                                        fill="#FAF9FA"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;