export default function Header() {
return(
    <header className="header mb-4">
        <nav className="navbar navbar-expand-lg bg-white rounded-3 shadow-sm p-3">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-primary" href="/">
                    📝 Мой блог
                </a>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><a className="nav-link active" href="/">Главная</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">О нас</a></li>
                        <li className="nav-item"><a className="nav-link" href="/contact">Контакты</a></li>
                    </ul>
                    
                    <div className="user-menu d-flex align-items-center gap-3">
                        <img src="https://bogdo.studio/assets/images/resources/69/502.jpg" 
                             alt="Аватар" 
                             className="user-avatar" />
                        <span className="fw-semibold">Иван Иванов</span>
                        <button className="btn btn-outline-secondary btn-sm">Выйти</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)
}
