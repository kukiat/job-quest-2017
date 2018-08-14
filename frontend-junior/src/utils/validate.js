const validateLength = (text) => {
  const pathern = /^.{5,25}$/
  return pathern.test(text)
}

const cutSpaceText = (text) => text.trim().replace(/\s\s+/g, ' ')

const validateTitle = (text) => {
  const result = cutSpaceText(text)
  return validateLength(result)
}

export const validate = (title) => ({
  title: validateTitle(title)
})