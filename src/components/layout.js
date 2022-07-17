import * as React from "react"
import { Link } from "gatsby"
import {ThemeProvider} from "theme-ui"
import Prism from '@theme-ui/prism'

import theme from '../gatsby-plugin-theme-ui/index'

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
}


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
      // <ThemeProvider theme={theme} components={components}>
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main >{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
      // </ThemeProvider>
  )
}

export default Layout
