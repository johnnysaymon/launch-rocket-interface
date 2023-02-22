import './HeaderStyle.sass'
import logo from './../../Images/spacex-logo.svg'

function HeaderComponent()
{
    return(
        <header className="header">
            <h1>Lançamentos</h1>
            <img src={logo} alt="SpaceX logo" />
        </header>
    )
}

export default HeaderComponent