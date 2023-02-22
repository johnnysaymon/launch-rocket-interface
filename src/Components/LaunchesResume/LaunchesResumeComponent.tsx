import React, {useEffect} from "react"
import LaunchesResume from "../../Models/LaunchesResume"
import LaunchItemComponent, { LaunchItemMode } from "../LaunchItem/LaunchItemComponent"
import SectionComponent from "../Section/SectionComponent"
import "./LaunchesResumeStyle.sass"

type ResumeProp = {
    resume: LaunchesResume
}

function LaunchesResumeComponent({ resume }: ResumeProp)
{
    const next = resume.next ? (<LaunchItemComponent key="bc0" launch={resume.next} mode={LaunchItemMode.NEXT} />) : (<></>)
    const lastest = resume.latest ? (<LaunchItemComponent key="sa1" launch={resume.latest} mode={LaunchItemMode.LASTEST} />) : (<></>)
    const upcoming = resume.upcoming.map( 
        (launch, index) => (<LaunchItemComponent key={'a' + index} launch={launch} mode={LaunchItemMode.ONCOMING} />)
    )
    const past = resume.past.map( 
        (launch, index) => (<LaunchItemComponent key={'b' + index} launch={launch} mode={LaunchItemMode.PAST} />)
    )

    const focusRef = React.createRef<HTMLDivElement>()

    useEffect(() => focusRef.current?.scrollIntoView({block: 'center', behavior: 'smooth'}))

    return (
        <div className="launches-resume">
            <div className="launches-resume__item">
                <SectionComponent key="upcoming" title="Próximos Lançamentos" elements={upcoming}/>
            </div>
            
            <hr className="launches-resume__separator"/>
            
            <div className="launches-resume__item" ref={focusRef}>
                <SectionComponent key="next" title="Próximo Lançamento" elements={[next]}/>
            </div>
            
            <hr className="launches-resume__separator"/>
            
            <div className="launches-resume__item">
                <SectionComponent key="lastest" title="Último Lançamento" elements={[lastest]}/>
            </div>
            
            <hr className="launches-resume__separator"/>
            
            <div className="launches-resume__item">
                <SectionComponent key="past" title="Lançamentos Anteriores" elements={past}/>
            </div>
        </div>
    )
}

export default LaunchesResumeComponent