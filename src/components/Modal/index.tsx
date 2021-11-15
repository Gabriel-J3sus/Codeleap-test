import { useEffect } from 'react';
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux';

import { deleteItemRequest } from '../../actions';
import { ModalStatusProps } from '../../pages/Main';

import { Button } from '../Button';

import { ModalOverlay, ModalContainer, StyledCloseIcon } from './style'

interface ModalProps {
  modalStatus: ModalStatusProps; 
  itemToDelete: number;
  closeModal: (status: ModalStatusProps) => void;
}

export const Modal: React.FC<ModalProps> = ({ children, modalStatus, itemToDelete, closeModal }) => {
  const dispatch = useDispatch()

  function handleModal() {
    closeModal({ open: false })
  }

  useEffect(() => {
    const close = (e: any) => {
      if(e.keyCode === 27){
        handleModal()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  })

  useEffect(() => {
    const overflow = modalStatus.open ? "hidden" : "auto";
    document.body.style.overflow = overflow;
  }, [modalStatus.open]);

  if (!modalStatus.open) return null;

  const modalRootElement = document.getElementById('modal-root')

  // modalRootElement can be null, so I can find errors - type cast wouldn't be useful
  return modalRootElement ? 
    ReactDOM.createPortal(
      <ModalOverlay>
        <ModalContainer role="dialog" aria-modal>
          {children}
          
          {modalStatus.type === 'form' ? (
            <button 
              className="close-modal" 
              name="close-dialog" 
              onClick={handleModal} 
              aria-pressed="false"
            >
              <StyledCloseIcon />
            </button>
          ) : (
            <span className="delete-modal-wrapper">
              <Button 
                bgColor="white"
                textType="capitalize"
                bold
                onClick={handleModal}
                role="button"
                name="cancel"
                aria-pressed="false"
              >
                Cancel
              </Button>
              <Button
                bgColor="white"
                textType="uppercase"
                bold
                onClick={() => {
                  dispatch(deleteItemRequest({ id: itemToDelete }))
                  handleModal()
                }}
                role="button"
                name="save"
                aria-pressed="true"
              >
                ok
              </Button>
            </span>
          )}
        </ModalContainer>
      </ModalOverlay>
    , modalRootElement) 
  : null
}