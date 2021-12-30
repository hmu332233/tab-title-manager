type sendMessageProps = { action: any, payload?: object, responseCallback?: (response: any) => void }
const sendMessage = ({ action, payload = {}, responseCallback }: sendMessageProps) => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const [currentTab] = tabs;

    if (!currentTab?.id) {
      return;
    }

    chrome.tabs.sendMessage(currentTab.id, { action, payload }, responseCallback);
  });
}

export default {
  sendMessage,
}