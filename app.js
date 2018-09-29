require('env2')('./.env'); //基于 env2模块加载 .env配置文件
const Hapi = require('hapi');
const config = require('./config'); // 引入 配置文件
const routerHello = require('./routes/hello'); //  路由  hello

const routesShops = require('./routes/shops'); //路由  店铺

const routesOrders = require('./routes/orders'); //路由 订单
//引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');




const server = new Hapi.Server();

// 配置服务器 host 和 端口
server.connection({
	port: config.port,
	host: config.host
});

const init = async () => {
	await server.register([
		//为系统使用 hapi-swagger
		...pluginHapiSwagger

	]);
	server.route([
		...routerHello,
		...routesShops,
		...routesOrders
	]);

	//启动服务
	await server.start();
	console.log(`Server running at ${server.info.uri}`);
};
//调用
init();