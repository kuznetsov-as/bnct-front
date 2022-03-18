import navbar from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`${navbar.Navbar}`}>
            <a
                className={navbar.Link}
                href="https://www.inp.nsk.su/binp"
            >
                ИЯФ
            </a>
            <a
                className={navbar.Link}
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