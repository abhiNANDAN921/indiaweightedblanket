import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div  data-is-root-path={isHomePage}>
      {/* <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header> */}
<Header/>
<Hero/>
      <main  className="global-wrapper newdesign">{children}</main>

<Footer/>


    </div>
  )
}

export default Layout
