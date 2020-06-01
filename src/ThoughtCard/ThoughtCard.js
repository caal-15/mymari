import React from 'react'

import styles from './ThoughtCard.module.sass'

const ThoughtCard = ({ title, body, footnote }) => (
  <div className={styles.thoughtCard}>
    <h1>{title}</h1>
    <p>{body}</p>
    <span>- {footnote}</span>
  </div>
)

export default ThoughtCard
