import React from 'react'
import { Helmet } from "react-helmet-async"
import ContactUs from '../components/ContactUs'
import Feedback from '../components/Feedback'

const FeedbackPage = () => {
  return (
    <div className='page feedback-page'>
      <Helmet>
        <title>Контакти та адреса TechProEngineering в м. Сарни, Рівненська область</title>
        <meta name="description" content="Замовити звортоній зв'язок, креслення, дізнатись ціну на лазерну різку, гравіювання, ультрафіолетовий друк та інші послуги компанії TechProEngineering" />
      </Helmet>
      <Feedback />
      <ContactUs />
    </div>
  )
}

export default FeedbackPage
