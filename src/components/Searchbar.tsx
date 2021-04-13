import * as React from 'react';
import { useAction } from '../hooks/useActions';
import '../styles/searchbar.css';

let timerid: any | number = null;

/*
  компонент поисковой строки
*/
const Searchbar: React.FC = () => {
  const { fetchSearch } = useAction();

  React.useEffect(() => {
    fetchSearch("java");
  },[])
  // событие которое сработывате при каждом вводе символа в поисковую строку, просихдит сброс таймера поиска, запускается новый таймер который иницирует поиск чрез 1 секунду
  const changeHandler = (event: React.ChangeEvent) => {
    let target = event.target as HTMLInputElement;

    clearTimeout(timerid);
    //инициация новой загрузки через 1 секунду
    timerid = setTimeout(() => {
      fetchSearch(target.value);
    }, 900)
  }

  const searchHandler = (event: any) => {

    setTimeout(() => {
      console.log("hello");
    }, 500);
  }
  return (
    <div className="search-bar">
      <input type="text" onChange={changeHandler} className="search-bar__input" />
      <button className="search-bar__button" onClick={searchHandler}></button>
    </div>
  )
}
export default Searchbar;