import Articles from "../articles/articles"
import Sidebar from "../sidebar/sidebar"

export default function Content(){
  return(
        <div className="row g-4">
            <aside className="col-lg-3">
            <Sidebar/>
            </aside>
            
            <main className="col-lg-9">
                <Articles />
            </main>
        </div>
    
  )
}