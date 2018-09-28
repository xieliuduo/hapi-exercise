module.exports = [{
    method: "GET",
    path: '/',
    handler: (request, reply) => {
        reply('hapi');
        console.log('GET:/')
    },
    config: {
        tags: ['api', 'tests'],
        description: '测试hello-hapi',
    },
}, {
    method: "GET",
    path: '/abc',
    handler: (request, reply) => {
        reply('hello abc');
        console.log('GET:/abc')
    },
    config: {
        tags: ['api', 'ts-abc'],
        description: '测试abc',
    },

}]