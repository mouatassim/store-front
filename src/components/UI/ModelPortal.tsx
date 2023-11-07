import React from 'react';
import ReactDOM from 'react-dom';
import { BookInfos } from '../../models/Book';


interface Props {
  message:BookInfos | undefined;
  open: boolean;
  onClose: () => void;
  handleAction: () => void;
}
const MODAL_STYLE: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  background: '#fff',
  padding: '50px',
  zIndex: 10,
};
const OVERLAY_STYLED: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor:'rgba(0,0,0,0.1)',
  opacity: .10,
  zIndex: 3,
};

const ModelPortal = ({ open, onClose,message,handleAction }: Props) => {
  const modalRoot = document.getElementById('modal')!;
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLED}>
        <div style={MODAL_STYLE}>
          <h3>are you sure you want to delete the book {message?.title}</h3>
          <div className="container-row">
            <button className="btn btn-ternary" onClick={onClose}>
              cancel
            </button>
            <button className="btn btn-danger" onClick={handleAction} >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>,
    modalRoot,
  );
};

export default ModelPortal;
