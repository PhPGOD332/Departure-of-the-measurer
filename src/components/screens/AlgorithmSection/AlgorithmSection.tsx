import React, {FC} from 'react';
import AdvantagesSection from "@/components/screens/AdvantagesSection/AdvantagesSection";
import AdditionalSection from "@/components/screens/AdditionalSection/AdditionalSection";
import styles from "./AlgorithmSection.module.scss";
const AlgorithmSection: FC = () => {
    return (
        <div className={styles.algorithmContainer}>
            <div className={styles.algorithmBgBlock}>
                <div className={styles.maskImg}></div>
                <img src="/images/advantages-bg.jpg" alt="Фон" className={styles.algorithmBgImg}/>
            </div>

            <AdvantagesSection/>
            <AdditionalSection/>
        </div>
    );
};

export default AlgorithmSection;