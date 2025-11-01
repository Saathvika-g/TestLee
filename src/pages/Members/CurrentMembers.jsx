import { useNavigate } from 'react-router-dom'
import cecePhoto from '../../assets/headshots - current members/headshot - cece 2024.jpg'
import alanPhoto from '../../assets/headshots - current members/headshot - alan 2024.jpg'
import kelinPhoto from '../../assets/headshots - current members/headshot - kelin 2023.jpg'
import marybethPhoto from '../../assets/headshots - current members/headshot - marybeth 2024.png'
import tahreemPhoto from '../../assets/headshots - current members/headshot - tahreem 2024.jpg'
import thiagoPhoto from '../../assets/headshots - current members/headshot - thiago 2023.jpeg'
import teresaPhoto from '../../assets/headshots - current members/headshot - TWL 2019.JPG'
import annaPhoto from '../../assets/headshots - current members/headshot anna 2025.jpeg'
import './Members.css'

function CurrentMembers() {
  const navigate = useNavigate()

  // Principal Investigator
  const principalInvestigator = {
    name: 'Teresa Lee, PhD',
    title: 'Principal Investigator | Assistant Professor of Biological Sciences',
    photo: teresaPhoto,
    bio: 'A lifelong Tar Heel, Teresa (she/her) graduated from the University of North Carolina at Chapel Hill with honors in Biology and Creative Writing. As an undergrad, she studied telomere structure in the lab of Shawn Ahmed (her first exposure to the beauty of C. elegans genetics!). She received her Ph.D. in Molecular and Cell Biology at the University of California, Berkeley, where she was supported by an NSF Graduate Research Fellowship. There, she worked with Barbara Meyer on how chromosome structure regulates crossover recombination during meiosis. For postdoctoral training, she moved to Atlanta to work with David Katz at Emory University, investigating how the transgenerational inheritance of chromatin landscapes affects lifespan. With the support of an NIH IRACDA postdoc fellowship, Teresa has developed and taught classes at Clark Atlanta University, the Emory-Tibet Science Initiative, and Oglethorpe University. She cares deeply about inclusive teaching and thoughtful mentoring. Outside of lab, Teresa can be found in a coffeeshop, on her yoga mat, exploring the city, or (most likely) reading a book.'
  }

  // Graduate Students
  const gradStudents = [
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

  // Undergraduate Students
  const undergrads = [
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

  const renderMemberCard = (member, index) => (
    <article key={index} className="member-card" aria-labelledby={`member-name-${index}`}>
      <div className="member-photo" role="img" aria-label={`Photo of ${member.name}`}>
        <img src={member.photo} alt={`Portrait of ${member.name}`} loading="lazy" />
      </div>
      <div className="member-info">
        <h3 className="member-name" id={`member-name-${index}`}>{member.name}</h3>
        {member.title && <p className="member-title" aria-label="Role">{member.title}</p>}
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
        <button className="back-button" onClick={() => navigate('/people')} aria-label="Navigate back to People page">
          ← Back to People
        </button>
      </nav>
      
      <header>
        <h1 className="page-title">Lee Lab Current Members</h1>
      </header>
      
      {/* Principal Investigator Section */}
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

      <div className="alumni-sections">
        {/* Graduate Students Section */}
        <section className="alumni-category-section" aria-labelledby="grad-students-title">
          <h2 className="section-title" id="grad-students-title">Graduate Students</h2>
          <div className="members-list" role="list" aria-label="Graduate students">
            {gradStudents.map((member, index) => renderMemberCard(member, index))}
          </div>
        </section>

        {/* Undergraduate Students Section */}
        <section className="alumni-category-section" aria-labelledby="undergrad-students-title">
          <h2 className="section-title" id="undergrad-students-title">Undergraduate Students</h2>
          <div className="members-list" role="list" aria-label="Undergraduate students">
            {undergrads.map((member, index) => renderMemberCard(member, index))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default CurrentMembers
