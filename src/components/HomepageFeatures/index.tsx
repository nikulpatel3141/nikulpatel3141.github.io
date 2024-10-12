import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import RandomQuote from '/src/components/RandomQuote';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <RandomQuote />
      </div>
    </section>
  );
}
