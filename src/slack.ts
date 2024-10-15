import { BOT_USER_OAUTH_TOKEN } from "./env";

export type SectionBlock = {
    type: "section",
    text: {
        type: "mrkdwn",
        text: string,
    },
    accessory?: {
        type: "button",
        text: {
            type: "plain_text",
            text: string,
            emoji: boolean
        },
        value: string,
        url: string,
        action_id: string
    }
}

export function postMessage(channelId: string, blocks: SectionBlock[]) {
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        contentType: "application/json",
        method: "post",
        headers: {
            Authorization: "Bearer " + BOT_USER_OAUTH_TOKEN
        },
        payload: JSON.stringify({
            channel: channelId,
            blocks: blocks
        }),
    }

    UrlFetchApp.fetch("https://slack.com/api/chat.postMessage", options)
}