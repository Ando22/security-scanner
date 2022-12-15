import axios from 'axios'
import Head from 'next/head'
import { Container, Grid, Button } from 'semantic-ui-react'
import styles from '../styles/Home.module.css'

import { TableComponent } from '@components/Table'
import { FormComponent } from '@components/Form'
import { useState } from 'react'
import useResults from '@hooks/useResults'

export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const { data, mutate } = useResults()

  const submitScanResult = async (repository: string) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL + '/result', {
      repository: repository
    }).then(() => {
      mutate()
      setOpenModal(false)
    }).catch((err: any) => {
      console.log(err)
    })
  }
  return (
    <Container>
      <Head>
        <title>Guard Rails - Security Scanner</title>
        <meta name="description" content="Full stack Engineer Challlange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormComponent
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={submitScanResult}
      />
      <main className={styles.main} data-testid="main">
        <Grid>
          <Grid.Row>
            <Grid.Column floated="left" width={6}>
              <h1 className={styles.title} data-testid="title">
                Security Scanner
              </h1>
            </Grid.Column>
            <Grid.Column floated="right" width={3}>
              <div className="flex justify-center items-center h-full">
                <Button onClick={() => setOpenModal(true)}>
                  Scan a Repository
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="mt-16" data-testid="table">
          <TableComponent
            revalidate={mutate}
            head={["Repository Name", "Scan Status", "Findings", "Timestamp"]}
            data={data}
          />

        </div>

      </main>
      <footer className={styles.footer}>
        Full stack Engineer Challlange - Erando Putra
      </footer>
    </Container>
  )
}
