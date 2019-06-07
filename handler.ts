import { APIGatewayEvent, Handler } from "aws-lambda"

export const hello: Handler = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello Serverless in ${process.env.STAGE}`,
        input: event
      },
      null,
      2
    )
  }
}
