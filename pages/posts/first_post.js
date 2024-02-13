import Link from 'next/link'
import React from 'react'

export default function First_post() {
  return ( <>
  <img src="/images/index.jpg" alt="Your Name" />
  <h1>First post </h1>
  <Link href={'/'}>
    Return to home !
  </Link>
  </>
    


  ) 
}
