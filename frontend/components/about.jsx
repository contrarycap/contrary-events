import { Stack } from '@mui/material'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <>
      <Stack gap={1} width={'100%'}>
        <h2>About Contrary Capital</h2>
        <p className={styles.description}>
          wow nice some about contrary capital stuff
        </p>
      </Stack>
    </>
  )
}