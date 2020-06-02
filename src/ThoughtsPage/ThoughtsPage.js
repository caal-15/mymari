import React, { useState, useEffect } from 'react'

import ThoughtCard from '../ThoughtCard'
import data from './data.json'
import { getRandomNumber } from '../utils'

import styles from './ThoughtsPage.module.sass'

const ThoughtsPage = () => {
  const [page, setPage] = useState(getRandomNumber(data.length))
  const [visitedPages, setVisitedPages] = useState([])

  useEffect(() => {
    if (!visitedPages.some((visitedPage) => visitedPage === page)) {
      setVisitedPages([...visitedPages, page])
    }
  }, [page, visitedPages, setVisitedPages])

  const getUnvisitedPage = () => {
    let newPage = getRandomNumber(data.length)
    if (visitedPages.length < data.length) {
      while (visitedPages.some((page) => page === newPage)) {
        newPage = getRandomNumber(data.length)
      }
      return newPage
    } else {
      setVisitedPages([])
      return newPage
    }
  }

  const thoughtItem = data[page]
  return (
    <main onClick={() => setPage(getUnvisitedPage())} className={styles.main}>
      <ThoughtCard {...thoughtItem} />
    </main>
  )
}

export default ThoughtsPage
