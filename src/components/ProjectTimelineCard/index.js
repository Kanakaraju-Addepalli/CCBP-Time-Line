import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectItemDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectItemDetails

  return (
    <>
      <div className="project-card-container">
        <img src={imageUrl} alt="project" className="image" />

        <div className="title-duration-container">
          <h1 className="title">{projectTitle}</h1>
          <div className="duration-container">
            <AiFillCalendar />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <a
          className="link"
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </a>
      </div>
    </>
  )
}

export default ProjectTimelineCard
