import React, {FC} from 'react';
import Header from "@/components/UI/Header/Header";
import StartScreen from "@/components/screens/StartScreen/StartScreen";
import MeasuresScreen from "@/components/screens/MeasurementsScreen/MeasuresScreen";
import VideoSection from "@/components/screens/VideoSection/VideoSection";
import PreparesSection from "@/components/screens/PreparesSection/PreparesSection";
import AlgorithmSection from "@/components/screens/AlgorithmSection/AlgorithmSection";
import FormOrderSection from "@/components/screens/FormOrderSection/FormOrderSection";
import Footer from "@/components/UI/Footer/Footer";

const MeasurePage: FC = () => {

    return (
        <main className='measurePage'>
            <Header />
            <StartScreen />
            <MeasuresScreen />
            <VideoSection />
            <PreparesSection />
            <AlgorithmSection />
            <FormOrderSection />
            <Footer/>
        </main>
    );
};

export default MeasurePage;