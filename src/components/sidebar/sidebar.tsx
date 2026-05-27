export default function Sidebar(){
    return(
                <div className="sidebar-card">
                    <div className="card shadow-sm">
                        <div className="card-header bg-white fw-bold">
                            📂 Категории
                        </div>
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Новости
                                    <span className="badge bg-primary rounded-pill">12</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Статьи
                                    <span className="badge bg-primary rounded-pill">8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Видео
                                    <span className="badge bg-primary rounded-pill">5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    JavaScript
                                    <span className="badge bg-primary rounded-pill">15</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    React
                                    <span className="badge bg-primary rounded-pill">10</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="card shadow-sm mt-3">
                        <div className="card-header bg-white fw-bold">
                            👤 Об авторе
                        </div>
                        <div className="card-body text-center">
                            <img src="https://bogdo.studio/assets/images/resources/69/502.jpg" 
                                 alt="Author" 
                                 className="rounded-circle mb-2" 
                                 style={{width: '80px', height: '80px'}} />
                            <h6 className="mb-1">Иван Иванов</h6>
                            <p className="text-muted small">Full-stack разработчик, 8 лет опыта. Пишу о React, JavaScript и архитектуре.</p>
                        </div>
                    </div>
                </div>
    )
}