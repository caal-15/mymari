import React from 'react'
import { useParams } from 'react-router-dom'

import data from '../ThoughtsPage/data.json'
import ThoughtCard from '../ThoughtCard'

const NumberedThoughtsPage = () => {
  const pathParams = useParams()
  const page = pathParams.page || 0

  const thoughtItem = data[page]

  return <ThoughtCard {...thoughtItem} />
}

export default NumberedThoughtsPage
