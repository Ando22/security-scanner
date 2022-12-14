export const generateLabelColor = (status: string) => {
    if (status == 'QUEUED') return 'grey';
    if (status == 'IN_PROGRESS') return 'yellow';
    if (status == 'SUCCESS') return 'green';
    if (status == 'FAILURE') return 'red';
};
