import Card from "../../components/Card"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import { useState, useEffect } from "react"
import { Loader } from "../../utils/style/Atoms"

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
   const [isDataLoading, setDataLoading] = useState(false)
   const [error, setError] = useState(false)
   const [freelancersList, setFreelancersList] = useState([])

   useEffect(() => {
      async function fetchFreelancers() {
         setDataLoading(true)
         try { 
            const response = await fetch(`http://localhost:8000/freelances`)
            const { freelancersList } = await response.json()
            setFreelancersList(freelancersList)
         } catch (err) {
            console.log('Error', err)
            setError(true)
         } finally {
            setDataLoading(false)
         }
      }
      fetchFreelancers()
   }, [])
   
   if (error) {
      return <span>Oops! There is an error</span>
   }
    
    return (
       <div>
          <PageTitle>Find your service provider</PageTitle>
          <PageSubtitle>
            Here at Shiny we bring together the best profiles for you.
          </PageSubtitle>
          {isDataLoading ? (
            <LoaderWrapper>
               <Loader />
            </LoaderWrapper>
          ) : (
          <CardsContainer>
          {freelancersList.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
             />
          ))}
          </CardsContainer>
         )}
       </div>
    )
 }

export default Freelancers