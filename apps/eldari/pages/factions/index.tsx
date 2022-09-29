import styles from './factions.module.css';

/* eslint-disable-next-line */
export interface FactionsProps {}

export function Factions(props: FactionsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Factions!</h1>
    </div>
  );
}

export default Factions;
