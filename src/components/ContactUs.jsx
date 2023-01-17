import React from 'react'
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import ContactUsItem from './ContectUsItem'
import AppearOnScrollWrapper from './animation/AppearOnScrollWrapper'

const ContactUs = ({ headerAlign = "center" }) => {
  const lang = useRecoilValue(languageState)
  const { contacts } = lang
  return (
    <section className='section_contacts pd--5'>
      <AppearOnScrollWrapper element={(
        <h2 className={`title fs-30 uc text-align--${headerAlign}`}>{contacts.title}</h2>
      )} />
      <div className='section_contacts_container'>
        {contacts.list.map((dataObject) => <ContactUsItem key={dataObject.title} dataObject={dataObject} />)}
      </div>
    </section>
  )
}

export default ContactUs
