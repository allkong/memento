import { ReactNode } from 'react';

import { Overlay, ModalContent, Button } from '@/shared/ui/ConfirmModal.style';

type Props = {
  message: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal = ({ message, onConfirm, onCancel }: Props) => {
  return (
    <Overlay>
      <ModalContent>
        <p>{message}</p>
        <Button onClick={onConfirm}>확인</Button>
        <Button onClick={onCancel}>취소</Button>
      </ModalContent>
    </Overlay>
  );
};

export default ConfirmModal;
