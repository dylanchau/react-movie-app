import { JumbotronContainer } from 'containers/jumbotron'
import { FooterContainer } from 'containers/footer'
import { FaqsContainer } from 'containers/faqs'
import { HeaderContainer } from 'containers/HeaderContainer'
import { Feature, OptForm } from 'components'

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}

export default Home
