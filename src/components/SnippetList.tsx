import React from 'react';
import { useAction } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Item from './Item';

/*
  контэйнер сниппетов
*/
const SnippetList: React.FC = () => {
  
  const snippet = useTypedSelector(state => state.searchResults);
  const { setModalVisible, setSnippetKey } = useAction();
  const list = snippet.map((value, index) => {
    return (
      <Item
        key={index}
        title={value.title}
        author={value.author}
        iconUrl={value.iconUrl}
        onClick={() => {
          setSnippetKey(index);
          setModalVisible(true);
        }}
      />
      )
  })
  return (
    <div className="snippet-list">
      {list}
    </div>
  )
}
export default SnippetList;