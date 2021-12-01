import { FC } from 'react';
import styles from '@style/index.module.scss';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      Hello World (from Josh)
      <button
        onClick={async () => {
          const endpoint = '/api/products';
          const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

          try {
            const res = await fetch(url);
            console.log('res: ', res);

            const data = await res.json();
            console.log('data: ', data);
          } catch (err) {
            console.log('err: ', err);
          }
        }}
        style={{ padding: '0.5em', borderRadius: '4px' }}
      >
        [GET] /api/
      </button>
    </div>
  );
};

export default Home;
