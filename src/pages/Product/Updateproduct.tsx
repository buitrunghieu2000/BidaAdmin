import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const Updateproduct = (props: Props) => {
    const {productId} = useParams()
  return (
    <div>{productId}</div>
  )
}

export default Updateproduct