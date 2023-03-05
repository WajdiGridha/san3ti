module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define("services", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Service;
};
