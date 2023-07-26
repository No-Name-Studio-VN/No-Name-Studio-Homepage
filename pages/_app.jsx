// Core packages
import { Analytics } from '@vercel/analytics/react';
import { LazyMotion, domAnimation } from "framer-motion"
import Head from "next/head"

// Utils
import SetGridGap from '../components/utils/set.grid.util'

// Structure
import Layout from '../components/layout/layout'

import "../node_modules/the-new-css-reset/css/reset.css"

import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"

// Devicon import (https://github.com/devicons/devicon)
import '../node_modules/devicon/devicon.min.css'

// Global css
import '../styles/css/variables.css'
import '../styles/css/global.css'


/**
 * _app.jsx
 *
 * @param {?} Component
 * @param {?} pageProps
 * @returns
 */

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>No Name Studio</title>
				<link rel="icon" type="image/png" href="https://cdn.nnsvn.me/img/brand/logo.svg" />

				<meta name="author" content="No Name Studio" />
				<meta name="copyright" content="No Name Studio" />
				<meta name="description" content="We are No Name Studio, an ambitious and close-knit team, driven by a shared vision to turn our dreams into reality!" />

				<meta name="HandheldFriendly" content="true" />
				<meta name="MobileOptimized" content="375" />
				<meta http-equiv="cleartype" content="on" />

				<link rel="apple-touch-icon" href="https://cdn.nnsvn.me/img/brand/logo.svg" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar" content="#db4938" />
				<meta name="theme-color" content="#434ce8" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="No Name Studio" />
				<meta property="og:site_name" content="https://nnsvn.me" />
				<meta property="og:description" content="We are No Name Studio, an ambitious and close-knit team, driven by a shared vision to turn our dreams into reality!" />

				<meta property="og:image" content="https://cdn.nnsvn.me/img/brand/logo.svg" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://nnsvn.me" />
				<meta name="twitter:title" content="No Name Studio" />
				<meta name="twitter:description" content="We are No Name Studio, an ambitious and close-knit team, driven by a shared vision to turn our dreams into reality!" />

			</Head>
			<LazyMotion features={domAnimation}>
				<Layout>
					<Component {...pageProps} />
					<SetGridGap />
					<Analytics />
				</Layout>
			</LazyMotion>
		</>
	)
}