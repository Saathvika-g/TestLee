import { useNavigate } from 'react-router-dom'
import alexPhoto from '../../assets/headshots - past members/headshot - alex 2022 b.jpg'
import allisonPhoto from '../../assets/headshots - past members/headshot - allie 2022.jpg'
import michaelaPhoto from '../../assets/headshots - past members/headshot - michaela 2022.jpg'
import scottPhoto from '../../assets/headshots - past members/headshot - scott 2023.jpg'
import jaimePhoto from '../../assets/headshots - past members/headshot - Jaime 2022.jpg'
import deepshiPhoto from '../../assets/headshots - past members/headshot - deepshi 2022.jpeg'
import teyaPhoto from '../../assets/headshots - past members/headshot - Teya Nigro.jpg'
import cassidyPhoto from '../../assets/headshots - past members/headshot - cassidy 2022.png'
import arthurPhoto from '../../assets/headshots - past members/headshot - arthur 2022.jpg'
import leaPhoto from '../../assets/headshots - past members/headshot - lea 2022.jpg'
import williamsPhoto from '../../assets/headshots - past members/headshot - william 2022.JPG'
import natiliaPhoto from '../../assets/headshots - past members/headshot - natilia 2022.jpeg'
import sereenPhoto from '../../assets/headshots - past members/headshot - sereen 2022.jpg'
import './Members.css'

function Alumni() {
  const navigate = useNavigate()

  const technicians = [
    {
      name: 'Scott Chen',
      title: 'Technician',
      photo: scottPhoto,
      bio: ''
    }
  ]

  const gradStudents = [
    {
      name: 'Jaime Rodriguez',
      title: 'Graduate Student',
      photo: jaimePhoto,
      bio: ''
    }
  ]

  const undergrads = [
    {
      name: 'Alex Beaudoin',
      title: 'BS Biological Sciences 2025',
      photo: alexPhoto,
      bio: 'Alex joined the Lee Lab to examine the relationship between lifespan and health-span across generations of C. elegans. On campus, he is the current Vice President and former Social Media Coordinator of the Biology Research Club, and a member of UML\'s Honors College. Outside of the classroom, you can find him filling cannoli and baking cookies at a bakery in his hometown, thrifting clothes, or getting bagels with friends.',
      funding: 'Honors Fellowship'
    },
    {
      name: 'Arthur Colunga',
      title: 'BS Biological Sciences 2025',
      photo: arthurPhoto,
      bio: 'Arthur is majoring in biology and set to graduate in May 2025. In the Lee lab, his work focuses on changes in motility with age across different C. elegans genotypes. Outside of the lab, he works as a pharmacy technician and enjoys hiking, reading, and local exploration.',
      funding: 'KCS Science Scholar, NIH Diversity Supplement'
    },
    {
      name: 'Allison Sciarratta',
      title: 'BS Biological Sciences 2025',
      photo: allisonPhoto,
      bio: 'Allie is majoring in Biology and minoring in Chemistry and Pharmaceutical Sciences. At UMass Lowell, she served as the President of the Biology Research Club, Treasurer of the UML Swim and Dive Club, and a tutor in the Biology Department. She joined the Lee lab during the spring semester of her freshman year and is investigating longevity in some of the C. elegans mutants in the lab. Outside of the lab, she enjoys swimming, getting coffee, watching Stranger Things with her sister, and listening to podcasts.',
      funding: 'Immersive Scholarship, Honors Fellowship'
    },
    {
      name: 'Lea Solh',
      title: 'BS Biological Sciences 2024',
      photo: leaPhoto,
      bio: 'My name is Lea Solh and I am a rising Senior at UMass Lowell studying general biology as my major and Spanish studies as my minor. My goal is going to medical school in the future! I joined the Lee lab during my first year at UMass Lowell and have been a member since. I have done my Immersive Scholars project, Honors fellowship, and now currently my honors thesis with Dr. Lee.',
      funding: 'Immersive Scholarship, Honors Fellowship'
    },
    {
      name: 'Michaela Dillon',
      title: 'BS Biological Sciences 2024',
      photo: michaelaPhoto,
      bio: 'Michaela is a Biology major who will graduate in the spring of 2024. She is on the Pre-Health track and recently joined the Lee Lab in the summer after her first year. During her time in lab, she worked on motility, percentage pumping, and pumping rate assays. Michaela is the treasurer of the Navigators Club at UMass Lowell and enjoys reading in her free time.',
      funding: 'Immersive Scholarship, Honors Fellowship'
    },
    {
      name: 'William Miguel',
      title: 'BS Biological Sciences 2024',
      photo: williamsPhoto,
      bio: 'William is a Biology Major and on a pre-medical school path. Before joining Dr. Lee\'s C. elegans lab, he has taken part in multiple programs through organizations like the American Red Cross, US Fish and Wildlife Services, and Lowell General Hospital. Since joining the Lee Lab, William has been working on measuring C. elegans health by measuring how well they can move as they age. Outside of academics, William likes to play or watch soccer, work on puzzles, and binge-watch anime.',
      funding: 'UM-LSAMP, Honors Fellowship'
    },
    {
      name: 'Natilia Woozencroft',
      title: 'BS Chemical Engineering 2024',
      photo: natiliaPhoto,
      bio: '',
      funding: 'Honors Fellowship, UM-LSAMP'
    },
    {
      name: 'Deepshi Patel',
      title: 'Undergraduate Student',
      photo: deepshiPhoto,
      bio: ''
    },
    {
      name: 'Teya Nigro',
      title: 'Undergraduate Student',
      photo: teyaPhoto,
      bio: ''
    },
    {
      name: 'Cassidy Thompson',
      title: 'Undergraduate Student',
      photo: cassidyPhoto,
      bio: ''
    }
  ]

  const visitingResearchers = [
    {
      name: 'Sereen El-Jamal',
      title: 'Summer 2022 - Visiting undergraduate researcher, Marist College',
      photo: sereenPhoto,
      bio: 'Sereen is a pre-med honors student at Marist College in Poughkeepsie, NY. She majors in Biomedical Sciences with a minor in Cognitive Science. She serves on the board of the Muslim Student Association at Marist, is a teaching assistant for Organic Chemistry lab, and works as a medical assistant at Southern Westchester Medical PC in Yonkers, NY with Dr. Joseph Nshiewat. As a Palestinian-American, Sereen spends a lot of her time advocating for Palestinians across the world who have suffered as a result of the occupation. Sereen joined Lee Lab in the summer of 2022 for a collaboration with Marist College where she investigates the role of LET-418 in DNA repair.'
    }
  ]

  const renderMemberCard = (member, index) => (
    <article key={index} className="member-card" aria-labelledby={`alumni-name-${index}`}>
      <div className="member-photo" role="img" aria-label={`Photo of ${member.name}`}>
        <img src={member.photo} alt={`Portrait of ${member.name}`} loading="lazy" />
      </div>
      <div className="member-info">
        <h3 className="member-name" id={`alumni-name-${index}`}>{member.name}</h3>
        {member.title && <p className="member-title" aria-label="Former role">{member.title}</p>}
        {member.bio && <p className="member-bio">{member.bio}</p>}
        {member.funding && (
          <p className="member-funding">
            <strong>Funding:</strong> <span aria-label="Funding sources">{member.funding}</span>
          </p>
        )}
      </div>
    </article>
  )

  return (
    <main className="members-container" role="main">
      <nav aria-label="Breadcrumb navigation">
        <button 
          className="back-button" 
          onClick={() => navigate('/people')} 
          aria-label="Navigate back to People page"
        >
          ← Back to People
        </button>
      </nav>
      
      <header>
        <h1 className="page-title">Lee Lab Alumni</h1>
      </header>
      
      <div className="alumni-sections">
        {technicians.length > 0 && (
          <section className="alumni-category-section" aria-labelledby="technicians-title">
            <h2 className="section-title" id="technicians-title">Technicians</h2>
            <div className="members-list" role="list" aria-label="Alumni technicians">
              {technicians.map((member, index) => renderMemberCard(member, index))}
            </div>
          </section>
        )}

        {gradStudents.length > 0 && (
          <section className="alumni-category-section" aria-labelledby="alumni-grad-title">
            <h2 className="section-title" id="alumni-grad-title">Graduate Students</h2>
            <div className="members-list" role="list" aria-label="Alumni graduate students">
              {gradStudents.map((member, index) => renderMemberCard(member, index))}
            </div>
          </section>
        )}

        {undergrads.length > 0 && (
          <section className="alumni-category-section" aria-labelledby="alumni-undergrad-title">
            <h2 className="section-title" id="alumni-undergrad-title">Undergraduate Students</h2>
            <div className="members-list" role="list" aria-label="Alumni undergraduate students">
              {undergrads.map((member, index) => renderMemberCard(member, index))}
            </div>
          </section>
        )}

        {visitingResearchers.length > 0 && (
          <section className="alumni-category-section" aria-labelledby="visiting-researchers-title">
            <h2 className="section-title" id="visiting-researchers-title">Visiting Researchers</h2>
            <div className="members-list" role="list" aria-label="Visiting researchers">
              {visitingResearchers.map((member, index) => renderMemberCard(member, index))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default Alumni

