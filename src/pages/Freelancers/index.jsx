import Card from "../../components/Card"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import { useFetch, useTheme } from "../../utils/hooks"
import { Loader } from "../../utils/style/Atoms"
import { Link } from 'react-router-dom'

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
const LoaderWrapper = styled.div`
   display: flex;
   justify-content: center;
`

function Freelancers() {
   const { theme } = useTheme()
   const { data, isLoading, error } = useFetch(
      `http://localhost:8000/freelances`
   )
   const freelancersList = data?.freelancersList

   if (error) {
      return <span>Oops! There is an error</span>
   }
    
    return (
       <div>
          <PageTitle theme={theme}>Find your service provider</PageTitle>
          <PageSubtitle theme={theme}>
            Here at Shiny we bring together the best profiles for you.
          </PageSubtitle>
          {isLoading ? (
            <LoaderWrapper>
               <Loader theme={theme} data-testid='loader' />
            </LoaderWrapper>
          ) : (
          <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
             />
            </Link>
          ))}
          </CardsContainer>
         )}
       </div>
    )
 }

export default Freelancers