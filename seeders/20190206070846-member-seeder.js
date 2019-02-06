'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Members', [{
        nama: 'Monkey D. Luffy',
        peran: 'Kapten',
        haki: 'Haoshaku, Bushoshoku, Kenbunshoku',
        asal: 'East Blue',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Roronoa Zoro',
        peran: 'Wakil Kapten',
        haki: 'Bushoshoku, Kenbunshoku',
        asal: 'East Blue',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Nami',
        peran: 'Navigator',
        haki: '-',
        asal: 'East Blue',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Usopp',
        peran: 'Sniper',
        haki: 'Kenbunshoku',
        asal: 'East Blue',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Vinsmoke Sanji',
        peran: 'Koki',
        haki: 'Bushoshoku, Kenbunshoku',
        asal: 'North Blue',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Nefertari Vivi',
        peran: 'Invalid',
        haki: '-',
        asal: 'Grand Line',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Tony Tony Chopper',
        peran: 'Dokter',
        haki: '-',
        asal: 'Grand Line',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Nico Robin',
        peran: 'Arkeolog',
        haki: '-',
        asal: 'West Blue',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Franky',
        peran: 'Tukang Kayu',
        haki: '-',
        asal: 'Grand Line',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Brook',
        peran: 'Musisi',
        haki: '-',
        asal: 'Invalid',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Jinbei',
        peran: 'Kemudi Kapal',
        haki: 'Bushoshoku',
        asal: 'Grand Line',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nama: 'Trafalgar D. Water Law',
        peran: 'Aliansi',
        haki: 'Bushoshoku',
        asal: 'North Blue',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
      nama: 'Klan Kouzuki',
      peran: 'Aliansi',
      haki: '-',
      asal: '-',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Suku Mink',
      peran: 'Aliansi',
      haki: '-',
      asal: '-',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
        nama: 'Cavendish',
        peran: 'Komandan Divisi 1',
        haki: '-',
        asal: '-',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        nama: 'Bartolomeo',
        peran: 'Komandan Divisi 2',
        haki: '-',
        asal: '-',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        nama: 'Don Sai',
        peran: 'Komandan Divisi 3',
        haki: '-',
        asal: '-',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        nama: 'Ideo',
        peran: 'Komandan Divisi 4',
        haki: '-',
        asal: '-',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        nama: 'leo',
        peran: 'Komandan Divisi 5',
        haki: '-',
        asal: '-',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        nama: 'Hajrudin',
        peran: 'Komandan Divisi 6',
        haki: '-',
        asal: '-',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        nama: 'Orlumbus',
        peran: 'Komandan Divisi 7',
        haki: '-',
        asal: '-',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Members', null, {});
  }
};
