// Helpers shared by the commands.

// "<@&roleId>" if a role is configured, otherwise "@everyone".
function pingTarget(roleId) {
  return roleId ? `<@&${roleId}>` : '@everyone';
}

// Only allow the one ping we intend, so messages can't ping anything else.
function allowedMentions(roleId) {
  return roleId ? { roles: [roleId] } : { parse: ['everyone'] };
}

// Use the configured channel if set, otherwise the channel the command ran in.
function resolveChannel(interaction, configuredId) {
  if (!configuredId) return interaction.channel;
  const channel = interaction.client.channels.cache.get(configuredId);
  if (!channel) {
    throw new Error(`Configured channel ${configuredId} not found. Check the ID or that the bot can see it.`);
  }
  return channel;
}

module.exports = { pingTarget, allowedMentions, resolveChannel };
