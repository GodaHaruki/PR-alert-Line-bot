import { PullRequestOpenedEvent, PullRequestSynchronizeEvent } from "@octokit/webhooks-types";
import { postMessage, SectionBlock } from "./slack";
import { CHANNEL_IDS } from "./env";
import { log } from "./log";

export function onPullRequestOpened(evt: PullRequestOpenedEvent) {
    CHANNEL_IDS.forEach(id => {
        const msgs: SectionBlock[] = [{
            type: "section",
            text: {
                type: "mrkdwn",
                text: "PullRequestCreated"
            },
            accessory: {
                type: "button",
                text: {
                    type: "plain_text",
                    text: "View",
                    emoji: true
                },
                value: "GithubLink",
                url: evt.pull_request.html_url,
                action_id: "visit-link"
            }
        },
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: `By *${evt.pull_request.user.login}*
on ${evt.pull_request.created_at}
${evt.pull_request.html_url}`
            }
        }
        ]

        log(JSON.stringify(msgs))
        postMessage(id, msgs)
    })
}

export function onPullRequestSynchronized(evt: PullRequestSynchronizeEvent) {
    if (evt.pull_request.merged) {
        CHANNEL_IDS.forEach(id => {
            const msgs: SectionBlock[] = [{
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "PullRequestMerged"
                },
                accessory: {
                    type: "button",
                    text: {
                        type: "plain_text",
                        text: "View",
                        emoji: true
                    },
                    value: "GithubLink",
                    url: evt.pull_request.html_url,
                    action_id: "visit-link"
                }
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `By *${evt.pull_request.merged_by?.login}*
on ${evt.pull_request.merged_at}
${evt.pull_request.html_url}`
                }
            }
            ]

            log(JSON.stringify(msgs))
            postMessage(id, msgs)
        })
    }
}