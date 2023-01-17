import React from "react"

const QuestionItem = ({ question }) => (
  <div key="question.title" className='w-100 border'>
    <div className="section-qa_content_questions_question inner-border">
      <p className="txt-green fs-24 bold">?</p>
      <div>
        <p className='txt-white fs-14'>{question.title}</p>
        {question.list1.map((p) => <p key={p} className="txt-grey fs-12">{p}</p>)}
      </div>
    </div>
  </div>
)

export default QuestionItem
