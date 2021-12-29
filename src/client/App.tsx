import React, { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { EXTENSION_ACTION } from 'shared/constants';

import utilExtension from './utils/extension';

import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [tabTitles, setTabTitles] = useState<Array<TabTitle>>([]);

  useEffect(() => {
    utilExtension.sendMessage({
      action: EXTENSION_ACTION.CHANGE_TITLE,
      payload: tabTitles,
    });
  }, [tabTitles]);

  const handleFormSubmit = ({ url, title }: { url: string, title: string }) => {
    console.log({ url, title })

    const id = uuidv4();
    const tabTitle: TabTitle = {
      id,
      url,
      title,
    };

    setTabTitles(prev => [...prev, tabTitle]);
  }
  const handleDeleteItemClick = (id: string) => console.log(id);
  return (
    <>   
      <Header />
      <Form onSubmit={handleFormSubmit} />
      <List list={tabTitles} onDeleteItemClick={handleDeleteItemClick}  />
    </>
  );
}


export default App;