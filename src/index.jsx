import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import juice from 'juice'
import declassify from 'declassify'
import fs from 'fs'
import path from 'path'

import { MyExamplePage } from './emails/RegisterComplete'

const generateHtml = (title, styleTags, body) => {
  return `<!DOCTYPE html>
  <html>
    <head>
        <title>${ title }</title>
        ${ styleTags }
    </head>
    <body style="margin:0">
        ${ body }
    </body>
  </html>`
}

const distPath = 'dist'

const pages = [
  {
    Component: MyExamplePage,
    pagePath: 'my-example-page.html'
  },
]

pages.forEach(({ Component, pagePath }) => {
  const sheet = new ServerStyleSheet()
  const html = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(<Component/>))
  const styleTags = sheet.getStyleTags()
  const htmlResult = declassify.process(juice(generateHtml('My Html page', styleTags, html)))
  fs.writeFileSync(path.join(distPath, pagePath), htmlResult)
})

fs.writeFileSync(path.join(distPath, 'index.html'), pages.map(({pagePath}) => `<a href="${pagePath}">${pagePath}</a>`))
