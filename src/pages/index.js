import React from 'react';
import Layout from'../components/Layout';
import { Link } from 'gatsby';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/Post-Preview';
import Hero from '../components/Hero';
import Insta from '../components/Insta';

export default () => {
    const posts = usePosts();

    return (
        <>
            <Hero />
            <Layout>
                <h1>Home</h1>
                <p>Hello Chicago!</p>
                <Link to="/about">About</Link>
                <h2>Read my Blog</h2>
                {posts.map(post => (
                    <PostPreview key={post.slug} post={post}/>
                ))}
                <Insta />
            </Layout>
        </>
    )
}
