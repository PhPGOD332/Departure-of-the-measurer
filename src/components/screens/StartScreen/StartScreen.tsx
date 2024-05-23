'use client'
import React, {FC, useRef, useState} from 'react';
import styles from './StartScreen.module.scss';
import FormOrder from "@/components/UI/FormOrder/FormOrder";

const StartScreen: FC = () => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const toggleModal = (modalState: boolean) => {
        if (!modalState) {
            setModalVisible(false);
            document.body.classList.remove('overflow');
        } else {
            setModalVisible(true);
            document.body.classList.add('overflow');
        }
    }

    const modalClick = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if(e.target === modalRef.current) {
            toggleModal(false);
        }
    }

    return (
        <>
            <div className={`${styles.modalForm} ${modalVisible ? 'modalVisible' : 'modalHidden'}`} ref={modalRef}
                 onClick={(e) => modalClick(e)}>
                <FormOrder isPopup={true} toggleModal={toggleModal} modalVisible={modalVisible}
                           setModalVisible={setModalVisible}/>
            </div>
            <section className={`${styles.startScreen} section`}>
                <div className={styles.bgMask}></div>
                <div className={styles.container}>
                    <div className={styles.prosBlock}>
                        <span className={styles.prosItem}>Бесплатно</span>
                        <span className={styles.prosItem}>День в день</span>
                        <span className={styles.prosItem}>Дизайн и визуализация</span>
                    </div>
                    <h1 className={`${styles.startTitle} titleNotoFont`}>
                        Выезд специалиста <br/> для замера и создания проекта <span className={styles.mobileStartTitle}>кухни и корпусной мебели</span>
                    </h1>
                    <p className={styles.startText}>
                        Бесплатный выезд дизайнера замерщика кухни и корпусной мебели.
                        Специалист порекомендует эргономичные решения, соответствующие <span
                        className={styles.desktopStartText}>планировке
                    помещения, поможет с выбором материалов и цветов, проведет замер помещения и
                    подготовит проект.</span>
                        <span className={styles.mobileStartText}> характеристикам помещения</span>
                    </p>
                    <button className={`${styles.startButton} OrangeButton_button`} onClick={() => toggleModal(true)}>
                        Оформить выезд
                    </button>
                </div>
            </section>
        </>
    );
};

export default StartScreen;