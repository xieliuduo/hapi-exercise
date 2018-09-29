const Joi = require('joi');
const GROUP_NAME = 'orders';

module.exports = [{
        method: 'POST',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
                console.log(request);

                reply(GROUP_NAME);
            },
            config: {
                tags: ['api', GROUP_NAME],
                description: '创建订单',
                validate: {
                    payload: {
                        goodsList: Joi.array().items(
                            Joi.object().keys({
                                goods_id: Joi.number().integer(),
                                count: Joi.number().integer()
                            })
                        )
                    },
                    headers: Joi.object({
                        authorization: Joi.string().required()
                    }).unknown()
                }
            },
    },
    {
        method: 'POST',
        path: `/${GROUP_NAME}/{orderId}/pay`,
        handler: async (request, reply) => {
                console.log(request);
                reply(GROUP_NAME);
            },
            config: {
                tags: ['api', GROUP_NAME],
                description: '支付某条订单',
                validate: {
                    params: {
                        orderId: Joi.string().required(),
                    }
                }
            },
    },
];