import React　from 'react'
import { Answer } from './index'

const AnswersList = (aContentOf) => {
  return(
    <div className="c-grid__answer">
      {aContentOf.answers.map((value, index) => {
        return <Answer content={value.content} key={index.toString()} />
      })}
    </div>
  )
}

export default AnswersList