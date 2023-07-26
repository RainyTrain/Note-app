import { AppDispatch } from 'app/providers/storeProvider/storeProvider';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
