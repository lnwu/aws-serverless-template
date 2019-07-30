import {
  APIGatewayProxyEvent,
  Handler,
  APIGatewayProxyResult
} from "aws-lambda"

export const hello: Handler = async (event: APIGatewayProxyEvent) => {
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello Serverless in ${process.env.STAGE} and ${process.env.TEST_ENV}`,
        input: event
      },
      null,
      2
    )
  }
  return response
}
