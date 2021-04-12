import * as React from 'react';
import { useAction } from '../hooks/useActions';


let timerid: any | number = null;

/*
  компонент поисковой строки
*/
const Searchbar: React.FC = () => {
  const { fetchSearch } = useAction();

  // событие которое сработывате при каждом вводе символа в поисковую строку, просихдит сброс таймера поиска, запускается новый таймер который иницирует поиск чрез 1 секунду
  const changeHandler = (event: React.ChangeEvent) => {
    let target = event.target as HTMLInputElement;
    
    clearTimeout(timerid);
    //инициация новой загрузки через 1 секунду
    timerid = setTimeout(() => {
      fetchSearch(target.value);
    },900)
  }
  const searchHandler = (event: any) => {

    setTimeout(() => {
      console.log("hello");
    }, 500);
  }
  return (
    <div className="search-bar">
      <div>
        <input type="text" onChange={changeHandler} />
        <button className="search-button" onClick={searchHandler}>search</button>
      </div>
    </div>
  )
}
export default Searchbar;