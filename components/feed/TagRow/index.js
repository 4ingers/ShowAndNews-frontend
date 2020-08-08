import Link from 'next/link'

import styles from './styles.module.scss'


const categoryColors = {
  'Tag1': 'rgb(255, 59, 48)',
  'Tag2': 'rgb(0, 113, 164)',
  'Tag3': 'rgb(255, 45, 85)',
  'Tag4': 'rgb(100, 100, 100)'
}

const TagRow = ({ tagsName, tagsSlug }) => {
  return (
    <div className={styles.tagsContainer}>
      {tagsName.map((tag, index) =>
        <Link href={'/tag/[slug]'} as={`/tag/${tagsSlug[index]}`} key={index}>
          <a key={index} className={styles.tag} style={{ backgroundColor: categoryColors[tag] }}>
            {tag.toUpperCase()}
          </a>
        </Link>
      )}
    </div>
  );
}

export default TagRow