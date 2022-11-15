import styles from './deities.module.css';
import DeityCard from '../../components/deityCard';
import content from '../../data/deities.json'

/* eslint-disable-next-line */
export interface DeitiesProps {}

export function Deities(props) {


  return (
    <div className={styles['container']}>
      {content.deities.map((d) => {
        return (
          <DeityCard 
            key={d.id}
            deity={d.deity}
            alignment={d.alignment}
            title={d.title}
          />
        )})}
    </div>
  );
}

export default Deities;
