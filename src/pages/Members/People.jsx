import { useNavigate } from 'react-router-dom'
import './People.css'
import currentPhoto from '../../assets/headshots - current members/photo - current.jpg';
import alumniPhoto from '../../assets/headshots - past members/photo - alums.jpg';

function People() {
  const navigate = useNavigate()

  return (
    <div className="people-container">
      
      <div className="photo-grid">
        <div 
          className="photo-container"
          onClick={() => navigate('/current-members')}
        >
          <div className="photo-placeholder current-members-photo">
            <img 
              src={currentPhoto}
              alt="Current Lab Members"
            />
          </div>
          <h3>Current Lab Members</h3>
        </div>

        <div 
          className="photo-container"
          onClick={() => navigate('/alumni')}
        >
          <div className="photo-placeholder alumni-photo">
            <img src={alumniPhoto} alt="Alumni Members"/>
          </div>
          <h3>Alumni</h3>
        </div>
      </div>
    </div>
  )
}

export default People

