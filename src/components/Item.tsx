import React, { MouseEventHandler } from 'react';

export interface IProps{
  title?: string;
  author?: string;
  iconUrl?: string;
  onClick?: MouseEventHandler
}
/*
  Комонент отображение одного сниппета 
*/
const Item: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="item" onClick={props.onClick}> 
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