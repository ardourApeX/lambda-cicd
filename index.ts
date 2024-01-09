import { APIGatewayProxyEvent } from 'aws-lambda';
import generateRandom from './generateRandom';
export const handler = async (event: APIGatewayProxyEvent) => {
	const randomNumber = generateRandom();
	const response = {
		statusCode: 200,
		body: JSON.stringify('Hello World from lambda! ' + randomNumber),
	};
	return response;
};
