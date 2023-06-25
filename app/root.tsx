import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { Layout } from './components/Layout'
import variablesStyles from './styles/variables.css'
import baseStyles from './styles/base.css'
import typographyStyles from './styles/typography.css'
import buttonStyles from './styles/button.css'
import galleryStyles from './styles/gallery.css'
import galleryViewStyles from './styles/gallery-view.css'
import nftStyles from './styles/nft.css'
import cardStyles from './styles/card.css'
import panelStyles from './styles/panel.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: variablesStyles },
  { rel: 'stylesheet', href: baseStyles },
  { rel: 'stylesheet', href: typographyStyles },
  { rel: 'stylesheet', href: buttonStyles },
  { rel: 'stylesheet', href: galleryStyles },
  { rel: 'stylesheet', href: galleryViewStyles },
  { rel: 'stylesheet', href: nftStyles },
  { rel: 'stylesheet', href: cardStyles },
  { rel: 'stylesheet', href: panelStyles },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <Layout>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </Layout>
    </html>
  )
}
