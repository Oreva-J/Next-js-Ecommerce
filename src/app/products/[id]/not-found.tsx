import Link from 'next/link'
import React from 'react'


const notFound: React.FC = () => {
  return (
    <div>
      Sorry Product not found 
      <Link href={"/"}>Go Home</Link>
    </div>
  )
}

export default notFound
