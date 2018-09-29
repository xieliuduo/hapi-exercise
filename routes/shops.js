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
        },
        handler: async (request, reply) => {
                reply();
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