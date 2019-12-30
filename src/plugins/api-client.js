import { GraphQLClient } from 'graphql-request';

class ApiClient {
	constructor({ apiUrl, userId }) {
		this.client = new GraphQLClient(apiUrl, {
			headers: { userToken: userId }
		});
	}

	sendQuery({ query, variables }) {
		return this.client.request(query, variables)
			.then(data => ({ data }));
	}

	sendMutation({ mutation, variables }) {
		return this.client.request(mutation, variables)
			.then(data => ({ data }));
	}

	createFragment(fragmentDefinition) {
		return this.client.createFragment(fragmentDefinition);
	}
}

export default ApiClient;
