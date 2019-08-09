module.exports = {
	apps : [{
		name: "myapp-api",
		script: "server.js",
		watch: true,
		env: {
			"Node_ENV":"development",
		},
		env_production: {
			"NODE_ENV" : "production"
		}
	}]}
