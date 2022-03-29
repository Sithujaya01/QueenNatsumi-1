/* Copyright (C) 2020 Natsumi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Natsumi - CyberDraxo
*/

const Build = require('../build');
const { DataTypes } = require('sequelize');

const FiltersDB = Build.DATABASE.define('filter', {
    chat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Pnatsumi: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    regex: {
        type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false
    }
});

async function getFilter(jid = null, filter = null) {
    var Wher = {chat: jid};
    if (filter !== null) Wher.push({Pnatsumi: filter});
    var Msg = await FiltersDB.findAll({
        where: Wher
    });

    if (Msg.length < 1) {
        return false;
    } else {
        return Msg;
    }
}


async function setFilter(jid = null, filter = null, tex = null, regx = false) {
    var Msg = await FiltersDB.findAll({
        where: {
            chat: jid,
            Pnatsumi: filter
        }
    });

    if (Msg.length < 1) {
        return await FiltersDB.create({ chat: jid, Pnatsumi: filter, text: tex, regex: regx });
    } else {
        return await Msg[0].update({ chat: jid, Pnatsumi: filter, text: tex, regex: regx });
    }
}

async function deleteFilter(jid = null, filter) {
    var Msg = await FiltersDB.findAll({
        where: {
            chat: jid,
            Pnatsumi: filter
        }
    });
    if (Msg.length < 1) {
        return false;
    } else {
        return await Msg[0].destroy();
    }
}

module.exports = {
    FiltersDB: FiltersDB,
    getFilter: getFilter,
    setFilter: setFilter,
    deleteFilter: deleteFilter
};
