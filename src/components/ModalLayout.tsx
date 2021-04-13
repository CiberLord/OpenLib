import React from 'react';
import { IProps } from './Item';
import '../styles/modal-layout.css';
import { useAction } from '../hooks/useActions';

interface MProp extends IProps {
  isbn?: string;
  date?: string;
  href?: string;
}
const ModalLayout: React.FC<MProp> = (props: MProp) => {

  const { setModalVisible } = useAction();

  const exitModalLayout = () => {
    setModalVisible(false);
  }
  return (
    <div className="wrap__modal-layout" onClick={exitModalLayout}>
      <div className="modal-layout" onClick={(event) => { event.stopPropagation() }}>
        <div className="main__info">
          <div className="modal-layout-icon__wrap">
            <img src={props.iconUrl} alt="" />
          </div>
          <div className="modal-layout__text">
            <h2>{props.title}</h2>
            <p className="author">author: <span>{props.author}</span></p>
            <p className="publish-date">date of publish: <span>{ props.date}</span></p>
            <p className="isbn">ISBN: {props.isbn}</p>
          </div>
        </div>
        <div className="additional">
          {props.href && <a href={ props.href}>ссылка на openlib</a>}
        </div>
      </div>
    </div>
  )
}

export default ModalLayout