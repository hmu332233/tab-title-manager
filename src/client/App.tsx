import React, { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { EXTENSION_ACTION, SYNC_KEY } from '../shared/constants';

import utilExtension from './utils/extension';

import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import useDidUpdateEffect from './hooks/useDidUpdateEffect';

function App() {
  const [tabTitles, setTabTitles] = useState<Array<TabTitle>>([]);

  useEffect(() => {
    chrome.storage.sync.get(SYNC_KEY, (result) => {
      const tabTitles = result[SYNC_KEY];
      if (!tabTitles) {
         return;
      }

      setTabTitles(tabTitles);
    });
  }, []);

  useDidUpdateEffect(() => {
    chrome.storage.sync.set({ [SYNC_KEY]: tabTitles }, () => {
      utilExtension.sendMessage({
        action: EXTENSION_ACTION.CHANGE_TITLE,
        payload: tabTitles,
      });
    });
  }, [tabTitles]);

  const handleFormSubmit = ({ url, title }: { url: string, title: string }) => {
    const id = uuidv4();
    const tabTitle: TabTitle = {
      id,
      url,
      title,
    };

    setTabTitles(prev => [...prev, tabTitle]);
  }
  const handleDeleteItemClick = (id: string) => {
    const filtered = tabTitles.filter(tabTitle => tabTitle.id !== id);
    setTabTitles(filtered);
  };
  return (
    <>   
      <Header />
      <Form onSubmit={handleFormSubmit} />
      <List list={tabTitles} onDeleteItemClick={handleDeleteItemClick}  />
    </>
  );
}


export default App;