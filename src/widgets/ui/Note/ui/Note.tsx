import { noteSliceAction } from 'entities/Note/model/slice/noteSlice';
import { ChangeEvent, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/appDispatch';
import cls from './Note.module.scss';

interface NoteProps {
  className?: string;
  text: string;
  name: string;
  hashtag?: string;
}

export const Note = ({ className, text, name, hashtag }: NoteProps) => {
  const dispatch = useAppDispatch();

  const [edit, setEdit] = useState<boolean>(true);
  const [value, setValue] = useState<string>(text);

  const editText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleEditButton = () => {
    setEdit(false);
  };

  const deleteNote = () => {
    dispatch(noteSliceAction.deleteNote(name));
  };

  const submitChanges = () => {
    dispatch(noteSliceAction.editNote({ text: value, name, hashtag }));
    setEdit(true);
  };

  return (
    <div className={classNames(cls.Note, {}, [className])}>
      <span className={cls.delete} onClick={deleteNote}>
        X
      </span>
      <input type="text" className={cls.inpt} placeholder="Name" value={name} disabled />
      <textarea
        cols={10}
        rows={8}
        value={value}
        className={cls.txtArea}
        onChange={editText}
        placeholder="Your text"
        disabled={edit}
      />
      <span className={cls.edit} onClick={handleEditButton}>
        Edit
      </span>
      <span>{hashtag}</span>
      <button className={cls.btn} onClick={submitChanges}>
        Update!
      </button>
    </div>
  );
};
