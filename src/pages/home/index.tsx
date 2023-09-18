import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { RootState } from '@/context/store';
import { changeState } from '@/context/slice/test_slice';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function HomePage() {
    const dispatch = useDispatch();
    const test = useSelector((state: RootState) => state.test);

    return (
        <main className={cx('home_page')}>
            <h1 className={cx('title')}>Web phim</h1>
            <p>
                name: {test.name},<br />
                msg: {test.msg}
            </p>
            <button
                onClick={() => {
                    dispatch(changeState({ name: 'Hoang', msg: 'Changed' }));
                }}
            >
                Change test value
            </button>
            <h1 className={cx('title')}> Home page</h1>
        </main>
    );
}

export default HomePage;
