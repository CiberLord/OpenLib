import React from 'react';
import ModalLayout from './components/ModalLayout';
import Searchbar from './components/SearchBar';
import SnippetList from './components/SnippetList';
import { useTypedSelector } from './hooks/useTypedSelector';
import './styles/app.css';


// контейнер приложения 
const App: React.FC = () => {

  const { isVisble, snippetKey } = useTypedSelector(state => state.modalState);
  const snippet = useTypedSelector(state => state.searchResults);
  return (
    <div className="app">
      <div className="navbar">
        <div className="logo">
            OpenLib
        </div>
        <Searchbar />
      </div>
      <SnippetList />
      {isVisble && <ModalLayout
        author={snippet[snippetKey].author}
        title={snippet[snippetKey].title}
        isbn={snippet[snippetKey].isbn}
        iconUrl={snippet[snippetKey].iconUrl+"-L.jpg"}
        date={snippet[snippetKey].publishDate} />
      }
    </div>
  )
}
export default App;