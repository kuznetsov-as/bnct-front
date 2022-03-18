import './../Nav.css';

const Navbar = () => {
    return (
        <nav className="Nav">
            <a
                className="App-link"
                href="https://www.inp.nsk.su/binp"
            >
                ИЯФ
            </a>
            <a
                className="App-link"
                href="https://www.inp.nsk.su/binp/novosti"
            >
                Новости
            </a>
            <div>Панель</div>
            <div>Настройка</div>
            <div>Журнал</div>
        </nav>
    )
}

export default Navbar