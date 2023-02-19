/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useSetRecoilState } from 'recoil';
import { ModalState } from '../store';

interface IModalConfig {
    title: string;
    content: string;
    onOk?: () => void;
}

interface IModal {
    error: (config :IModalConfig) => void;
    success: (config :IModalConfig) => void;
    info: (config :IModalConfig) => void;
    warning: (config :IModalConfig) => void;
}

const modal:IModal = {
  error: () => null,
  success: () => null,
  info: () => null,
  warning: () => null
};

const useModal = () => {

  const setModal = useSetRecoilState(ModalState);

  modal.error = (config :IModalConfig) => setModal({
    open: true,
    status: 'ERROR',
    title: config.title,
    content: config.content,
    onOk: config.onOk
  }),

  modal.success = (config :IModalConfig) => setModal({
    open: true,
    status: 'SUCCESS',
    title: config.title,
    content: config.content,
    onOk: config.onOk
  }),
  
  modal.info = (config :IModalConfig) => setModal({
    open: true,
    status: 'INFO',
    title: config.title,
    content: config.content,
    onOk: config.onOk
  }),
  
  modal.warning = (config :IModalConfig) => setModal(
    {
      open: true,
      status: 'WARNING',
      title: config.title,
      content: config.content,
      onOk: config.onOk
    }
  );
  
  return {
    modal
  };
};

export default useModal;