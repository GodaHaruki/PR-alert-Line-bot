import { PullRequestEvent } from "@octokit/webhooks-types"
import { onPullRequestOpened, onPullRequestSynchronized } from "./webhookActionHandlers";

export function doPost(evt: GoogleAppsScript.Events.DoPost) {
  const prEvt: PullRequestEvent = JSON.parse(evt.postData.contents);

  switch (prEvt.action) {
    case "opened":
      onPullRequestOpened(prEvt);
      break;
    case "synchronize":
      onPullRequestSynchronized(prEvt);
      break;
  }
}