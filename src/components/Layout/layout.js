/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header/header"
import "./layout.scss"

const Layout = ({ children }) => (
  <StaticQuery query={graphql` query SiteTitleQuery { site { siteMetadata { title } } } `} render={data => (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="mainContainer">
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()} Two Partners In Grime |  Built by
        <a href="https://www.bluesandswebdesign.com"> Blue Sands Web Design</a>
      </footer>
    </>
  )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
