let fetch = require("node-fetch");

let axios = require("axios");

let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `*[❗] Insira o link da página https://xnxx.com*\n\n*Pode usar o comando #xnxxsearch + texto, para buscar videos sobre o texto posto*`;

conn.reply(m.chat, `
*[❗] Aguarde um momento..*

*✅ Estou baixando seu vídeo, isso pode levar de 5 a 10 minutos, por favor, seja paciente*
`.trim(), m);

  let vidurl = args[0].replace("xnxx", "onlineonlineoxnn"); 

  let res = axios

    .get(

      API("https://api.lolhuman.xyz/api/xnxx?apikey=56c3f2f2254d87b84051ab78&url=https://www.xnxx.com", {

        videourl: vidurl,

        mstr: "9773",

        _: "1633710434836",

      })

    )

    .then((res) => {

      if (res.status != 200) throw `${res.status} ${res.statusText}`;

      let data = JSON.parse(res.data.replace(/[()]/g, ""));

      conn.sendFile(m.chat, data.Video_6_Url, "Error.mp4", "*Aqui tem 😏🔥*", m);

    });

};

handler.help = ["xnxx"].map((v) => v + " <Link>");

handler.tags = ["nsfw"];

handler.command = /^(xnxx)$/i;

handler.limit = false;

handler.nsfw = false

module.exports = handler;
