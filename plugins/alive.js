const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `
╭━━〔 𝗤𝘶𝘦𝘦𝘯ₓ* ```THISHU``` *-𝗠𝗗 V1.0*〕━━┈⊷
┃◈╭────────────────·๏
┃◈┣━❯❯ *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┣━❯❯ *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┣━❯❯ *⚙️ HostName*: ${os.hostname()}
┃◈┣━❯❯ *👨‍💻 Owner*: 𝗞丨几Ꮆ ᗪ乇ᐯ丨ㄥ👑😈
┃◈┣━❯❯ *🧬 Version*: 1.0.0
┃◈┣━❯❯ 𝐈 𝐀𝐌 𝐌𝐄𝐌𝐁𝐄𝐑 𝐎𝐅 𝐊𝐈𝐍𝐆𝐃𝐎𝐌 𝐎𝐅 𝐃𝐄𝐕𝐈𝐋
┃◈└───────────┈⊷
╰──────────────┈⊷
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴛʜɪꜱʜᴜ ᴛᴇᴀᴍ🧚‍♂️
`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://ibb.co/mrKXJ2mL` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363416414262287@newsletter',
                    newsletterName: 'QUEEN THISHU-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

//120363416414262287@newsletter