import React from 'react';
import ModalLayout from './components/ModalLayout';
import Searchbar from './components/SearchBar';
import SnippetList from './components/SnippetList';
import { useTypedSelector } from './hooks/useTypedSelector';


// контейнер приложения 
const App: React.FC = () => {

  const isModal = useTypedSelector(state => state.isModal);
  return (
    <div>
      <Searchbar />
      <SnippetList />
      {isModal&&<ModalLayout author="author" title="title" date="date" isbn="2323" iconUrl="icon"/>}
    </div>
  )
}
export default App;