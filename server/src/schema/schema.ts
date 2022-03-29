import { gql } from 'apollo-server-express';

const typeDefs = gql`
	type Task {
		id: ID
		title: String
		description: String
		icon: String
		stamp: String
		user: User
	}

	type User {
		id: ID!
		firstName: String
		lastName: String
		tasks: [Task]
	}

	# ROOT TYPE
	type Query {
		tasks: [Task]
		task(id: ID!): Task
		users: [User]
		user(id: ID!): User
	}

	type Mutation {
		createTask(title: String, description: String, icon: String, stamp: String): Task
		createUser(firstName: String, lastName: String): User
	}
`

export { typeDefs }
