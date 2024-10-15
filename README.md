# PR-alert-Line-bot
## What is this
Google App Script(GAS) Project  
Github Webhook => Line Messagin API

## How to deploy
1. init repository
```bash
npm i
...
```
2. create App Script Project by clasp
```bash
clasp login
...
clasp create
```
> use "clasp login --no-localhost" for remote
3. modify .clasp.json
```diff
{
  "scriptId": ...,
- "rootDir": ...,
+ "roodDir": "./dist",
}
```
4. create .env file
```env
BOT_USER_OAUTH_TOKEN=""
CHANNEL_IDS="["Slack Channel Id"]"
LOG_SHEET_ID="Your Log Sheet Id"
LOG_SHEET_NAME="Your Log Sheet Name"
```
5. deploy
```bash
npm run deploy
```