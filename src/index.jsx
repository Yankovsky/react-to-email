import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import juice from 'juice'
import declassify from 'declassify'
import fs from 'fs'
import path from 'path'

const DIST_PATH = 'dist'
const COMPILED_TEMPLATES_DIR = 'compiled-templates'
const COMPILED_TEMPLATES_PATH = path.join('dist', COMPILED_TEMPLATES_DIR)
const EMAIL_TEMPLATES_DIR = 'email-templates'
const EMAIL_TEMPLATES_PATH = path.join('src', EMAIL_TEMPLATES_DIR)

const generateIndexHtml = (pagesPaths) => {
  const linksList = pagesPaths.map(pagePath => `<li><a href="${ COMPILED_TEMPLATES_DIR }/${ pagePath }.html">${ pagePath }</a></li>`).join('')
  return `<ul style="margin: 100px auto; padding: 20px; width: 600px; border: 1px solid black; font-size: 24px;">${ linksList }</ul>`
}

const generateHtml = (styleTags, body) => {
  return `<!DOCTYPE html>
  <html>
    <head>
        ${ styleTags }
    </head>
    <body style="margin:0">
        ${ body }
    </body>
  </html>`
}


const emailTemplates = fs.readdirSync(EMAIL_TEMPLATES_PATH)
  .map((dirName) => {
    return {
      Component: require(`./${ EMAIL_TEMPLATES_DIR }/${ dirName }`).default,
      pagePath: dirName,
    }
  })

if (!fs.existsSync(COMPILED_TEMPLATES_PATH)) {
  fs.mkdirSync(COMPILED_TEMPLATES_PATH)
}

emailTemplates.forEach(({ Component, pagePath }) => {
  const sheet = new ServerStyleSheet()
  const html = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(<Component/>))
  const styleTags = sheet.getStyleTags()
  const htmlResult = declassify.process(juice(generateHtml(styleTags, html)))
  fs.writeFileSync(path.join(COMPILED_TEMPLATES_PATH, `${ pagePath }.html`), htmlResult)
})

fs.writeFileSync(path.join(DIST_PATH, 'index.html'), generateIndexHtml(emailTemplates.map(({ pagePath }) => pagePath)))
