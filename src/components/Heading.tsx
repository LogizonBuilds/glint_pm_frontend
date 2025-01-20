import React from 'react'
import Head from 'next/head'

type Props = {}

const Heading = (props: Props) => {
    return (
        <>
            <Head>
                <link rel='icon' href='/images/Glintpm.png' sizes='42x42' type='image/png' />
            </Head>
            <title>GlintPM</title>
            <meta name='description' content='digital services, wordpress web development web design, software development' />
            <meta name='keywords' content='web development, web design, software development, mobile app development' />
            <meta name='author' content='GlintPM' />
            <meta name='viewport' content='width=device-width' />
        </>
    )
}

export default Heading