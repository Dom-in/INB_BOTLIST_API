const { post } = require('axios');
 
exports.apiPosteBotlist = async function(token, client, shardss) {
const apiKey = token
let payload = {
  guildCount: client.guilds.cache.size
};

if(shardss) {
const req = await client.shard.fetchClientValues('guilds.cache.size');
  payload = {
    guildCount: req.reduce((p, n) => p + n, 0)
  };
}

  post(`http://inbbotlist.com/api/v1/bots/${client.user.id}/stats`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': apiKey
    }
  }).then(res => {
    return console.log("[SERVER COUNT POSTED!] Status: "+res.status);
  }).catch(err => {
    return console.error("[ERROR] "+err.message);
  });
  }