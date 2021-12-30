import { EXTENSION_ACTION, SYNC_KEY } from '../shared/constants';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const { action } = message;
  switch (action) {
    case EXTENSION_ACTION.CHANGE_TITLE:
      const { payload: tabTitles } = message;
      changeTitle(tabTitles);
    break;
    case EXTENSION_ACTION.GET_SITE_INFO:
      const title = window.document.title;
      const { origin, pathname } = window.location;
      sendResponse({
        url: `${origin}${pathname}`,
        title,
      });
    break;
  }
});

chrome.storage.sync.get(SYNC_KEY, (result) => {
  const tabTitles = result[SYNC_KEY];
  if (!tabTitles) {
     return;
  }
  changeTitle(tabTitles);
});


function changeTitle(tabTitles: any) {
  const { origin, pathname } = window.location;
  const siteUrl = `${origin}${pathname}`;
  const tabTitle = tabTitles.find(({ url }) => url === siteUrl);
  const { title } = tabTitle;
  document.title = title;
}