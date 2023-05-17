import {Chrono} from 'react-chrono'
import './index.css'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimeLineView = props => {
  const {timelineItemsList} = props
  const renderView = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectItemDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseItemDetails={item} />
  }
  return (
    <div className="chrono-container">
      <div className="responsive-container">
        <div className="heading-container">
          <h1>
            MY JOURNEY OF <br /> CCBP 4.0
          </h1>
        </div>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(each => renderView(each))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimeLineView
