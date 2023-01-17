import React from 'react'
import ua from '../data/_ua'
import { LINKS } from '../data/data'
import AppearOnScrollWrapper from './animation/AppearOnScrollWrapper'

const Footer = () => {
  const content = ua.footer
  return (
    <AppearOnScrollWrapper
      element={(
        <footer className='footer bg-black'>
          <div className='footer_icons'>
            <a className='footer_icons_icon instagram' href={LINKS.INSTAGRAM}> </a>
            <a className='footer_icons_icon facebook' href={LINKS.FACEBOOK}> </a>
          </div>
          <p className='fs-12'>{content.copyright}</p>
        </footer>
      )}
    />
  )
}

export default Footer
