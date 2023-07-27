import { StateSchema } from 'app/providers/storeProvider/StateSchema';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Note } from 'widgets/ui/Note';
import cls from './NotesField.module.scss';

interface NotesFieldProps {
  className?: string;
}

export const NotesField = ({ className }: NotesFieldProps) => {
  const notes = useSelector((state: StateSchema) => state.note.data);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onShowModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={classNames(cls.NotesField, {}, [className])}>
      <div className={cls.wrapper}>
        {notes.map((note) => {
          return <Note {...note} />;
        })}
      </div>
      <button onClick={onShowModal} className={cls.btn}>
        Add
      </button>
      {isOpen && <Modal isOpen setIsOpen={setIsOpen} />}
    </div>
  );
};
