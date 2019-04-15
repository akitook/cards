import firebase from '~/plugins/firebase'

const firestore = firebase.firestore()

export default {
  postCard(template, canvasData) {
    console.log(canvasData)
    return new Promise((resolve, reject) => {
      const created = firebase.firestore.FieldValue.serverTimestamp()
      const ref = firestore.collection('cards').doc()
      console.log(ref)
      const docId = ref.id
      console.log(docId)

      const postContent = {
        id: docId,
        authorId: '0000',
        canvas: JSON.parse(JSON.stringify(canvasData)),
        template: template,
        created: created
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
