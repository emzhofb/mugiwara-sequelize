'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    nama: DataTypes.STRING,
    peran: DataTypes.STRING,
    haki: DataTypes.STRING,
    asal: DataTypes.STRING
  }, {});
  Member.associate = function(models) {
    // associations can be defined here
  };
  return Member;
};