import { Stack } from '@mui/material'
import styles from '../styles/Home.module.css'

export default function FAQ() {
  return (
    <>
      <Stack gap={2} width={'100%'}>
        <h2>FAQ</h2>
        <p className={styles.description}>
          nice some faq
        </p>
      </Stack>
    </>
  )
}