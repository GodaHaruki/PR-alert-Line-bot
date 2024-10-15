// all of them are required

export const BOT_USER_OAUTH_TOKEN: string = process.env.BOT_USER_OAUTH_TOKEN!; // "00000"
export const CHANNEL_IDS: string[] = JSON.parse(process.env.CHANNEL_IDS!)
export const LOG_SHEET_ID: string = process.env.LOG_SHEET_ID!;
export const LOG_SHEET_NAME: string = process.env.LOG_SHEET_NAME!;