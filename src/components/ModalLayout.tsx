import React from 'react';
import { IProps } from './Item';
import '../styles/modal-layout.css';
import { useAction } from '../hooks/useActions';

interface MProp extends IProps {
  isbn?: string;
  date?: string;
}
const ModalLayout: React.FC<MProp> = (props: MProp) => {

  const { setModalVisible } = useAction();
  
  const exitModalLayout = () => {
    setModalVisible(false);
  }
  return (
    <div className="wrap__modal-layout" onClick={exitModalLayout}>
      <div className="modal-layout" onClick={(event)=>{ event.stopPropagation()}}>
        <div className="modal-layout_icon">
          <img src={props.iconUrl} alt=""/>
        </div>
        <div>
          <h2>{props.title}</h2>
          <p>автор{props.author}</p>
          <p>дата публикации</p>
          <p>ISBN: {props.isbn}</p>
        </div>
      </div >
    </div>
  )
}

export default ModalLayout