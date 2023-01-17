import React from "react"
import { Link } from "react-router-dom"
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import { ROUTE_NAMES } from "../data/data"
import Button from "./Button"

const Ordering = () => {
  const lang = useRecoilValue(languageState)
  const { ordering } = lang
  return (
    <section className="section section_ordering pd--4">
      <h2 className='title fs-30 uc text-align--center'>{ordering.title}</h2>
      <div className='section_ordering_content '>
        <div className='section_ordering_content_text-container txt-white fs-11'>
          <div>{ordering.text1}</div>
          <ul>
            <p>{ordering.text2}</p>
            {ordering.list2.map(p => <li key={p}>{p}</li>)}
          </ul>
          <div>
            {ordering.list3.map(p => <p key={p}>{p}</p>)}
          </div>
        </div>
      </div>
      <Link to={ROUTE_NAMES.FEEDBACK}>
        <Button text={ordering.btnText} />
      </Link>
    </section>
  )
}

export default Ordering
