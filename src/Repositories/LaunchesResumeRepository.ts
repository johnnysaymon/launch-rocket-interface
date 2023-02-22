import axios from "axios";
import Launch from "../Models/Launch";
import LaunchesResume from "../Models/LaunchesResume";

class LaunchesResumeRepository
{
    public async get(): Promise<LaunchesResume>
    {
        const result = await axios.get(process.env.REACT_APP_API + '/launches/resume')

        if (result.status !== 200) {
            throw new Error('Data fail')
        }

        return new LaunchesResume(
            this.createLaunch(result.data.next),
            this.createLaunch(result.data.latest),
            result.data.past.map(this.createLaunch),
            result.data.upcoming.map(this.createLaunch)
        )
    }

    private createLaunch(data: any): Launch|null
    {
        if(typeof data !== 'object') {
            return null
        }

        return new Launch(
            data.name,
            new Date(data.date),
            data.id
        )
    }
}

export default LaunchesResumeRepository