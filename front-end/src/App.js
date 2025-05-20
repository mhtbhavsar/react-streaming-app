import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
// import { useState } from 'react';
// import VideoPlayer from './components/VideoPlayer';

const Container = styled.div`
  display: flex
`
const Main = styled.div``;

const Wrapper = styled.div``;

function App() {

  /** Video player code commented */
  // const [videoId, setVideoId] = useState(null)

  // function playVideo(e, videoId){
  //   e.preventDefault()
  //   setVideoId(videoId)
  // }

  // return (
  //   <div className="App">
  //     {videoId && <VideoPlayer videoId={videoId}></VideoPlayer>} <br />
  //     <button onClick={(e)=>{playVideo(e, 'f1')}}>Play Video 1</button>
  //     <button onClick={(e)=>{playVideo(e, 'f2')}}>Play Video 2</button>
  //     <button onClick={(e)=>{playVideo(e, 'f3')}}>Play Video 3</button>
  //   </div>
  // );

  return (
    <Container>
      <Menu/>
      <Main>
        <Navbar/>
        <Wrapper>
          Video cards
        </Wrapper>
      </Main>
    </Container>
  )
}

export default App;