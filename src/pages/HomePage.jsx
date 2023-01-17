import React from 'react'
import { Helmet } from "react-helmet-async"
import ContactUs from '../components/ContactUs'
import Feedback from '../components/Feedback'
import QuestionsAndAnswers from "../components/QuestionsAndAnswers"
import Ordering from "../components/Ordering"
import AboutUs from "../components/AboutUs"
import VideoBackground from "../components/VideoBackground"
import SlideOnScrollWrapper from '../components/animation/SlideOnScrollWrapper'

const HomePage = () => {
  return (
    <div className='page home-page'>
      <Helmet>
        <title>Високоточна металообробка, лазерна порізка та гравіювання металу від TechProEngineering Рівне.</title>
        <meta name="description" content="У TechProEngineering наявні установки лазерної порізки матеріалів, парк оптоволоконних та гравіювальних лазерів, обладнанння для порошкового фарбування, турбогалтування та шліфування деталей, склосструменева та піскоструменева камери, ультрафіолетовий принтер, ультрафіолетова ванна для очистки поверхонь, пакувальні станки. Швидка та якісна обробка замовлень TechProEngineering у Рівненській області та з доставкою по Україні." />
      </Helmet>
      <VideoBackground />
      <SlideOnScrollWrapper element={<AboutUs />} />
      <SlideOnScrollWrapper element={<Ordering />} />
      <QuestionsAndAnswers />
      <Feedback />
      <ContactUs />
    </div>
  )
}

export default HomePage
