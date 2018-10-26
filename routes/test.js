module.exports = [{
    method: 'GET',
    path: '/testget',
    handler: (request, reply) => {
        reply('hapi');
        console.log('GET:/testget');
    },
    config: {
        auth: false, // auth=false 可以忽略 jwt 检验
        tags: ['api', 'mytest'],
        description: '测试testget',
    },
}, {
    method: 'POST',
    path: '/testpost',
    handler: (request, reply) => {
        reply('hello 123');
        console.log('POST:/testpost');
    },
    config: {
        tags: ['api', 'mytest'],
        description: '测试testpost'
    }
}];