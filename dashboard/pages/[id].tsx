import axios from 'axios'
import moment from 'moment'
import Head from 'next/head'
import { Container, Grid, Button, Icon, Label } from 'semantic-ui-react'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import styles from '@styles/Home.module.css'
import { generateLabelColor } from '@utils/helper'

export default function Detail() {
    const router = useRouter()
    const { query } = router;
    const { id } = query

    const [detail, setDetail] = useState<any>({})
    useEffect(() => {
        getDetail()
        async function getDetail() {
            await axios.get(process.env.NEXT_PUBLIC_API_URL + '/result/' + id).then((res) => {
                const { data } = res.data
                setDetail(data)
            })
        }
    }, [id])

    return (
        <Container>
            <Head>
                <title>Guard Rails - Detail Scanner</title>
                <meta name="description" content="Full stack Engineer Challlange" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className="flex justify-start items-center gap-4">
                    <Button icon onClick={() => router.back()}>
                        <Icon name='angle left' />
                    </Button>
                    <h1 className={styles.title}>
                        Security Scanner Detail
                    </h1>
                </div>
                <section className="py-12">
                    <Grid className="w-full">
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <div className="text-md">
                                    Repository Name
                                </div>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                :
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="text-md">
                                    {detail?.repository || '-'}
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <div className="text-md">
                                    Status
                                </div>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                :
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="text-md">
                                    <Label color={generateLabelColor(detail?.status)}>
                                        {detail?.status || '-'}
                                    </Label>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <div className="text-md">
                                    Queue At
                                </div>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                :
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="text-md">
                                    {moment(detail?.queue_at).format('DD-MM-YYYY HH:mm') || '-'}
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <div className="text-md">
                                    Scanning At
                                </div>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                :
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="text-md">
                                    {moment(detail?.queue_at).format('DD-MM-YYYY HH:mm') || '-'}
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <div className="text-md">
                                    Finished At
                                </div>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                :
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="text-md">
                                    {moment(detail?.finished_at).format('DD-MM-YYYY HH:mm') || '-'}
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <div className="text-md">
                                    List Findings
                                </div>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                :
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="flex border rounded-md justify-center items-center w-full py-4 px-1">
                                    {detail?.findings?.map((val: any, i: number) => (
                                        <Grid className="w-full" key={i}>
                                            <Grid.Row>
                                                <Grid.Column width={4}>
                                                    <div className="text-sm">
                                                        Rule Id
                                                    </div>
                                                </Grid.Column>
                                                <Grid.Column width={1}>
                                                    :
                                                </Grid.Column>
                                                <Grid.Column width={9}>
                                                    <div className="text-md">
                                                        {val?.ruleId || '-'}
                                                    </div>
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={4}>
                                                    <div className="text-sm">
                                                        Type
                                                    </div>
                                                </Grid.Column>
                                                <Grid.Column width={1}>
                                                    :
                                                </Grid.Column>
                                                <Grid.Column width={9}>
                                                    <div className="text-md">
                                                        {val?.type || '-'}
                                                    </div>
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={4}>
                                                    <div className="text-sm">
                                                        Location
                                                    </div>
                                                </Grid.Column>
                                                <Grid.Column width={1}>
                                                    :
                                                </Grid.Column>
                                                <Grid.Column width={9}>
                                                    <div className="text-md">
                                                        <i>{val?.location?.path || '-'}</i>
                                                        <br />
                                                        line : <i>{val?.location?.positions?.begin?.line || '-'}</i>
                                                    </div>
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={4}>
                                                    <div className="text-sm">
                                                        Description
                                                    </div>
                                                </Grid.Column>
                                                <Grid.Column width={1}>
                                                    :
                                                </Grid.Column>
                                                <Grid.Column width={9}>
                                                    <div className="text-md">
                                                        {val?.metadata?.description || '-'}
                                                    </div>
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column width={4}>
                                                    <div className="text-sm">
                                                        Severity
                                                    </div>
                                                </Grid.Column>
                                                <Grid.Column width={1}>
                                                    :
                                                </Grid.Column>
                                                <Grid.Column width={9}>
                                                    <div className="text-md">
                                                        {val?.metadata?.severity || '-'}
                                                    </div>
                                                </Grid.Column>
                                            </Grid.Row>

                                        </Grid>
                                    )) || '-'}
                                </div>

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </section>
            </main>
            <footer className={styles.footer}>
                Full stack Engineer Challlange - Erando Putra
            </footer>
        </Container>
    )
}
