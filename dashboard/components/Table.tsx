import { useRouter } from 'next/router'
import moment from 'moment'
import { Table, Button, Icon, Label } from 'semantic-ui-react'
import axios from 'axios'

import { generateLabelColor } from '@utils/helper'

interface TableProps {
    head: string[],
    data: any[],
    revalidate: () => any
}

export const TableComponent = ({
    head,
    data,
    revalidate
}: TableProps) => {
    const router = useRouter()

    const getTimeStamp = (data: any) => {
        const status = data.status
        let time: string
        switch (status) {
            case 'QUEUED':
                time = moment(data?.queue_at).format('DD-MM-YYYY HH:mm')
                break;
            case 'IN_PROGRESS':
                time = moment(data?.scanning_at).format('DD-MM-YYYY HH:mm')
                break;
            default:
                time = moment(data?.finished_at).format('DD-MM-YYYY HH:mm')
                break;
        }
        return time
    }

    const updateResult = async (data: any) => {
        let status = 'IN_PROGRESS'
        if (data.status == 'IN_PROGRESS') status = 'SUCCESS';
        // failure status flow
        if (data.repository === 'website-pwa') status = 'FAILURE'

        await axios.put(process.env.NEXT_PUBLIC_API_URL + '/result/' + data?.id, {
            status: status
        }).then(() => {
            revalidate()
        }).catch((err: any) => {
            console.log(err)
        })
    }
    return (
        <Table striped>
            <Table.Header>
                <Table.Row>
                    <Table.Cell>No</Table.Cell>
                    {
                        head?.map((item: any, index: number) => (
                            <Table.Cell className="capitalize" key={index}>{item}</Table.Cell>
                        ))
                    }
                    <Table.Cell>Actions</Table.Cell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {data?.length > 0 ? data?.map((row: any, key: number) => (
                    <Table.Row key={key}>
                        <Table.Cell>
                            {key + 1}
                        </Table.Cell>
                        <Table.Cell>
                            {row?.repository || '-'}
                        </Table.Cell>
                        <Table.Cell>
                            <Label color={generateLabelColor(row?.status)}>
                                {row?.status || '-'}
                            </Label>
                        </Table.Cell>
                        <Table.Cell>
                            <Label>
                                {row?.total_findings || '-'}
                            </Label>
                        </Table.Cell>
                        <Table.Cell>
                            {getTimeStamp(row) || '-'}
                        </Table.Cell>
                        <Table.Cell>
                            <div className="flex justify-start items-center">
                                <Button icon onClick={() => updateResult(row)}>
                                    <Icon name='refresh' />
                                </Button>
                                <Button onClick={() => router.push('/' + row.id)}>
                                    Detail
                                </Button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                )) : (
                    <Table.Row>
                        <Table.Cell colSpan={head.length + 1}>
                            <div className="text-center py-3">
                                Data is Empty
                            </div>
                        </Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    )
}