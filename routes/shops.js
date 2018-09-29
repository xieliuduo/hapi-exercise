const Joi = require('joi');
const GROUP_NAME = 'shops';

function configObj(GROUP_NAME, des) {
    let config = {
        tags: ['api', GROUP_NAME],
        description: des,
    };
    return config;
}
module.exports = [{
        method: 'GET',
        path: `/${GROUP_NAME}`,
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺列表',
            validate: {
                query: {
                    limit: Joi.number().integer().min(1).default(10).description('每页的条数目'),
                    page: Joi.number().integer().min(1).default(1).description('页码数')
                }
            }
        },
        handler: async (request, reply) => {
                //console.log('GROUP_NAME', GROUP_NAME);
                console.log('-----------------------------------------------------------------------------------');
                console.log('request.headers', request.headers);
                console.log('--------------------');
                console.log('request.url', request.url);
                console.log('--------------------');
                console.log('request.info', request.info);
                console.log('GET shops');

                reply(GROUP_NAME);
            },

    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`, //GROUP_NAME 获取店铺的商品列表
        config: configObj(GROUP_NAME, '获取店铺的商品列表'),
        handler: async (request, reply) => {
                reply();
            },

    },
];