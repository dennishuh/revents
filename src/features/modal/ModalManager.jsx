import React from 'react';
import { connect } from 'react-redux';

import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

const modalLookup = {
  LoginModal,
  RegisterModal
}

const mapStateToProps = state => ({
  currentModal: state.modals
})

const ModalManager = ({currentModal}) => {
  let renderModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderModal = <ModalComponent {...modalProps} />
  }
  return (
    <div>
      {renderModal}
    </div>
  )
};

export default connect(mapStateToProps)(ModalManager);
