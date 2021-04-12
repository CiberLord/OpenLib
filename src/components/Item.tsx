import React from 'react';


/*
  Комонент отображение одного сниппета 
*/
const Item: React.FC<{ title?: string, author?: string,iconUrl?:string}> = (props) => {
  return (
    <div className="item"> 
      <div>
        <img className="book-icon" src={props.iconUrl} alt=""/>
      </div>
      <div className="item-text">
        <h2>{props.title}</h2>
        <p>{props.author}</p>
      </div>
    </div>
  )
}

export default Item;