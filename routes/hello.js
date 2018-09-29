module.exports = [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('hapi');
        console.log('GET:/');
    },
    config: {
        tags: ['api', 'tests'],
        description: '测试hello-hapi',
    },
}, {
    method: 'GET',
    path: '/abc',
    handler: (request, reply) => {
        reply('hello abc');
        console.log('GET:/abc');
    },
    config: {
        tags: ['api', 'tests'],
        description: '测试abc',
    },
}, {
    method: 'POST',
    path: '/123',
    handler: (request, reply) => {
        reply('hello 123');
        console.log('POST:/123');
    },
    config: {
        tags: ['api', 'tests'],
        description: 'post-123'
    }
}];