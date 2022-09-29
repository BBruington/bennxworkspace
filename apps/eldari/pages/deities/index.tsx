import styles from './deities.module.css';

/* eslint-disable-next-line */
export interface DeitiesProps {}

export function Deities(props: DeitiesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Deities!</h1>
    </div>
  );
}

export default Deities;
