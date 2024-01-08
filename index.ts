import { APIGatewayProxyEvent } from 'aws-lambda';
export const handler = async (event: APIGatewayProxyEvent) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify('Hello World from lambda!'),
	};
	return response;
};
