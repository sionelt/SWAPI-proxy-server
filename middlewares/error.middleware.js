module.exports = () => (error, req, res, next) => {
  const { statusCode, message } = error

  console.error(message)

  res.status(statusCode || 500).json({
    success: false,
    message,
  })
}
