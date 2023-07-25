import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './NotesField.module.scss';

interface NotesFieldProps {
  className?: string;
}

export const NotesField = ({ className }: NotesFieldProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onShowModal = () => {
    setIsOpen(true);
    console.log('click');
  };

  return (
    <div className={classNames(cls.NotesField, {}, [className])}>
      <div className={cls.wrapper}></div>
      <button onClick={onShowModal} className={cls.btn}>
        Add
      </button>
      {isOpen && <Modal isOpen />}
    </div>
  );
};
