import React from 'react'
import { useParams } from 'react-router-dom'

function Inside() {
  const {id} = useParams()
  return (
    <div>
      <p>Id is {id}</p>
    </div>
  )
}

export default Inside
