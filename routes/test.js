module.exports = [{
    method: 'GET',
    path: '/testget',
    handler: (request, reply) => {
        reply('hapi');
        console.log('GET:/testget');
    },
    config: {
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