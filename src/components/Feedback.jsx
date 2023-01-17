import React from "react"
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import FeedbackForm from "./FeedbackForm"
import SlideOnScrollWrapper from "./animation/SlideOnScrollWrapper"

const Feedback = () => {
  const lang = useRecoilValue(languageState)
  const { feedback } = lang
  return (
    <section className='section_feedback pd--5'>
      <SlideOnScrollWrapper
        element={<h2 className="title fs-30 uc text-align--center">{feedback.title}</h2>}
      />
      <FeedbackForm />
    </section>
  )
}

export default Feedback
