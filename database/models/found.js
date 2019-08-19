module.exports = (sequelize, Sequelize) => {
  const Found = sequelize.define('Found', {
    value: Sequelize.STRING
  });
  return Found;
}