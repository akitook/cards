const functions = require('firebase-functions')
const { admin } = require('./config')
const db = admin.firestore()

const CONFIG = functions.config()
const OGP_IMG_WIDTH = 630
const OGP_IMG_HEIGHT = 630

const func = functions.https.onRequest((req, res) => {
  const [, , cardId] = req.path.split('/')
  return db
    .collection('cards')
    .doc(cardId)
    .get()
    .then(snap => {
      if (!snap) {
        res.status(404).end('404 Not Found')
        return
      }
      const cardData = snap ? snap.data() : {}
      const html = createHtml(cardData)
      res.set('Cache-Control', 'public, max-age=600, s-maxage=600')
      res.status(200).end(html)
      return
    })
    .catch(err => {
      console.warn(err)
      // 略 : エラー時はデフォルトのhtml（固定のOGP）を返す
    })
})

const createHtml = cardData => {
  const SITEURL = `https://cards.hauer.jp`
  const PAGEURL = `${SITEURL}/card/${cardData.id}`
  const FROM_NAME = cardData.template.from.length
    ? cardData.template.from
    : 'me'
  const TO_NAME = cardData.template.to.length ? cardData.template.to : 'to'
  const TITLE = `${FROM_NAME} から ${TO_NAME} へ`
  const DESCRIPTION = 'メッセージカードを贈ります。'
  const OG_IMAGE = `${SITEURL}/templates/${cardData.template.category}/${
    cardData.template.title
  }@2x.jpg`
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>${TITLE}</title>
    <meta property="description" content="${DESCRIPTION}">
    <meta property="og:title" content="${TITLE}">
    <meta property="og:image" content="${OG_IMAGE}">
    <meta property="og:image:width" content="${OGP_IMG_WIDTH}">
    <meta property="og:image:height" content="${OGP_IMG_HEIGHT}">
    <meta property="og:description" content="${DESCRIPTION}">
    <meta property="og:url" content="${PAGEURL}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="cards">
    <meta property="fb:app_id" content="2241313329438165">
    <meta name="twitter:site" content="${SITEURL}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${TITLE}">
    <meta name="twitter:image" content="${OG_IMAGE}">
    <meta name="twitter:description" content="${DESCRIPTION}">
  </head>
  <body>
    <script type="text/javascript">window.location="/card?id=${
      cardData.id
    }";</script>
  </body>
</html>
`
}

module.exports = func
