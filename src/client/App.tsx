import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [tabTitles, setTabTitles] = useState<Array<TabTitle>>([]);
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