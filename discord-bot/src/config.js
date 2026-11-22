require('dotenv').config();

function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name} (see .env.example)`);
  }
  return value;
}

module.exports = {
  token: () => required('DISCORD_TOKEN'),
  clientId: () => required('CLIENT_ID'),
  guildId: () => required('GUILD_ID'),
  pingRoleId: process.env.PING_ROLE_ID || '',
  gameNightChannelId: process.env.GAME_NIGHT_CHANNEL_ID || '',
  vcPingChannelId: process.env.VC_PING_CHANNEL_ID || '',
};
