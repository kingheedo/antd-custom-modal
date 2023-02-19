import { atom } from "recoil";

export interface IModal {
  open: boolean;
  status: 'DEFAULT' | 'ERROR' | 'SUCCESS' | 'INFO' | 'WARNING';
  title: string;
  content: string;
  onCancel?: () => void;
  onOk?: () => void;
}

export const ModalState = atom<IModal>({
  key: 'ModalState',
  default: {
    open: false,
    status: 'DEFAULT',
    title: '',
    content: '',
    onCancel: () => null,
    onOk: () => null
  }
});