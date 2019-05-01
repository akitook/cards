import firebase from '~/plugins/firebase'

const firestore = firebase.firestore()

export default {
  postCard(template, canvasData, cardSize) {
    return new Promise((resolve, reject) => {
      const created = firebase.firestore.FieldValue.serverTimestamp()
      const ref = firestore.collection('cards').doc()
      const docId = ref.id
      const postContent = {
        id: docId,
        authorId: '0000',
        canvas: JSON.parse(JSON.stringify(canvasData)),
        template: template,
        created: created,
        size: cardSize
      }
      ref
        .set(postContent)
        .then(_ => {
          resolve(postContent)
        })
        .catch(err => {
          console.error('Error adding document: ', err)
          reject(err)
        })
    })
  },
  fetchCardById(id) {
    return new Promise((resolve, reject) => {
      firestore
        .collection('cards')
        .doc(id)
        .get()
        .then(querySnapshot => {
          resolve(querySnapshot.data())
        })
        .catch(err => {
          resolve(err)
        })
    })
  }
}
