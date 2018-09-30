'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'shops', {
      id: {
        type: Sequelize.INTEGER, // int类型
        autoIncrement: true, //自增
        primaryKey: true //是主键
      },
      name: {
        type: Sequelize.STRING, // 字符串
        allowNull: false //允许 空值
      },
      thumb_url: Sequelize.STRING, //头像链接
      created_at: Sequelize.DATE, // 时间戳
      updated_at: Sequelize.DATE, // 时间戳
    }
  ),
  // {
  //   /*
  //     Add altering commands here.
  //     Return a promise to correctly handle asynchronicity.

  //     Example:
  //     return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  //   */
  // },

  down: (queryInterface, Sequelize) => {

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('shops');
  }
};