import React from 'react';
import { Link } from 'gatsby';
import Layout from'../components/Layout';

export default () => ( 
    <Layout>
        <h1>YO YO!</h1>
        <p>Hey there, this is the about page!</p>
        <Link to="/">Link</Link>
    </Layout>
);

/*
    Instead of using an html anchor tag, which will reload the page 
    We can use reach router (which has been intergrated into gatsby)
    <Link to="/">Link</Link>

    Works just like an anchor tag, but it no longer reloads the entire page. 
    https://reach.tech/router


*/