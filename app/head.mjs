import { getStyles } from '@enhance/arc-plugin-styles'

export default function Head(state) {
  const { store = {} } = state

  // pageTitle is set in /app/preflight.mjs
  const { pageTitle = '' } = store

  // Enhance Styles
  // CSS will be included as a <link> tag for local development.
  // For deployments, CSS will be included as a <style> tag in order to eliminate the blocking network request created by <link> tags.
  const styles = process.env.ARC_LOCAL
    ? getStyles.linkTag()
    : getStyles.styleTag()

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="title" content="${pageTitle}" />
      <meta name="description" content="Local First is a exploration into build an offline Enhance app." />
      <meta name="theme-color" content="#a0094a"/>
      <!-- Open Graph -->
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://local-fih.begin.app/' />
      <meta property='og:title' content='${pageTitle}' />
      <meta property='og:description' content='Local First is a exploration into build an offline Enhance app.' />
      <!-- meta property='og:image' content='https://local-fih.begin.app/enhance-meta-image.jpg' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='628' / -->
      <!-- Twitter -->
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://local-fih.begin.app/' />
      <meta property='twitter:title' content='${pageTitle}' />
      <meta property='twitter:description' content='Local First is a exploration into build an offline Enhance app.' />
      <!-- meta property='twitter:image' content='https://local-fih.begin.app/enhance-meta-image.jpg' /-->
      <title>Local First</title>
      ${styles}
      <style>
        :root {
          color-scheme: only light;
        }
        body {
          color: var(--dark);
          background-color: var(--light);
          text-rendering: optimizeLegibility;
        }
      </style>
      <link rel="stylesheet" href="/_public/e-global.css" />
      <link rel="icon" href="/_public/favicon.svg" />
      <link rel="manifest" href="/_public/app.webmanifest" />
      <link rel="apple-touch-icon" href="/_public/apple-touch-icon.png">
      <script async type="module" src="/_public/browser/sw.mjs"></script>
    </head>
    <body class="font-sans bg-gray-1">
`
}
