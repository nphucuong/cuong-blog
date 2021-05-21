import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import "../styles/index.scss"
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const blogPath = `${__PATH_PREFIX__}/blog/`

    const header = (
      <nav>
        <img src="../logo.svg" alt="Gatsby Scene" />
        <div>
          <a className="item">About</a>
          <a className="item">Blog</a>
          <a className="item">Contact</a>
        </div>
      </nav>
    )

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: 1024,
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <Main>{children}</Main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
