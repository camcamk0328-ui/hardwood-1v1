// Registers the slash commands with your server. Run once, or again after changing a command's options.
const { REST, Routes } = require('discord.js');
const config = require('./config');
const commands = [require('./commands/gamenight'), require('./commands/vcping')].map((c) => c.data.toJSON());

const rest = new REST({ version: '10' }).setToken(config.token());

(async () => {
  try {
    console.log(`Registering ${commands.length} commands...`);
    await rest.put(Routes.applicationGuildCommands(config.clientId(), config.guildId()), { body: commands });
    console.log('Done. Commands are live in your server.');
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();
