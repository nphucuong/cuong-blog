import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import SearchPosts from "../components/searchPosts"
import styled from "styled-components"

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <HeaderSection>
          <Header>Blog</Header>
          <HeaderDescription>
            We don’t just design and develop. Sometimes we also write down
            words. Here we share our insights and findings from our daily work
            at Fintory.
          </HeaderDescription>
        </HeaderSection>
        <SEO title="Blog" />
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 66.66%;
`

const Header = styled.h1`
  font-size: 72px;
  font-family: "Open Sans";
  font-weight: bold;
`

const HeaderDescription = styled.p`
  font-size: 18px;
  font-family: "Inter";
  text-align: center;
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fixed {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`
