import React from 'react'
import { Link } from 'react-router-dom'

export default function error() {
  return (
    <div>
      <h2>Not Found</h2>

      <p>go to the <Link to="/">home</Link></p>
    </div>
  )
}
