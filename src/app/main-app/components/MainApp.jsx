import Head from 'next/head'

const MainApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head></Head>
            <div className="container mx-auto">
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default MainApp
