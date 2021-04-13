import * as React from 'react';
import { useAction } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import '../styles/searchbar.css';
import { filters } from '../types/filter';
import { Filterbutton } from './Filterbutton';


let timerid: any | number = null;
/*
  компонент поисковой строки
*/
const Searchbar: React.FC = () => {
  const { fetchSearch,setFilter,setChange } = useAction();
  const filter = useTypedSelector(state => state.filter);
  const inputText = useTypedSelector(state => state.inputText);
  React.useEffect(() => {
    // стартовый показ книг наподобоии рекомендаций
    fetchSearch("java");
  }, [])
  
  // событие которое сработывате при каждом вводе символа в поисковую строку, просихдит сброс таймера поиска, запускается новый таймер который иницирует поиск чрез 1 секунду
  const changeHandler = (event: React.ChangeEvent) => {
    let target = event.target as HTMLInputElement;
    setChange(target.value);
    clearTimeout(timerid);
    //инициация новой загрузки через 1 секунду
    timerid = setTimeout(() => {
      if(target.value!=="") fetchSearch(target.value,filter);
    }, 900)
  }

  const searchHandler = (event: any) => {
    clearTimeout(timerid);
    fetchSearch(inputText,filter);
  }
  return (
    <div className="search-bar">
      <Filterbutton filters={filters} setFilter={ setFilter}/>
      <input type="text" onChange={changeHandler} className="search-bar__input" value={inputText} />
      <button className="search-bar__button" onClick={searchHandler}></button>
    </div>
  )
}
export default Searchbar;