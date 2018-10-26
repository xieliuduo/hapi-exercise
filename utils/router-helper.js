// utils/router-helper.js

const Joi = require('joi');
// 分页
const paginationDefine = {
    limit: Joi.number().integer().min(1).default(10)
        .description('每页的条目数'),
    page: Joi.number().integer().min(1).default(1)
        .description('页码数'),
    pagination: Joi.boolean().description('是否开启分页，默认为true'),
};

//  重构整理公共的 header 定义
const jwtHeaderDefine = {
    headers: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
};


module.exports = {
    paginationDefine,
    jwtHeaderDefine
};