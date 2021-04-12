import React from 'react';
import Searchbar from './components/SearchBar';
import SnippetList from './components/SnippetList';


// контейнер приложения 
const App: React.FC = () => {
  return (
    <div>
      <Searchbar />
      <SnippetList />
    </div>
  )
}
export default App;