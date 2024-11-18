import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const err = useRouteError()
  return (
    <h1>{err.status} {err.data}</h1>
  )
}
