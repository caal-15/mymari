import React, { useState, useEffect } from 'react'
import { useParams, Redirect, useHistory } from 'react-router-dom'

import ThoughtCard from '../ThoughtCard'
import data from './data.json'
import { getRandomNumber } from '../utils'

import styles from './ThoughtsPage.module.sass'

const ThoughtsPage = () => {
  const pathParams = useParams()
  const history = useHistory()
  const { page } = pathParams

  const [visitedPages, setVisitedPages] = useState([])

  useEffect(() => {
    const pageNumber = Number(page)
    if (
      page &&
      !visitedPages.some((visitedPage) => visitedPage === pageNumber)
    ) {
      setVisitedPages([...visitedPages, pageNumber])
    }
  }, [page, visitedPages, setVisitedPages])

  const getUnvisitedPage = () => {
    let newPage = getRandomNumber(data.length) + 1
    if (visitedPages.length < data.length) {
      while (visitedPages.some((page) => page === newPage)) {
        newPage = getRandomNumber(data.length) + 1
      }
      return newPage
    } else {
      setVisitedPages([])
      return newPage
    }
  }

  if (!page) {
    return <Redirect to={`/${getRandomNumber(data.length) + 1}`} />
  }

  const thoughtItem = data[page - 1]
  return (
    <main
      onClick={() => history.push(`/${getUnvisitedPage()}`)}
      className={styles.main}
    >
      <ThoughtCard {...thoughtItem} />
    </main>
  )
}

export default ThoughtsPage
