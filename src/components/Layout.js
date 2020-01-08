import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './Header';
import Helmet from 'react-helmet';
import SmallFooter from '../components/SmallFooter';
import useSiteMetadata from '../hooks/use-site-metadata';

const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();

    return (
        <>
            <Global styles={css`
                    * {
                        box-sizing: border-box;
                        margin: 0;

                    }   

                    /* More info: https://bit.ly/2PsCnzk */
                    * + * {
                    margin-top: 1rem;
                    }
                    
                    html, 
                    body {
                        margin: 0;
                        color: #555;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, Sans-serif;
                        font-size: 18px;
                        line-height: 1.4;
                    
                        /*
                            remove margin for the main div that Gatsby mounts into. 
                        */

                        > div {
                            margin-top: 0;
                        }

                        h1, h2, h3, h4, h5, h6 {
                            color: #222;
                            line-height: 1.1;
                        }
                        + * {
                            margin-top: 0.rem;
                        }

                        strong {
                            color: #222;
                        }

                        li {
                            margin-top: 0.25rem;
                        }
                    } 
                `} 
            />
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <Header />
                <main 
                    css={ css`
                        margin: 2rem auto 4rem;
                        max-width: 90vw;
                        width: 550px;
                    `}
                >
                    {children}
                </main>
            <SmallFooter />
        </>
    )
}

/*
    Global is a component provided by React emotion to store the global scoped styles for the app.
*/

export default Layout;