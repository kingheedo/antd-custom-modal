import { ModalState } from '../store';
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import errorIcon from '../assets/error.svg';
import successIcon from '../assets/success.svg';
import infoIcon from '../assets/info.svg';
import warning from '../assets/warning.svg';
import './index.scss';

const CustomModal = () => {
  const [modal, setModal] = useRecoilState(ModalState);

  const onConfirm = () => { 
    if (modal.onOk) {
      modal.onOk();
    }
    setModal(prev => ({ ...prev , open: false }));
  };

  return (
    <Modal
      className="custom-modal"
      width={416} 
      maskClosable={false} 
      centered 
      onOk={onConfirm}
      {...modal.onCancel && {
        onCancel: modal.onCancel
      }}
      open={modal.open}
      okText="Done"
      zIndex={1002}
      title={
        <>
          {modal.status === 'ERROR' && <img src={errorIcon} alt="errorIcon"/>}
          {modal.status === 'SUCCESS' && <img src={successIcon} alt="successIcon"/>}
          {modal.status === 'INFO' && <img src={infoIcon} alt="infoIcon"/>}
          {modal.status === 'WARNING' && <img src={warning} alt="warning"/>}
          <strong>{modal.title}</strong>
        </>
      }>
      {modal.content.replace(/,/g,'')}
    </Modal>
  );
};

export default CustomModal;