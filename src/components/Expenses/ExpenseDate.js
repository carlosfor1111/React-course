import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  const year = props.date.getFullYear()
  return (
    <div className="expense-date">
      <div className="expense-month">{month}</div>
      <div className="expense-year">{day}</div>
      <div className="expense-day">{year}</div>
    </div>
  )
}

export default ExpenseDate
