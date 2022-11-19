import styles from './deities.module.css';
import DeityCard from '../../components/deityCard';
import content from '../../data/deities.json';
import Link from 'next/link'

/* eslint-disable-next-line */
export interface DeitiesProps {}

export function Deities(props) {


  return (
    <div className={styles['container']}>
      {content.deities.map((d) => {
        return (
          <Link key={d.id} href={`/deities/${d.deity.toLowerCase()}`}>
            <DeityCard 
              key={d.id}
              deity={d.deity}
              alignment={d.alignment}
              title={d.title}
            />
          </Link>
        )})}
    </div>
  );
}

export default Deities;
