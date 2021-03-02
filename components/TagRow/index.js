import Link from 'next/link'

import styles from './styles.module.scss'


const categoryColors = {
  'Tag1': 'rgb(255, 59, 48)',
  'Tag2': 'rgb(0, 113, 164)',
  'Tag3': 'rgb(255, 45, 85)',
  'Tag4': 'rgb(100, 100, 100)'
}

const TagRow = ({ tags }) => {
  return (
    <div className={styles.tagsContainer}>
      {tags.map(({ name, slug }, index) =>
        <Link href={'/tag/[slug]'} as={`/tag/${slug}`} key={index}>
          <a className={styles.tag}>
            {name.toUpperCase()}
          </a>
        </Link>
      )}
    </div>
  );
}

export default TagRow