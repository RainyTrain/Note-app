import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen: boolean;
}
export const Modal = ({ className, isOpen }: ModalProps) => {
  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay}>
          <div className={cls.content}></div>
        </div>
      </div>
    </Portal>
  );
};
