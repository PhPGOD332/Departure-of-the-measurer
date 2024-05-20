import React, {FC} from 'react';
import styles from './FormOrderSection.module.scss';
import FormOrder from "@/components/UI/FormOrder/FormOrder";
const FormOrderSection: FC = () => {
    return (
        <section className={styles.formSection} id="formSection">
            <div className={styles.formContainer}>
                <FormOrder isPopup={false}/>
            </div>
        </section>
    );
};

export default FormOrderSection;