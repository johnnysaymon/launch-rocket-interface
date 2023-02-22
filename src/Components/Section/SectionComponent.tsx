import './SectionStyle.sass'

type Props = {
    title: string,
    elements: JSX.Element[]
}

export default function SectionComponent({ title, elements }: Props)
{
    return (
      <section className="section">
        <h2 className="section__title">{ title }</h2>
        <div className="section__content">
          { elements }
        </div>
      </section>
    )
}