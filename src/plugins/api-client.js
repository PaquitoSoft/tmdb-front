import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

class ApiClient {
	constructor({ apiUrl, userId }) {
		this.client = new Lokka({
			transport: new Transport(apiUrl, {
				headers: { userToken: userId },
				credentials: false
			})
		});
	}

	sendQuery({ query, variables }) {
		return this.client.query(query, variables)
			.then(data => ({ data }));
	}

	sendMutation({ mutation, variables }) {
		return this.client.mutate(mutation, variables);
	}

	createFragment(fragmentDefinition) {
		return this.client.createFragment(fragmentDefinition);
	}
}

export default ApiClient;
