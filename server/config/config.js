var env = process.env.NODE_ENV || 'development';
console.log('env ******', env)

if(env === 'development'){
    process.env.PORT = 8080
    process.env.MONGODB_URI = 'mongodb://localhost/TodoApp';
} else if (env === 'test'){
    process.env.PORT = 8080
    process.env.MONGODB_URI = 'mongodb://localhost/TodoAppTest';
}