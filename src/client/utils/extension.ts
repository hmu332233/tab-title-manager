type sendMessageProps = { action: any, payload?: object }
const sendMessage = ({ action, payload = {} }: sendMessageProps) => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const [currentTab] = tabs;

    if (!currentTab?.id) {
      return;
    }

    chrome.tabs.sendMessage(currentTab.id, { action, payload });
  });
}

export default {
  sendMessage,
}