import * as S from './style';
import './App.css';
import LinkImg from './components/linkImg';

function App() {
  const links = [
    { src: '/assets/B1ND.png', link: 'https://b1nd.com/#/service_intro' },
    { src: '/assets/github.webp', link: 'https://github.com/eunchan2815' },
    { src: '/assets/notion.svg', link: 'https://succinct-breakfast-604.notion.site/177cba4137ad80c78dd7e91a19d7f19e' },
    { src: '/assets/gmail.png', link: 'mailto:kimeunchan2815@gmail.com' },
    { src: '/assets/velog.png', link: 'https://velog.io/@eunchan/posts' },
    { src: '/assets/instagram.webp', link: 'https://www.instagram.com/eunchan_chan_cham/' }
  ];

  return (
    <S.Background>
      <S.TextWrapper>
        <S.Text>
          iOS developer eunchan
        </S.Text>
        <S.ImagesWrapper>      
          {links.map((link, index) => (
            <LinkImg 
              key={link.link} 
              src={link.src} 
              link={link.link} 
              index={index} 
            />
          ))}
        </S.ImagesWrapper>
      </S.TextWrapper>
    </S.Background>
  );
}

export default App;