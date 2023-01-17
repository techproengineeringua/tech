import React from "react"
import { useRecoilState } from 'recoil'
import { languageState } from "../data/recoil"
import ua from "../data/_ua"
import en from "../data/_en"

const LanguageSwitchBtn = () => {
  const [lang, setLang] = useRecoilState(languageState)
  const switchLanguage = () => setLang(lang.language === "ua" ? en : ua)
  return (
    <button
      type="button"
      className={`language-switch-btn language-switch-btn--${lang.language}`}
      onClick={switchLanguage}
    ></button>
  )
}

export default LanguageSwitchBtn
