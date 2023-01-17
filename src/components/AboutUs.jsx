import React from "react"
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import { Link } from "react-router-dom"
import { ROUTE_NAMES } from "../data/data"
import Button from "./Button"
import logo from "../media/logo.png"


const AboutUs = () => {
  const lang = useRecoilValue(languageState)
  const { aboutUs } = lang

  return (
    <section className="section section_about-us pd--4">
      <h2 className='title uc text-align--center fs-30'>{aboutUs.title}</h2>
      <div className="section_container section_about-us_container border">
        <div className='section_about-us_container_text-container'>
          <p className='subtitle fs-20 uc txt-white text-align--left bold'>
            {aboutUs.subtitle1}
            <span className='txt-green'>{aboutUs.subtitle2}</span>
            {aboutUs.subtitle3}
          </p>
          <p className='subtitle fs-14 txt-white text-align--left'>{aboutUs.text}</p>
          <Link to={ROUTE_NAMES.ABOUT_US}>
            <Button text={aboutUs.btnText} />
          </Link>
        </div>
        <img className="logo" src={logo} alt="logo" />
      </div>
    </section>
  )
}

export default AboutUs
