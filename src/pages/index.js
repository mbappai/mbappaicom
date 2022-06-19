

import * as React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Paragraph, Text } from 'theme-ui'

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <Text>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </Text>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Blogs written by Mujahid Bappai" />
      <>

      <Heading as= 'h1' variant="text.title">All Posts</Heading>
      <ol style={{ listStyle: `disc` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              
                {/* <header> */}
                  <Text variant="text.list">
                    <Link  to={post.fields.slug} itemProp="url">
                      <span style={{display:'inline-block',borderBottom:'2px dashed black',padding: '2px',}} itemProp="headline">{title}{<Text style={{fontStyle:'italic'}}> — {post.frontmatter.date}</Text>}</span>
                    </Link>
                  </Text>
            </li>
          )
        })}
      </ol>
        {/* <Bio /> */}
        </>

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
