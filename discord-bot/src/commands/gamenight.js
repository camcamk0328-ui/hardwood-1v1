const { SlashCommandBuilder } = require('discord.js');
const config = require('../config');
const { pingTarget, allowedMentions, resolveChannel } = require('../util');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gamenight')
    .setDescription('Ping everyone that game night is happening')
    .addStringOption((opt) =>
      opt.setName('time').setDescription('When it starts, e.g. "8pm EST" or "in 30 min"').setRequired(true)
    )
    .addStringOption((opt) =>
      opt.setName('game').setDescription('What game we are playing').setRequired(false)
    )
    .addStringOption((opt) =>
      opt.setName('note').setDescription('Anything extra to say').setRequired(false)
    ),

  async execute(interaction) {
    const time = interaction.options.getString('time', true);
    const game = interaction.options.getString('game');
    const note = interaction.options.getString('note');

    const lines = [`${pingTarget(config.pingRoleId)} 🏀 **Game night!**`, `⏰ Starts: **${time}**`];
    if (game) lines.push(`🎮 Playing: **${game}**`);
    if (note) lines.push(`📝 ${note}`);
    lines.push(`Hop in when you can. Reply here if you're in.`);

    const channel = resolveChannel(interaction, config.gameNightChannelId);
    await channel.send({ content: lines.join('\n'), allowedMentions: allowedMentions(config.pingRoleId) });

    const where = channel.id === interaction.channelId ? '' : ` in <#${channel.id}>`;
    await interaction.reply({ content: `Game night ping sent${where}.`, ephemeral: true });
  },
};
