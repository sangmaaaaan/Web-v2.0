import React, { useEffect } from 'react';
import Modal from 'react-modal';

interface LoadingModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isOpen, onRequestClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onRequestClose, 20000); // 20초 후에 모달 닫기
      return () => clearTimeout(timer);
    }
  }, [isOpen, onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Loading Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-lg font-semibold mb-4">자기주도학습을 위해 AI Tutor가 학습자료를 만들고 있어요</p>
        <div className="loader"></div>
      </div>
    </Modal>
  );
};

export default LoadingModal;