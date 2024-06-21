import React from 'react'
import {Container,Grid,Header,List,Segment,Divider,Image} from 'semantic-ui-react'

const Footer = () => {
  return (
    <footer style={{ padding: '0' }}>
      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={4}>
            <Header inverted as='h4' content='Games' style={{ color: '#C89B3C', fontFamily: 'Source Serif' }}/>
            <List link inverted>
              <List.Item as='a' style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>Wildrift</List.Item>
              <List.Item as='a' style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>Valorant</List.Item>
              <List.Item as='a' style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>Teamfight Tactics</List.Item>
              <List.Item as='a' style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>League of Legends</List.Item>
              <List.Item as='a' style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>Legends of Runterra</List.Item>
              </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h4' content='Media' style={{ color: '#C89B3C', fontFamily: 'Source Serif' }}/>
            <List link inverted>
              <List.Item as='a' style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>Forge</List.Item>
              <List.Item as='a' style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>Music</List.Item>
              <List.Item as='a' style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>Arcane</List.Item>
              <List.Item as='a' style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>Esports</List.Item>
              <List.Item as='a' style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>Dev Vlog</List.Item>
              </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Bilgewater' style={{ color: '#C89B3C', fontFamily: 'Source Serif' }} />
            <p style={{ color: '#F0E6D2', fontFamily: 'Yaldevi' }}>
              Bilgewater, situated on the Serpent Isles in Runeterra, is a bustling port city renowned for its lawless ambiance and thriving maritime trade. It serves as a haven for pirates and smugglers, boasting a rich cultural blend and offering both opportunities for fortune and perilous adventures.
              </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/assets/images/Bilgewater_Crest.webp' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>Trial by Fire</List.Item>
          <List.Item as='a' href='#'>Parrrley</List.Item>
          <List.Item as='a' href='#'>Remove Scurvy</List.Item>
          <List.Item as='a' href='#'>Powder Keg</List.Item>
          <List.Item as='a' href='#'>Cannon Barrage</List.Item>
        </List>
      </Container>
    </Segment>
    </footer>
  )
}

export default Footer