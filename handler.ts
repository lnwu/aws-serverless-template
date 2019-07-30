import {
  APIGatewayProxyEvent,
  Handler,
  APIGatewayProxyResult,
  Context
} from "aws-lambda"

export const hello: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  console.log("REQUEST ID: ", event.requestContext.requestId)
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello Serverless in ${process.env.STAGE} and ${process.env.TEST_ENV}`,
        input: event,
        context: context
      },
      null,
      2
    )
  }
  return response
}
