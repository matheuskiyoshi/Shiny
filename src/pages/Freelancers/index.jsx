import Card from "../../components/Card"
import styled from "styled-components"
import colors from "../../utils/style/colors"

const CardsContainer = styled.div`
   display: grid;
   gap: 24px;
   grid-template-rows: 350px 350px;
   grid-template-columns: repeat(2, 1fr);
   align-items: center;
`
const PageTitle = styled.h1`
   font-size: 30px;
   color: black;
   text-align: center;
   padding-bottom: 30px;
`
const PageSubtitle = styled.h2`
   font-size: 20px;
   color: ${colors.secondary};
   font-weigth: 300;
   text-align: center;
   padding-bottom: 30px;
`

const freelancerProfiles = [
   {
      name: 'Jane Doe',
      jobTitle: 'Devops'
   },
   {
      name: 'John Doe',
      jobTitle: 'Frontend developer'
   },
   {
      name: 'Jean Bug',
      jobTitle: 'Fullstack Developer',
   }
]

function Freelancers() {
    
    return (
       <div>
          <PageTitle>Find your service provider</PageTitle>
          <PageSubtitle>
            Here at Shiny we bring together the best profiles for you.
          </PageSubtitle>
          <CardsContainer>
          {freelancerProfiles.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.jobTitle}
                picture={profile.picture}
                title={profile.name}
             />
          ))}
          </CardsContainer>
       </div>
    )
 }

export default Freelancers