import { useState } from 'react'
import { Modal, Form, Select, Button } from 'semantic-ui-react'

interface FormProps {
    open: boolean,
    onClose: () => any,
    onSubmit: (val: string) => any,
}

export const FormComponent = ({
    open,
    onClose,
    onSubmit
}: FormProps) => {
    const repositories = [
        {
            value: 'dashboard-app',
            text: 'dashboard-app'
        },
        {
            value: 'user-service',
            text: 'user-service'
        },
        {
            value: 'website-pwa',
            text: 'website-pwa'
        },
        {
            value: 'transaction-service',
            text: 'transaction-service'
        },
    ]

    const [repository, setRepository] = useState('')

    console.log(repository)
    return (
        <Modal
            size="large"
            open={open}
            onClose={onClose}
        >
            <Modal.Header className="border-b-none text-center">Scan Repository</Modal.Header>
            <Modal.Content>
                <div className="flex flex-col gap-2 w-full">
                    <label>Repository Name</label>
                    <Select
                        onChange={
                            (e: any) =>
                                setRepository(e.target.textContent)
                        }
                        value={repository}
                        placeholder='Select your repository'
                        options={repositories} />
                </div>

            </Modal.Content>
            <Modal.Actions className="border-t-none">
                <Button negative onClick={onClose}>
                    Cancel
                </Button>
                <Button positive onClick={() => onSubmit(repository)}>
                    Scan Repository
                </Button>
            </Modal.Actions>
        </Modal>
    )
}