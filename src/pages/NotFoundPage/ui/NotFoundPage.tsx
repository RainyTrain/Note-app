import { classNames } from 'shared/lib/classNames/classNames';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div className={classNames("", {}, [className])}>
        Not found
    </div>
  );
};

export default NotFoundPage