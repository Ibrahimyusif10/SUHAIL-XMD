const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Val1P1mHltY3lPg9jr3c";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Val1P1mHltY3lPg9jr3c" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ║𓆩ᴀʙʙᴀ𓆪║" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347038577516";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_52_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg1LFxuICAgICAgICA5LFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDc3LFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyLFxuICAgICAgICA3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQVg3cmp0dW1TZ2hwWmVLdUhoTDAwQnZhRUFDeHdRYnMwK2djb3JsM2IwRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZE9sQTlONVBTUFc2RUV4dllCZUlDQVwiLFxuICBcInBob25lSWRcIjogXCIwZGEzNWNmMy1kZjU3LTRjN2ItOTY0My1kZjY2MTI0ODM1ZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyMixcbiAgICAgIDk2LFxuICAgICAgMjEzLFxuICAgICAgMjEyLFxuICAgICAgMTM0LFxuICAgICAgMjU0LFxuICAgICAgNSxcbiAgICAgIDIwNyxcbiAgICAgIDIxOSxcbiAgICAgIDIxOCxcbiAgICAgIDI0NCxcbiAgICAgIDI1NCxcbiAgICAgIDIzMixcbiAgICAgIDY0LFxuICAgICAgMSxcbiAgICAgIDE2OSxcbiAgICAgIDEyNyxcbiAgICAgIDAsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgOCxcbiAgICAgIDE3LFxuICAgICAgMjIwLFxuICAgICAgNjAsXG4gICAgICA1LFxuICAgICAgMTMxLFxuICAgICAgMTYxLFxuICAgICAgODksXG4gICAgICA5MixcbiAgICAgIDIyOCxcbiAgICAgIDE2OCxcbiAgICAgIDE5MyxcbiAgICAgIDE0NCxcbiAgICAgIDE3MSxcbiAgICAgIDkzLFxuICAgICAgOTEsXG4gICAgICAyNCxcbiAgICAgIDEyOSxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1UVlpHTFQ4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM4NTc3NTE2OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjkyMTc2NjAxNjIyNzM6NTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSys4akNVUTJ1djd0d1lZRENBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPK3RhcFR5WmZGa3FBaXVaeFN6MUhKVXVEcmM2Zzlxa0tRZER2THRmb2hJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNMd2pqazFlMWtUVHZJUWxxS2NLdFRmcWdkOTJPUEpWZGNwTTEza2RCNTdBT3IyM1BtSVQxM29udnFLREFXL291RG55aGFGdU5xdW16ZStxNzE4YkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNaMGs1UjY1MzFoejFUbjlkOTBKSzdoTlAwVld0aG91SkFJWmtVZHZBemNxdXMwWTBqWGZJTVpLL01wWFpwWEpEbTVlaXdWdEZ0Rm0zclFweHdyWWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzg1Nzc1MTY6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzk4NTExOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU4yM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjIzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQmNrNDNJMXVFU292RDIvU2RDM0dwdVl6Tmtpd3h3MzFBS1BXWUVYWlFnST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3Nzc5ODk1OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "sk_dfbeada7ab5270d2ee89991887ce52c5f52918837be59c02",
