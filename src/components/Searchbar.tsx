import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useAction } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const Searchbar: React.FC = () => {
  
  // const dispatch = useDispatch();
  const snippets = useTypedSelector(state => state.searchResults);
  const { fetchSearch } = useAction();

  useEffect(() => {
    fetchSearch("hello world","q");
  }, [])
  
  console.log(snippets);
  return (
    <div>
      
    </div>
  )
}
export default Searchbar;