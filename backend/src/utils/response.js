const respondSuccess = res => () => res.status(200).send({ message: 'success' })

const respondResult = res => results => res.status(200).send({ results })

const respondError = res => err => res.status(err.code || 500).send(err.message || { message: 'Internal Server Error' })

module.exports = {
  respondSuccess,
  respondResult,
  respondError
}