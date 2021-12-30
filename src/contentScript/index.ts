import { EXTENSION_ACTION, SYNC_KEY } from '../shared/constants';

chrome.runtime.onMessage.addListener(message => {
  const { action } = message;
  switch (action) {
    case EXTENSION_ACTION.CHANGE_TITLE:
      const { payload: tabTitles } = message;
      changeTitle(tabTitles);
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