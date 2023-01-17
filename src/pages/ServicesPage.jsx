import React from 'react'
import { Helmet } from "react-helmet-async"
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import { Link } from 'react-router-dom'
import AppearOnScrollWrapper from '../components/animation/AppearOnScrollWrapper'

const ServicesPage = () => {
  const lang = useRecoilValue(languageState)
  const { services } = lang
  return (
    <div className='page services-page'>
      <Helmet>
        <title>Полсуги TechProEngineering з лазерної різки та гравіювання, порошкового фарбування дисків та інші види обробки</title>
        <meta name="description" content="Широкий спектр послуг TechProEngineering, виконуємо всі види замовлень на установках лазерної порізки матеріалів, парк оптоволоконних та гравіювальних лазерів, обладнанння для порошкового фарбування, турбогалтування та шліфування деталей, склосструменева та піскоструменева камери, ультрафіолетовий принтер, ультрафіолетова ванна для очистки поверхонь, пакувальні станки." />
      </Helmet>
      <AppearOnScrollWrapper element={(
        <ul className='services-page_nav'>
          {services.list.map((service) => {
            return (
            <Link to={`/services/${service.url}`} key={service.title}>
              <li className='services-page_nav_nav-item inner-border fs-11 green-shadow-hover'>
                <span>
                  <span>
                    {service.title}
                  </span>
                </span>
              </li>
            </Link>
          )})}
        </ul>
      )} />
    </div>
  )
}

export default ServicesPage
