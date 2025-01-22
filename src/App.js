import logo from './logo.svg';
import * as S from './style';
import './App.css';

function App() {
  return (
    <S.Background>
      <S.ImagesWrapper>      
      <S.Images src='/assets/B1ND.png'/>
      <S.Images src='/assets/github.webp'/>
      <S.Images src='/assets/notion.svg'/>
      <S.Images src='/assets/gmail.png'/>
      <S.Images src='/assets/velog.png'/>
      <S.Images src='/assets/instagram.webp'/>
      </S.ImagesWrapper>
    </S.Background>
  );
}

export default App;
