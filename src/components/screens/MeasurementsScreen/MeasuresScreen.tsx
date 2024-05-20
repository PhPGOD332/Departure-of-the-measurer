'use client'
import React, {FC, useEffect, useRef, useState} from 'react';
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
    // const mainSliderRef = useRef<Swiper | null>(null);
    // const secondSliderRef = useRef<Swiper | null>(null);


    return (
        <section className={`${styles.measuresScreen} section`}>
            <h1 className={`${styles.measuresTitle} titleNotoFont`}>
                Замер помещения и создание проекта специалистом
                под кухонный гарнитур и корпусную мебель
            </h1>
            <div className={`${styles.measureCard} gridBlock`}>
                <div className={styles.slider}>
                    <SwiperComp
                        modules={[Controller, Navigation, Pagination, Thumbs]}
                        // onSwiper={set => mainSliderRef.current = set}
                        // controller={{control: secondSliderRef.current}}
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

                        // onSlideChange={(): void => {
                        //     if (secondSliderRef.current && mainSliderRef.current) {
                        //         console.log(mainSliderRef.current.activeIndex)
                        //         secondSliderRef.current.slideTo(mainSliderRef.current.activeIndex);
                        //     }
                        // }}
                    >
                        <SwiperSlide>
                            <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                        </SwiperSlide>
                    </SwiperComp>
                    <div className={styles.swiperWrapper}>
                        <SwiperComp
                            modules={[Controller, Navigation, Thumbs]}
                            onSwiper={setSecondSwiper}
                            watchSlidesProgress
                            // onSwiper={set => secondSliderRef.current = set}
                            // controller={{control: mainSliderRef.current}}
                            slidesPerView={3}
                            spaceBetween={10}
                            className='measures-mini-slider'
                            // navigation={{
                            //     prevEl: '.miniSwiperPrev',
                            //     nextEl: '.miniSwiperNext'
                            // }}
                            // onSlideChange={(): void => {
                            //     if (mainSliderRef.current && secondSliderRef.current) {
                            //         console.log(secondSliderRef.current.activeIndex)
                            //         mainSliderRef.current.slideTo(secondSliderRef.current.activeIndex);
                            //     }
                            // }}
                            // centeredSlides={true}
                        >
                            <SwiperSlide>
                                <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/photos/photo.png" alt="Фото комнаты"/>
                            </SwiperSlide>
                        </SwiperComp>
                        {/*<div className={`${styles.miniSwiperPrev} miniSwiperPrev`}></div>*/}
                        {/*<div className={`${styles.miniSwiperNext} miniSwiperNext`}></div>*/}
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