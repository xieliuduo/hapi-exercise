require('env2')('./.env'); //基于 env2模块加载 .env配置文件
const Hapi = require('hapi');
const config = require('./config'); // 引入 配置文件
const routerHello = require('./routes/hello'); //  路由  hello

const routesShops = require('./routes/shops'); //路由  店铺

const routesOrders = require('./routes/orders'); //路由 订单

const routesUsers = require('./routes/users'); //用户 

const routesTest = require('./routes/test'); //用户
//引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');
// 分页插件
const pluginHapiPagination = require('./plugins/hapi-pagination');

const hapiAuthJWT2 = require('hapi-auth-jwt2');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');

const server = new Hapi.Server();

// 配置服务器 host 和 端口
server.connection({
	port: config.port,
	host: config.host
});

const init = async () => {
	await server.register([
		//为系统使用 hapi-swagger
		...pluginHapiSwagger,
		pluginHapiPagination,
		hapiAuthJWT2

	]);

	server.route([
		...routerHello,
		...routesShops,
		...routesOrders,
		...routesUsers,
		...routesTest
	]);
	pluginHapiAuthJWT2(server); // 一旦开启 就要加上权限 验证 请求header 加上 auth
	//启动服务
	await server.start();
	console.log(`Server running at ${server.info.uri}`);
};
//调用
init();