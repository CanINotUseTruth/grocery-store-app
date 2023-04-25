import React from 'react';
import './Modal.css';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import { IoIosClose } from 'react-icons/io';

function Modal({ title, handleDismiss, children }) {
  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className="wrapper">
          <div className="backdrop" onClick={handleDismiss} />
          <div
            className="content"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button className="closeBtn" onClick={handleDismiss}>
              <IoIosClose />
              <VisuallyHidden>Dismiss modal</VisuallyHidden>
            </button>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
