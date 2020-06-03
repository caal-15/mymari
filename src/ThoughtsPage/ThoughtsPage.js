import React, { useState, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { parse } from 'qs'

import ThoughtCard from '../ThoughtCard'
import data from './data.json'
import { getRandomNumber } from '../utils'

import styles from './ThoughtsPage.module.sass'

const ThoughtsPage = () => {
  const history = useHistory()
  const { location } = history
  const { search } = location
  const qsObj = parse(search.replace('?', ''))
  const page = qsObj.page ? Number(qsObj.page) : null
  const [visitedPages, setVisitedPages] = useState([])

  useEffect(() => {
    if (page && !visitedPages.some((visitedPage) => visitedPage === page)) {
      setVisitedPages([...visitedPages, page])
    }
  }, [page, visitedPages, setVisitedPages])

  const getUnvisitedPage = () => {
    let newPage = getRandomNumber(data.length) + 1
    if (visitedPages.length < data.length) {
      while (visitedPages.some((page) => page === newPage)) {
        newPage = getRandomNumber(data.length)
      }
      return newPage
    }
    setVisitedPages([])
    return newPage
  }

  if (!page || isNaN(page) || page > data.length) {
    return <Redirect to={`?page=${getUnvisitedPage()}`} />
  }

  const thoughtItem = data[page - 1]
  return (
    <main
      onClick={() => history.push(`?page=${getUnvisitedPage()}`)}
      className={styles.main}
    >
      <ThoughtCard {...thoughtItem} />
    </main>
  )
}

export default ThoughtsPage
