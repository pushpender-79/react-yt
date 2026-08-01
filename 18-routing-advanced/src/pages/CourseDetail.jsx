// dynamic routing concept

import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
const params= useParams()
// console.log(params)
console.log(params.Course_id)

  return (
    <div>
      <h1>{params.Course_id} Course detail</h1>
    </div>
  )
}

export default CourseDetail
