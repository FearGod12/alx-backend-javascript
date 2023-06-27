export default function handleResponseFromAPI(promise) {
  promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch((e) => {
      throw e;
    })
    .finally(() => console.log('Got a response from the API'));
}
