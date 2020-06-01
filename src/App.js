import React from 'react'

import ThoughtCard from './ThoughtCard'
import data from './data.json'

import styles from './App.module.sass'

const App = () => {
  const thoughtItem = data[0]
  return (
    <main className={styles.main}>
      <ThoughtCard {...thoughtItem} />
    </main>
  )
}

export default App
