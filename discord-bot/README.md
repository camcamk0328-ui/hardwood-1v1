# Casting Ping Bot

A small Discord bot with two commands:

- `/gamenight time:<when> [game] [note]`: pings the role (or @everyone) that game night is starting.
- `/vcping [channel] [message]`: pings the role (or @everyone) to jump into a voice channel. If you leave `channel` empty it uses the voice channel you're in.

## Setup (one time)

1. Go to https://discord.com/developers/applications, click **New Application**.
2. **Bot** tab: click **Reset Token**, copy it. (Don't enable any privileged intents; they aren't needed.)
3. **General Information** tab: copy the **Application ID**.
4. Invite the bot to your server with this URL (replace `CLIENT_ID`):
   `https://discord.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot%20applications.commands&permissions=2147485696`
   (Permissions: View Channels, Send Messages, Mention Everyone/Roles, Connect.)
5. In Discord, turn on Developer Mode (User Settings → Advanced), then right-click your server → **Copy Server ID**, and right-click your casting role → **Copy Role ID**.
6. Install and configure:
   ```
   cd discord-bot
   npm install
   cp .env.example .env   # then fill in the values
   ```
7. Register the slash commands (run again only if you change command options):
   ```
   npm run deploy
   ```
8. Start the bot and leave it running:
   ```
   npm start
   ```

The bot has to stay running on a machine that's on (your PC is fine). For it to be always on, host it on a small VPS or a service like Railway/Render.

## Notes

- Pings only go to the role in `PING_ROLE_ID`. If it's empty, the bot pings @everyone.
- Every message sets `allowedMentions`, so it can't accidentally ping anything other than the intended role/everyone.
- Set `GAME_NIGHT_CHANNEL_ID` / `VC_PING_CHANNEL_ID` to post to fixed channels; otherwise pings go to the channel the command was run in.
