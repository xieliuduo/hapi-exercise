const {
    jwtHeaderDefine
} = require('../utils/router-helper');

module.exports = [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {

        console.log(request.auth.credentials);

        reply('hapi');
        console.log('GET:/');
    },
    config: {
        //auth: false,
        tags: ['api', 'tests'],
        description: '测试hello-hapi',
        validate: {
            ...jwtHeaderDefine, // 增加需要 jwt auth 认证的接口 header 校验
        }
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