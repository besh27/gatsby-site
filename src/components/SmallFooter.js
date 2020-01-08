import React from 'react';
import { css } from '@emotion/core';

const SmallFooter = () => {
    const dt = new Date();
    return (
        <>
            <p 
                css={css`
                    margin: 10px auto 10px;
                    color: #555;
                    font-size: 0.75rem;
                    text-align: center;
            `}>© Copyright {dt.getFullYear()}</p>
        </>
    )
}

export default SmallFooter;