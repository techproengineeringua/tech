import React from 'react'
import AppearOnScrollWrapper from './animation/AppearOnScrollWrapper'

const ContactUsItem = ({ dataObject }) => (
  <AppearOnScrollWrapper element={(
    <div className='border green-shadow-hover'>
      <span>
        <span>
          <a className='section_contacts_container_contact-item' href={dataObject.href} target="_top">
            <div className={`section_contacts_container_contact-item_icon ${dataObject.icon}`}> </div>
            <p className='section_contacts_container_contact-item_title fs-12'>{dataObject.title}</p>
            {dataObject.content.map((p) => (
              <p key={p} className='section_contacts_container_contact-item_text'>{p}</p>
            ))}
          </a>
        </span>
      </span>
    </div>
  )} />
)

export default ContactUsItem
