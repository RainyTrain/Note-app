import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { NoteModalCard } from 'entities/Note/ui/NoteModalCard/NoteModalCard';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: (x: boolean) => void;
}
export const Modal = ({ className, isOpen, setIsOpen }: ModalProps) => {
  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div onClick={onClose} className={cls.overlay}>
          <div
            onClick={(event) => {
              event.stopPropagation();
            }}
            className={cls.content}>
            <NoteModalCard setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </Portal>
  );
};
