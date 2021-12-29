console.log('content script loaded!');
import { EXTENSION_ACTION } from 'shared/constants';

chrome.runtime.onMessage.addListener(message => {
  console.log(message)
  const { action } = message;
  switch (action) {
    case EXTENSION_ACTION.CHANGE_TITLE:
      const { payload: tabTitles } = message;
      const { hostname } = window.location;
      
      const tabTitle = tabTitles.find(({ url }) => url === hostname);
      const { title } = tabTitle;
      document.title = title;
    break;
  }
});



// chrome.storage.sync.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });

// chrome.storage.sync.get(['key'], function(result) {
//   console.log('Value currently is ' + result.key);
// });