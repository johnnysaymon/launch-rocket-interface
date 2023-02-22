import Launch from "../../Models/Launch"
import './LaunchItem.sass'

export enum LaunchItemMode {
    LASTEST,
    NEXT,
    ONCOMING,
    PAST,
}

export default function LaunchItemComponent({ launch, mode }: LaunchProp)
{
    return (
        <article className={'launch-item--' + resolveSufixClassName(mode)}>
            <h2 className="launch-item__title">{launch.name}</h2>
            <p className="launch-item__date">{launch.date.toLocaleString('pt-BR')}</p>
        </article>
    )
}

LaunchItemComponent.defaultProps = {
    mode: LaunchItemMode.NEXT
}

function resolveSufixClassName(mode: LaunchItemMode): string
{
    switch(mode) {
        case LaunchItemMode.LASTEST: return 'lastest'
        case LaunchItemMode.NEXT: return 'next'
        case LaunchItemMode.ONCOMING: return 'oncoming'
    }

    return 'past'
}

type LaunchProp = {
    launch: Launch,
    mode: LaunchItemMode
}