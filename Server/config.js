const env = process.env.NODE_ENV || 'development'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : '6o10T8i9SpGdwx7AtPIGDw',
		APISecret : 'ikTyy2RM2pLl9pbyTOHOVtmDPZq8ryg0pX6Z'
	},
	production:{
		APIKey : '',
		APISecret : ''
	}
};

module.exports = config[env]
