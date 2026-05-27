export default function Article(){
          const title1 = 'Знакомство с React: компонентный подход'

    return(
                            <article className="post-card card mb-4">
                        <div className="card-body">
                            <div className="post-header mb-3">
                                <h2 className="card-title h3">{title1}</h2>
                                <div className="meta text-muted small">
                                    Опубликовано: 15.05.2026 | Автор: Иван Иванов | 
                                    <i className="bi bi-clock"></i> 5 мин чтения
                                </div>
                            </div>
                            
                            <p className="card-text">
                                React — это библиотека для создания пользовательских интерфейсов. 
                                Ее главная сила — компонентный подход, который позволяет разбить сложный интерфейс 
                                на независимые, переиспользуемые части. В этой статье мы разберем, как создавать 
                                компоненты и управлять их состоянием.
                            </p>
                            
                            <div className="tags mb-3 d-flex flex-wrap gap-2">
                                <span className="tag">React</span>
                                <span className="tag">JavaScript</span>
                                <span className="tag">Компоненты</span>
                                <span className="tag">Frontend</span>
                            </div>
                            
                            <div className="action-buttons d-flex gap-3">
                                <button className="action-btn btn btn-outline-danger btn-sm like-btn">
                                    ❤️ <span className="like-count">42</span>
                                </button>
                                <button className="action-btn btn btn-outline-secondary btn-sm comment-btn">
                                    💬 <span className="comment-count">7</span> комментариев
                                </button>
                                <button className="action-btn btn btn-outline-primary btn-sm share-btn">
                                    🔗 Поделиться
                                </button>
                            </div>
                        </div>
                    </article>

    )
}