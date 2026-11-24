# Hardwood 1v1

A side-view basketball game in one HTML file: story mode with 10,000 levels, ranked, parties with friends, Knockout, Survival, a 3-Point Contest, Ult Frenzy, 100+ ults and emotes, a shop, trophies and a leaderboard.

## Play it

Download `index.html`, open it in a browser, and play. The game checks this repo for updates and shows an **Update available** button on the menu when a new version is pushed.

Works on phones too (touch controls), and offline for solo modes.

## Rules

- **Don't copy or re-post it.** This is an original game; see `LICENSE`. Share the file or the link with friends, but don't upload it anywhere else as your own.
- **Don't cheat.** The game has a Referee that checks every save. Edited saves and impossible stats get locked out of ranked, friends and the leaderboard, and the creator can ban them for good.
- Be cool in chat.

## Share it with friends

> 🏀 **Hardwood 1v1** — a 1v1 basketball game with 10,000 story levels, ranked, Knockout, ults, emotes and a leaderboard. One file, works on phone and computer, updates itself. Download `index.html` here, open it, and add me on the Friends screen with my friend code.

## Your own friends server (when the default is blocked)

Friends and online ranked use a small matchmaking server. Some school and work networks block the default one. You can run your own in a few minutes, on any host that runs Node.js (a free tier on Render, Railway or Glitch works):

1. Put the `friends-server` folder somewhere online and run `npm install`, then `npm start`.
2. Copy its web address (for example `https://your-app.example`).
3. In the game, open **Settings → Friends server (advanced)**, paste the address and press **Save**. Then press **Check my connection**.

Friends who want to play with you need the same address saved. Leave the box empty (or press **Use default**) to go back to the default server.

This only changes which matchmaking server is used. Your friends and ranked games still need your network to allow the connection, so some school networks may still block it.
