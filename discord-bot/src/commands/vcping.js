const { SlashCommandBuilder, ChannelType } = require('discord.js');
const config = require('../config');
const { pingTarget, allowedMentions, resolveChannel } = require('../util');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vcping')
    .setDescription('Ping everyone to hop into a voice channel')
    .addChannelOption((opt) =>
      opt
        .setName('channel')
        .setDescription('The voice channel to join (defaults to the one you are in)')
        .addChannelTypes(ChannelType.GuildVoice, ChannelType.GuildStageVoice)
        .setRequired(false)
    )
    .addStringOption((opt) =>
      opt.setName('message').setDescription('Optional message, e.g. "casting starts now"').setRequired(false)
    ),

  async execute(interaction) {
    let voice = interaction.options.getChannel('channel');
    if (!voice) {
      // Fall back to the voice channel the caller is currently in.
      const member = await interaction.guild.members.fetch(interaction.user.id);
      voice = member.voice.channel;
    }
    if (!voice) {
      await interaction.reply({
        content: 'Join a voice channel first, or pick one in the `channel` option.',
        ephemeral: true,
      });
      return;
    }

    const message = interaction.options.getString('message');
    const lines = [`${pingTarget(config.pingRoleId)} 🎙️ **Jump in VC!** <#${voice.id}>`];
    if (message) lines.push(message);
    lines.push(`Started by <@${interaction.user.id}>`);

    const channel = resolveChannel(interaction, config.vcPingChannelId);
    await channel.send({ content: lines.join('\n'), allowedMentions: allowedMentions(config.pingRoleId) });

    const where = channel.id === interaction.channelId ? '' : ` in <#${channel.id}>`;
    await interaction.reply({ content: `VC ping sent${where}.`, ephemeral: true });
  },
};
