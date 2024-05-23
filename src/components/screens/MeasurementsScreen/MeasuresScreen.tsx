'use client'
import React, {FC, useState} from 'react';
import styles from './Measures.module.scss';
import {Swiper} from 'swiper';
import {Swiper as SwiperComp, SwiperSlide} from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './SwipersStyles.scss';
import {Controller, Navigation, Pagination, Thumbs} from "swiper/modules";

const MeasuresScreen: FC = () => {
    const [firstSwiper, setFirstSwiper] = useState<Swiper | null>(null)
    const [secondSwiper, setSecondSwiper] = useState<Swiper | null>(null)


    return (
        <section className={`${styles.measuresScreen} section`}>
            <h1 className={`${styles.measuresTitle} titleNotoFont`}>
                Замер помещения и создание проекта специалистом
                под кухонный гарнитур и корпусную мебель
            </h1>
            <div className={`${styles.measureCard} gridBlock`}>
                <div className={styles.slider}>
                    <SwiperComp
                        loop={true}
                        modules={[Controller, Navigation, Pagination, Thumbs]}
                        slidesPerView={1}
                        spaceBetween={10}
                        className='measures-slider'
                        navigation={{

                        }}
                        pagination={{
                            type: "bullets",
                            clickable: true
                        }}
                        thumbs={{
                            swiper: '.measures-mini-slider'
                        }}
                    >
                        <SwiperSlide>
                            <img src="/images/photos/photo1.jfif" alt="Фото макета кухни"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo2.jfif" alt="Фото макета кухни"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo3.jfif" alt="Фото макета кухни"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo4.jfif" alt="Фото макета кухни"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo5.jfif" alt="Фото макета кухни"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo6.jfif" alt="Фото макета кухни"/>
                        </SwiperSlide>
                    </SwiperComp>
                    <div className={styles.swiperWrapper}>
                        <SwiperComp
                            loop={true}
                            modules={[Controller, Navigation, Thumbs]}
                            onSwiper={setSecondSwiper}
                            watchSlidesProgress
                            slidesPerView={3}
                            spaceBetween={10}
                            className='measures-mini-slider'
                        >
                            <SwiperSlide>
                                <img src="/images/photos/photo1.jfif" alt="Фото макета кухни"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo2.jfif" alt="Фото макета кухни"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo3.jfif" alt="Фото макета кухни"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo4.jfif" alt="Фото макета кухни"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo5.jfif" alt="Фото макета кухни"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo6.jfif" alt="Фото макета кухни"/>
                            </SwiperSlide>
                        </SwiperComp>
                    </div>
                </div>
                <div className={styles.measuresDescription}>
                <h3 className={styles.descriptionSubtitle}>
                        Хотите, чтобы кухня соответствовала особенностям  планировки, полностью
                        подходила под дизайн помещения?
                    </h3>
                    <div className={styles.descriptionText}>
                        <p>Для этого очень важно правильно провести замеры помещения.
                            Итоговые данные и цифры должны быть точны до миллиметров – на их
                            основе вы будете заказывать дизайн интерьера кухни.</p>
                        <p>Часто клиенты опасаются, что визит специалиста,  разработка и создание
                            проекта кухни станут дополнительным пунктом  расходов, поэтому решают
                            делать замеры лично.  В результате готовый кухонный гарнитур или
                            другая корпусная мебель будет нуждаться в доработке,  на которую
                            придется тратить время, деньги и нервы.</p>
                        <p>Чтобы избежать таких ситуаций, фабрика «Твоя кухня» предлагает
                            бесплатный выезд дизайнера замерщика кухни.</p>
                        <p>Специалист порекомендует эргономичные решения,  соответствующие
                            характеристикам  помещения. Клиент ознакомится с фирменным каталогом,
                            посмотрит  образцы материалов,  получит консультацию дизайнера</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeasuresScreen;