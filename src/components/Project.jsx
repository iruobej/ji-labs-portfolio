export default function Project ({link, projName, desc}) {
    return (
        <div className="project-container">
            <img className="project-img" src={link} alt="Recent Project design" />
            <h3>{projName}</h3>
            <p>{desc}</p>
        </div>
    )
}