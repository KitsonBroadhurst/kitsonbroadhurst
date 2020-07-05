import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div>Page not found</div>
      <Link to="/">Take me home</Link>
    </Layout>
  )
}
