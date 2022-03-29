
import {tasks, users} from '../data/static';

const resolvers = {
	Query: {
		tasks: (parent, args) => tasks,
		task: (parent, { id }) => tasks.find((t) => t.id == id),
		users: (parent, args) => users,
		user: (parent, { id }) => users.find((u) => u.id == id),
	},
	Task: {
		user: ({ userID }, args) => users.find((u) => u.id == userID)
	},
	User: {
		tasks: ({ id }, args) => tasks.filter((t) => t.userID == id)
	},
	Mutation: {
		createUser: (parent, args) => args,
		createTask: async (parent, args) => args
	}
}

export { resolvers } 
