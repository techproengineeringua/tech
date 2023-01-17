import React from "react"
import { Helmet } from "react-helmet-async"
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import { Link, useLocation } from "react-router-dom"
import { ROUTE_NAMES } from "../data/data"
import AppearOnScrollWrapper from "../components/animation/AppearOnScrollWrapper"

import video1 from "../media/lazerna_rezka.mp4"
import video2 from "../media/poroshkove_farbuvanya.mp4"
import video3 from "../media/shlifuvanya_ta_turbogaltuvanya.mp4"
import video4 from "../media/ultrafioletovyy_druk.mp4"

import image1 from "../media/lazerne_graviyuvanya.png"
import image2 from "../media/sklostrumeneva_ta_piskostrumeneva_obrobka.png"
import image3 from "../media/ultrazvukove_promyslove_ochyschenya.png"

const getMedia = (id) => {
  switch (id) {
    case '1':
      return video1
    case '2':
      return image1
    case '3':
      return video2
    case '4':
      return image2
    case '5':
      return video3
    case '6':
      return image3
    case '7':
      return video4
    default:
  }
}

const ServiceItem = ({ serviceObject }) => {
  let media = getMedia(serviceObject.id)

  return (
    <>
      <Helmet>
        <title>{serviceObject.helmet.title}</title>
        <meta name="description" content={serviceObject.helmet.metaContent} />
      </Helmet>
      {serviceObject.mediaType === "video" && (
        <video autoPlay muted loop className="service-item-page_media">
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {serviceObject.mediaType === "image" && (
        <img src={media} alt="service" className="service-item-page_media" />
      )}
      <div className="service-item-page_content">
        <AppearOnScrollWrapper element={<h2 className="title fs-18 uc text-align--center">{serviceObject.title}</h2>} />
        <AppearOnScrollWrapper element={(
          <div className="service-item-page_content_text txt-white fs-11">
            {serviceObject.content.map(contentItem => {
              return typeof contentItem == "string"
                ? <p key={contentItem}>{contentItem}</p>
                : <ul key={contentItem[0]}>{contentItem.map((p) => <li key={p}>{p}</li>)}</ul>
            })}
            {serviceObject.feedbackText1 && (
              <p >
                {serviceObject.feedbackText1}
                <Link className="txt-green service-item-page_content_text_link" to={ROUTE_NAMES.FEEDBACK}>{serviceObject.feedbackLink}</Link>
                {serviceObject.feedbackText2}
              </p>
            )}
            {serviceObject.phoneText && (
              <p>
                <span className="mg-r-10">{serviceObject.phoneText}</span>
                <a
                  className="txt-green service-item-page_content_text_link"
                  href="tel:+380507745376"
                >
                  +38 (050) 774-53-76
                </a>
              </p>
            )}
            {serviceObject.emailText && (
              <p>
                <span className="mg-r-10">{serviceObject.emailText}</span>
                <a
                  href="malito:support@techproengineering.com.ua"
                  className="txt-green service-item-page_content_text_link"
                >
                  support@techproengineering.com.ua
                </a>
              </p>
            )}
          </div>
        )} />
      </div>
    </>
  )
}
const ServicePage = () => {
  const lang = useRecoilValue(languageState)
  const { services } = lang
  const { pathname } = useLocation()
  const splittedPathname = pathname.split('/')
  const serviceUrl = splittedPathname[splittedPathname.length - 1]
 
  return (
    <div className="page service-item-page text-green">
      
      {services.list.map((serviceObject) => {
        return serviceObject.url === serviceUrl
          ? <ServiceItem serviceObject={serviceObject} key={serviceObject.title} />
          : null
      })}
    </div>
  )
}

export default ServicePage
