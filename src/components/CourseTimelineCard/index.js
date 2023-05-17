import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseItemDetails} = props
  const {courseTitle, description, duration, tagsList} = courseItemDetails

  return (
    <>
      <div className="course-timeline-container">
        <div className="course-title-container">
          <h1 className="title">{courseTitle}</h1>
          <div className="duration-container">
            <AiFillClockCircle />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <ul className="tag-list-container">
          {tagsList.map(each => (
            <li key={each.id} className="tag">
              <p>{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CourseTimelineCard
