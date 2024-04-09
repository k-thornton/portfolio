import { getData } from '@/app/actions'

async function ResumePage() {
    const { resumeData } = await getData();
    if (!resumeData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{`${resumeData.personalDetails.name.first} ${resumeData.personalDetails.name.last}`}</h1>
            <p>{resumeData.personalDetails.email}</p>
            {/* Render other resume details */}
        </div>
    );
}

export default ResumePage;
