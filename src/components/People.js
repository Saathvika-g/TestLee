import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import currentPhoto from '../assets/headshots - current members/photo - current.jpg';
import alumniPhoto from '../assets/headshots - past members/photo - alums.jpg';

// Import all photos for current members
import cecePhoto from '../assets/headshots - current members/headshot - cece 2024.jpg'
import alanPhoto from '../assets/headshots - current members/headshot - alan 2024.jpg'
import kelinPhoto from '../assets/headshots - current members/headshot - kelin 2023.jpg'
import marybethPhoto from '../assets/headshots - current members/headshot - marybeth 2024.png'
import tahreemPhoto from '../assets/headshots - current members/headshot - tahreem 2024.jpg'
import thiagoPhoto from '../assets/headshots - current members/headshot - thiago 2023.jpeg'
import teresaPhoto from '../assets/headshots - current members/headshot - TWL 2019.JPG'
import annaPhoto from '../assets/headshots - current members/headshot anna 2025.jpeg'

// Import all photos for alumni
import alexPhoto from '../assets/headshots - past members/headshot - alex 2022 b.jpg'
import allisonPhoto from '../assets/headshots - past members/headshot - allie 2022.jpg'
import michaelaPhoto from '../assets/headshots - past members/headshot - michaela 2022.jpg'
import scottPhoto from '../assets/headshots - past members/headshot - scott 2023.jpg'
import jaimePhoto from '../assets/headshots - past members/headshot - Jaime 2022.jpg'
import deepshiPhoto from '../assets/headshots - past members/headshot - deepshi 2022.jpeg'
import teyaPhoto from '../assets/headshots - past members/headshot - Teya Nigro.jpg'
import cassidyPhoto from '../assets/headshots - past members/headshot - cassidy 2022.png'
import arthurPhoto from '../assets/headshots - past members/headshot - arthur 2022.jpg'
import leaPhoto from '../assets/headshots - past members/headshot - lea 2022.jpg'
import williamsPhoto from '../assets/headshots - past members/headshot - william 2022.JPG'
import natiliaPhoto from '../assets/headshots - past members/headshot - natilia 2022.jpeg'
import sereenPhoto from '../assets/headshots - past members/headshot - sereen 2022.jpg'

// Unified Members Page with Toggle
function MembersPage({ initialView = 'current' }) {
  const navigate = useNavigate()
  const [activeView, setActiveView] = useState(initialView)

  // Principal Investigator (fixed at top)
  const principalInvestigator = {
    name: 'Teresa Lee, PhD',
    title: 'Principal Investigator | Assistant Professor of Biological Sciences',
    photo: teresaPhoto,
    bio: 'A lifelong Tar Heel, Teresa (she/her) graduated from the University of North Carolina at Chapel Hill with honors in Biology and Creative Writing. As an undergrad, she studied telomere structure in the lab of Shawn Ahmed (her first exposure to the beauty of C. elegans genetics!). She received her Ph.D. in Molecular and Cell Biology at the University of California, Berkeley, where she was supported by an NSF Graduate Research Fellowship. There, she worked with Barbara Meyer on how chromosome structure regulates crossover recombination during meiosis. For postdoctoral training, she moved to Atlanta to work with David Katz at Emory University, investigating how the transgenerational inheritance of chromatin landscapes affects lifespan. With the support of an NIH IRACDA postdoc fellowship, Teresa has developed and taught classes at Clark Atlanta University, the Emory-Tibet Science Initiative, and Oglethorpe University. She cares deeply about inclusive teaching and thoughtful mentoring. Outside of lab, Teresa can be found in a coffeeshop, on her yoga mat, exploring the city, or (most likely) reading a book.'
  }

  // Current Members Data
  const currentGradStudents = [
    {
      name: 'Marybeth Slack',
      title: 'Applied Biology PhD Student',
      photo: marybethPhoto,
      bio: 'Marybeth graduated from Grove City College in 2024, where she worked with Dr. Lisa Antoszewski studying the epigenetic control of DNA replication and cellular proliferation. While working in the Antoszewski lab, she performed forward genetic screens using Drosophila melanogaster to identify cancer related genes. She is currently pursuing her PhD in Applied Biology at UMass Lowell. Her dissertation is on the intersection of development and longevity in C. elegans. In her free time, Marybeth enjoys spending time on Keuka Lake near her family home, making boba tea runs with her friends and listening to new music from her favorite artists.',
      funding: 'NSF SWIMMER Fellowship'
    },
    {
      name: 'Tahreem Fiaz',
      title: 'Applied Biology PhD Student',
      photo: tahreemPhoto,
      bio: ''
    }
  ]

  const currentUndergrads = [
    {
      name: 'CeCe Allen',
      title: 'Biological Sciences c/o 2027',
      photo: cecePhoto,
      bio: '',
      funding: 'KCS Science Scholars, UML Honors Fellowship'
    },
    {
      name: 'Thiago Borges',
      title: 'Biological Sciences c/o 2026',
      photo: thiagoPhoto,
      bio: 'Thiago (he/him/his) is a first-generation undergraduate student pursuing a Bachelor of Science in Biological Sciences with a concentration in Ecology, Evolution, and Organismal Biology. He is very interested in studying genetics and evolutionary biology which is why he is excited to gain first-hand experience in the Lee Lab.',
      funding: 'RHSA Roads to Research, UM-LSAMP, Honors Fellowship, SDB Choose Development! Fellowship'
    },
    {
      name: 'Anna Doughty',
      title: 'Biological Sciences c/o 2028',
      photo: annaPhoto,
      bio: '',
      funding: 'Immersive Scholarship, UML Honors Fellowship'
    },
    {
      name: 'Alan Dowty',
      title: 'Biological Sciences c/o 2027',
      photo: alanPhoto,
      bio: 'Alan is biology major, specializing in biotechnology. In the Lee lab, he has used human-patient derived mutations in the NuRD (Nucleosome Remodeling and Deacetylase) complex to observe how chromatin affects fertility in C. elegans. He is even more excited about what he can learn in the future. If he\'s not in the lab, he is worried about organic chemistry, playing video games, or spending time with friends.',
      funding: 'Honors Fellowship, KCS Science Scholars'
    },
    {
      name: 'Kelin Funes',
      title: 'Biological Sciences c/o 2026',
      photo: kelinPhoto,
      bio: 'Hi! My name is Kelin (she/her) I am a Biology undergrad with a minor in Public Health. I was born in El Salvador but attended high school in Boston, and I am the first one in my family to attend college. In my spare time I enjoy dancing, cooking, and going on walks. My goal is to become a biotechnologist and work in research.',
      funding: 'RHSA Roads to Research, UM-LSAMP'
    }
  ]

  // Alumni Data
  const alumniTechnicians = [
    {
      name: 'Scott Chen',
      title: 'Technician',
      photo: scottPhoto,
      bio: ''
    }
  ]

  const alumniGradStudents = [
    {
      name: 'Jaime Rodriguez',
      title: 'Graduate Student',
      photo: jaimePhoto,
      bio: ''
    }
  ]

  const alumniUndergrads = [
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

  const renderMemberCard = (member, index, isAlumni = false) => (
    <article key={index} className="member-card" aria-labelledby={`${isAlumni ? 'alumni' : 'member'}-name-${index}`}>
      <div className="member-info">
        <h3 className="member-name" id={`${isAlumni ? 'alumni' : 'member'}-name-${index}`}>{member.name}</h3>
        {member.title && <p className="member-title" aria-label={isAlumni ? "Former role" : "Role"}>{member.title}</p>}
        {member.bio && <p className="member-bio">{member.bio}</p>}
        {member.funding && (
          <p className="member-funding">
            <strong>Funding:</strong> <span aria-label="Funding sources">{member.funding}</span>
          </p>
        )}
      </div>
      <div className="member-photo" role="img" aria-label={`Photo of ${member.name}`}>
        <img src={member.photo} alt={`Portrait of ${member.name}`} loading="lazy" />
      </div>
    </article>
  )

  return (
    <main className="members-container" role="main">
      <header>
        <h1 className="page-title">Lee Lab Members</h1>
      </header>
      
      {/* Principal Investigator Section - Fixed at top */}
      <article className="pi-card" aria-labelledby="pi-name">
        <div className="pi-photo" role="img" aria-label={`Photo of ${principalInvestigator.name}`}>
          <img src={principalInvestigator.photo} alt={`Portrait of ${principalInvestigator.name}`} />
        </div>
        <div className="pi-info">
          <h2 className="pi-name" id="pi-name">{principalInvestigator.name}</h2>
          <p className="pi-title" aria-label="Position">{principalInvestigator.title}</p>
          {principalInvestigator.bio && <div className="pi-bio" aria-label="Biography">{principalInvestigator.bio}</div>}
        </div>
      </article>

      {/* Toggle Switch */}
      <div className="toggle-switch-container">
        <button 
          className={`toggle-button ${activeView === 'current' ? 'active' : ''}`}
          onClick={() => setActiveView('current')}
          aria-label="View Current Members"
        >
          Current Members
        </button>
        <button 
          className={`toggle-button ${activeView === 'alumni' ? 'active' : ''}`}
          onClick={() => setActiveView('alumni')}
          aria-label="View Alumni"
        >
          Alumni
        </button>
      </div>

      {/* Current Members Section */}
      {activeView === 'current' && (
        <div className="alumni-sections">
          {/* Graduate Students Section */}
          {currentGradStudents.length > 0 && (
            <section className="alumni-category-section" aria-labelledby="grad-students-title">
              <h2 className="section-title" id="grad-students-title">Graduate Students</h2>
              <div className="members-list" role="list" aria-label="Graduate students">
                {currentGradStudents.map((member, index) => renderMemberCard(member, index, false))}
              </div>
            </section>
          )}

          {/* Undergraduate Students Section */}
          {currentUndergrads.length > 0 && (
            <section className="alumni-category-section" aria-labelledby="undergrad-students-title">
              <h2 className="section-title" id="undergrad-students-title">Undergraduate Students</h2>
              <div className="members-list" role="list" aria-label="Undergraduate students">
                {currentUndergrads.map((member, index) => renderMemberCard(member, index, false))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Alumni Section */}
      {activeView === 'alumni' && (
        <div className="alumni-sections">
          {alumniTechnicians.length > 0 && (
            <section className="alumni-category-section" aria-labelledby="technicians-title">
              <h2 className="section-title" id="technicians-title">Technicians</h2>
              <div className="members-list" role="list" aria-label="Alumni technicians">
                {alumniTechnicians.map((member, index) => renderMemberCard(member, index, true))}
              </div>
            </section>
          )}

          {alumniGradStudents.length > 0 && (
            <section className="alumni-category-section" aria-labelledby="alumni-grad-title">
              <h2 className="section-title" id="alumni-grad-title">Graduate Students</h2>
              <div className="members-list" role="list" aria-label="Alumni graduate students">
                {alumniGradStudents.map((member, index) => renderMemberCard(member, index, true))}
              </div>
            </section>
          )}

          {alumniUndergrads.length > 0 && (
            <section className="alumni-category-section" aria-labelledby="alumni-undergrad-title">
              <h2 className="section-title" id="alumni-undergrad-title">Undergraduate Students</h2>
              <div className="members-list" role="list" aria-label="Alumni undergraduate students">
                {alumniUndergrads.map((member, index) => renderMemberCard(member, index, true))}
              </div>
            </section>
          )}

          {visitingResearchers.length > 0 && (
            <section className="alumni-category-section" aria-labelledby="visiting-researchers-title">
              <h2 className="section-title" id="visiting-researchers-title">Visiting Researchers</h2>
              <div className="members-list" role="list" aria-label="Visiting researchers">
                {visitingResearchers.map((member, index) => renderMemberCard(member, index, true))}
              </div>
            </section>
          )}
        </div>
      )}

      <footer className="people-footer-nav" role="navigation" aria-label="People page navigation">
        <button 
          className="footer-nav-button"
          onClick={() => navigate('/people')}
          aria-label="Navigate to People landing page"
        >
          ← Back to People
        </button>
      </footer>
    </main>
  )
}

function People() {
  const location = useLocation()
  
  // Determine which view to show based on route
  const isCurrentMembersView = location.pathname === '/current-members'
  const isAlumniView = location.pathname === '/alumni'
  const isMainView = !isCurrentMembersView && !isAlumniView

  // Landing page view
  if (isMainView) {
    return (
      <>
        <PeopleLanding />
        <PeopleStyles />
      </>
    )
  }
  
  // Combined members view (both current and alumni)
  if (isCurrentMembersView || isAlumniView) {
    return (
      <>
        <MembersPage initialView={isCurrentMembersView ? 'current' : 'alumni'} />
        <PeopleStyles />
      </>
    )
  }

  // Landing page view (also add styles here)
  return (
    <>
      <PeopleLanding />
      <PeopleStyles />
    </>
  )
}

// Styles component
function PeopleStyles() {
  return (
    <style>{`
      /* Landing Page Styles */
      .people-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
        text-align: center;
      }

      .people-heading {
        font-size: 3rem;
        font-weight: 400;
        color: #000000;
        margin-bottom: 3.5rem;
        text-align: center;
        letter-spacing: -0.02em;
      }

      .people-title {
        font-size: 3rem;
        font-weight: 300;
        color: #111827;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
      }

      .people-subtitle {
        font-size: 1.2rem;
        color: #6b7280;
        margin-bottom: 3rem;
        font-weight: 400;
      }

      .photo-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        max-width: 1400px;
        margin: 0 auto;
      }

      .photo-container {
        position: relative;
        height: 400px;
        aspect-ratio: 16 / 9;
        border-radius: 12px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
        border: none;
        background: none;
        padding: 0;
        text-align: left;
        width: 100%;
      }

      .photo-placeholder {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .photo-placeholder img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .photo-container h3 {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        z-index: 10;
      }

      .photo-container:hover,
      .photo-container:focus {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        outline: 2px solid #667eea;
        outline-offset: 2px;
      }

      .photo-container:focus-visible {
        outline: 3px solid #667eea;
        outline-offset: 3px;
      }

      .photo-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.4) 0%,
          rgba(0, 0, 0, 0.6) 100%
        );
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
        padding: 2rem;
        transition: background 0.3s ease;
      }

      .photo-container:hover .photo-overlay {
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.7) 100%
        );
      }

      .photo-title {
        font-size: 2.5rem;
        font-weight: 400;
        color: #ffffff;
        margin-bottom: 0.5rem;
        letter-spacing: -0.01em;
      }

      .photo-subtitle {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.9);
        font-weight: 300;
      }

      .photo-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
        background-position: center;
        transition: transform 0.5s ease;
      }

      .photo-container:hover .photo-background {
        transform: scale(1.05);
      }

      .current-members-bg {
        background: linear-gradient(
          135deg,
          #667eea 0%,
          #764ba2 100%
        );
      }

      .alumni-bg {
        background: linear-gradient(
          135deg,
          #f093fb 0%,
          #f5576c 100%
        );
      }

      /* Members Page Styles */
      .members-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem 2rem;
        padding-bottom: 10rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        position: relative;
      }

      .back-button {
        background: none;
        border: none;
        color: #333333;
        font-size: 1rem;
        cursor: pointer;
        margin-bottom: 2rem;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;
      }

      .back-button:hover {
        background-color: #f5f5f5;
      }

      .page-title {
        font-size: 3rem;
        font-weight: 400;
        color: #000000;
        margin-bottom: 3.5rem;
        text-align: left;
        letter-spacing: -0.02em;
      }

      /* Principal Investigator Card - Clean Layout */
      .pi-card {
        display: flex;
        align-items: flex-start;
        gap: 2.5rem;
        margin-bottom: 4rem;
        padding-bottom: 3rem;
        border-bottom: 2px solid #e5e7eb;
      }

      .pi-photo {
        flex-shrink: 0;
        width: 384px;
        height: 384px;
        overflow: hidden;
        background: #f3f4f6;
        border-radius: 8px;
        align-self: flex-start;
      }

      .pi-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .pi-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;
        justify-content: flex-start;
        align-items: flex-start;
        align-self: flex-start;
      }

      .pi-name {
        font-size: 2.4rem;
        font-weight: 400;
        color: #000000;
        margin: 0;
        margin-top: 0;
        line-height: 1.3;
      }

      .pi-title {
        font-size: 1.3rem;
        color: #1a1a1a;
        font-weight: 400;
        margin: 0;
        line-height: 1.6;
      }

      .pi-bio {
        font-size: 1.15rem;
        color: #000000;
        line-height: 1.9;
        margin-top: 1.2rem;
        font-weight: 300;
      }

      /* Section Titles */
      .alumni-sections {
        margin-top: 2rem;
      }

      .alumni-category-section {
        margin-bottom: 4rem;
      }

      .section-title {
        font-size: 2rem;
        font-weight: 400;
        color: #000000;
        margin-bottom: 2.5rem;
        letter-spacing: -0.01em;
        text-transform: none;
      }

      /* Member List - Simple Vertical Layout */
      .members-list {
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      .member-card {
        display: flex;
        align-items: flex-start;
        gap: 3rem;
        padding: 3rem 0;
        border-bottom: 1px solid #e5e7eb;
      }

      .member-card:last-child {
        border-bottom: none;
      }

      .member-photo {
        flex-shrink: 0;
        width: 288px;
        height: 288px;
        overflow: hidden;
        background: #f3f4f6;
        border-radius: 8px;
        align-self: flex-start;
      }

      .member-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .member-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 0;
        justify-content: flex-start;
        align-items: flex-start;
        align-self: flex-start;
      }

      .member-name {
        font-size: 1.8rem;
        font-weight: 400;
        color: #000000;
        margin: 0;
        margin-top: 0;
        line-height: 1.4;
      }

      .member-title {
        font-size: 1.25rem;
        color: #1a1a1a;
        font-weight: 400;
        margin: 0;
        line-height: 1.6;
      }

      .member-degree {
        font-size: 1rem;
        color: #4b5563;
        font-style: italic;
        margin: 0;
        line-height: 1.6;
      }

      .member-years {
        font-size: 1rem;
        color: #4b5563;
        margin: 0;
        line-height: 1.6;
      }

      .member-bio {
        font-size: 1.15rem;
        color: #000000;
        line-height: 1.9;
        margin-top: 1rem;
        font-weight: 300;
      }

      .member-after {
        font-size: 1rem;
        color: #111827;
        margin-top: 0.75rem;
        padding-top: 0.75rem;
        border-top: 1px solid #e5e7eb;
      }

      .member-after strong {
        font-weight: 500;
        color: #111827;
      }

      .member-funding {
        font-size: 1.1rem;
        color: #1a1a1a;
        margin-top: 0.75rem;
        font-weight: 300;
      }

      .member-funding strong {
        font-weight: 500;
        color: #000000;
      }

      /* Toggle Switch */
      .toggle-switch-container {
        display: flex;
        justify-content: center;
        gap: 0;
        margin: 3rem 0;
        background: #f3f4f6;
        border-radius: 8px;
        padding: 0.25rem;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
      }

      .toggle-button {
        flex: 1;
        padding: 0.75rem 2rem;
        border: none;
        background: transparent;
        color: #4b5563;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        border-radius: 6px;
        transition: all 0.3s ease;
        font-family: inherit;
      }

      .toggle-button:hover {
        color: #000000;
        background: rgba(0, 0, 0, 0.05);
      }

      .toggle-button.active {
        background: #ffffff;
        color: #000000;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .toggle-button:focus {
        outline: 2px solid #667eea;
        outline-offset: 2px;
      }

      /* Footer Navigation */
      .people-footer-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin-top: 4rem;
        padding-top: 3rem;
        padding-bottom: 2rem;
        border-top: 2px solid #e5e7eb;
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
        background: #ffffff;
        z-index: 100;
        box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
      }

      .footer-nav-button {
        background: none;
        border: 2px solid #000000;
        color: #000000;
        font-size: 1.1rem;
        font-weight: 400;
        padding: 0.75rem 2rem;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
      }

      .footer-nav-button:hover {
        background-color: #000000;
        color: #ffffff;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .footer-nav-button:active {
        transform: translateY(0);
      }

      .footer-nav-button:focus {
        outline: 3px solid #667eea;
        outline-offset: 2px;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .people-container {
          padding: 2rem 1.5rem;
        }

        .people-heading {
          font-size: 2.2rem;
          margin-bottom: 2rem;
        }

        .people-title {
          font-size: 2rem;
        }

        .people-subtitle {
          font-size: 1rem;
        }

        .photo-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .photo-container {
          height: 400px;
        }

        .photo-container h3 {
          font-size: 1.25rem;
          bottom: 15px;
          left: 15px;
        }

        .photo-title {
          font-size: 2rem;
        }

        .photo-subtitle {
          font-size: 1rem;
        }

        .members-container {
          padding: 2rem 1.5rem;
        }

        .page-title {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .pi-card {
          flex-direction: column;
          gap: 1.5rem;
          padding-bottom: 2rem;
        }

        .pi-photo {
          width: 312px;
          height: 312px;
          align-self: flex-start;
        }

        .pi-name {
          font-size: 2rem;
        }

        .pi-title {
          font-size: 1.15rem;
        }

        .pi-bio {
          font-size: 1.05rem;
        }

        .member-card {
          gap: 2rem;
          padding: 2rem 0;
        }

        .member-photo {
          width: 192px;
          height: 192px;
        }

        .member-name {
          font-size: 1.5rem;
        }

        .member-title {
          font-size: 1.1rem;
        }

        .member-bio {
          font-size: 1.05rem;
        }

        .member-funding {
          font-size: 1rem;
        }

        .section-title {
          font-size: 1.7rem;
        }

        .page-title {
          font-size: 2.2rem;
        }

        .members-container {
          padding-bottom: 8rem;
        }

        .toggle-switch-container {
          max-width: 100%;
          margin: 2rem 0;
        }

        .toggle-button {
          padding: 0.65rem 1rem;
          font-size: 0.9rem;
        }

        .people-footer-nav {
          margin-top: 3rem;
          padding-top: 2rem;
          padding-bottom: 1.5rem;
          flex-direction: column;
          align-items: stretch;
        }

        .footer-nav-button {
          width: 100%;
          text-align: center;
          font-size: 1rem;
          padding: 0.65rem 1.5rem;
        }
      }
    `}</style>
  )
}

// Landing page component
function PeopleLanding() {
  const navigate = useNavigate()

  return (
    <div className="people-container">
      <h1 className="people-heading">People</h1>
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
