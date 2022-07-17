import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedId = true;

  return isUserLoggedId ? (
    <button 
    className={styles.signInButton}
    type="button">
      <FaGithub color="#a4d361" />
      Felipe E. Moreno
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
    className={styles.signInButton}
    type="button">
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  )
}