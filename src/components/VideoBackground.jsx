import React from "react"
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import { Link } from "react-router-dom"
import { ROUTE_NAMES } from "../data/data"
import clip from "../media/clip.mp4"
import Button from "./Button"

const VideoBackground = () => {
  const lang = useRecoilValue(languageState)
  const { videoBg } = lang
  return (
    <div className="video-bg-wrapper">
      <video autoPlay muted loop className="video-bg-wrapper_video-bg">
        <source src={clip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-bg-wrapper_text-wrapper">
        {videoBg.list.map((p, i) => (
          <Link
            to={ROUTE_NAMES.SERVISE.replace(":id", i + 1)}
            className={`video-bg-wrapper_text-wrapper_link fs-24 ${i !== videoBg.list.length - 1 ? "txt-white mg-b-10" : "txt-green mg-b-40"}`}
            key={p}
          >
            {p}
            <span></span>
          </Link>
        ))}
        <Link to={ROUTE_NAMES.SERVISES}>
          <Button text={videoBg.btnText} />
        </Link>
    </div>
    </div>
  )
}

export default VideoBackground
