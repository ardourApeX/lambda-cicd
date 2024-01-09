import { APIGatewayProxyEvent } from 'aws-lambda';
import randomString from 'randomstring';
export const handler = async (event: APIGatewayProxyEvent) => {
	const randomNumber = randomString.generate();
	const response = {
		statusCode: 200,
		body: JSON.stringify('Hello World from lambda! ' + randomNumber),
	};
	return response;
};
