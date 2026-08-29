import { projects } from '../data/projects'
import Project from './Project'
export default function ProjList () {
    return (
        <div className='proj-list-container'>
            <ul className="proj-list">
                {projects.map(project => {
                    const { name, src, desc } = project
                    return (
                        <li key={name}><Project  link={src} projName={name} desc={desc}/></li>
                    )
                })}
            </ul>
        </div>
    )
}