import React from 'react'

const Card = (props) => {
  return (
    <div>
       <a href={props.elem.url} target="_blank">
            <div className="h-40 w-full bg-white rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={props.elem.download_url}
                alt="url is not working.."
              />
            </div>
            <h2 className="font-bold text-sm mt-0.5 truncate">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card
