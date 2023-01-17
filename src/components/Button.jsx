import React from "react"

const Button = ({ text }) => {
  return (
    <button type="button" className="button-primary green-shadow-hover">
      <div className="button-primary_container">
        <span>
            <span className="button-primary_container_text">{ text }</span>
        </span>
      </div>
    </button>
  )
}

export default Button
