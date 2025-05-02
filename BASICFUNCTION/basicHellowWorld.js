exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from AWS Lambda with Node.js!"),
  };
};
