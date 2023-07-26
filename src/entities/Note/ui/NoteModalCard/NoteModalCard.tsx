import { StateSchema } from 'app/providers/storeProvider/StateSchema';
import { noteSliceAction } from 'entities/Note/model/slice/noteSlice';
import { type } from 'os';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/appDispatch';
import cls from './NoteModalCard.module.scss';

interface NoteModalCardProps {
  className?: string;
  setIsOpen: (x: boolean) => void;
}

export const NoteModalCard = ({ className, setIsOpen }: NoteModalCardProps) => {
  const dispatch = useAppDispatch();
  const data = useSelector((state: StateSchema) => state.note.data);

  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const submitNote = () => {
    const reg = /(#+[a-zA-Z0-9(_)]{1,})/;
    const match = text.match(reg);

    dispatch(noteSliceAction.createNote({ name, text, hashtag: String(match?.[0]) }));

    setIsOpen(false);
  };

  return (
    <div className={classNames(cls.NoteModalCard, {}, [className])}>
      <input
        type="text"
        className={cls.inpt}
        placeholder="Name"
        onChange={handleName}
        value={name}
      />
      <textarea
        cols={10}
        rows={10}
        value={text}
        className={cls.txtArea}
        onChange={handleText}
        placeholder="Your text"
      />
      <button className={cls.btn} onClick={submitNote}>
        Submit!
      </button>
    </div>
  );
};
