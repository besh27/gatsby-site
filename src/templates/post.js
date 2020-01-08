import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { MDXRenderer} from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from '../components/Layout'
import ReadLink from '../components/read-link';

export const query = graphql`
query($slug: String){
    mdx(frontmatter: { slug: { eq: $slug}}){
      frontmatter{
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
}`;

const PostTemplate = ({ data: { mdx: post } }) => (
    <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p css={css`font-size: 0.75rem;`}>Posted by {post.frontmatter.author} | {post.frontmatter.date}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
)

export default PostTemplate;