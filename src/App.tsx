import MainWrapper from './Main';
import Routes from 'routes';

const App = () => {
  document.title = 'Multishop';
  return (
    <MainWrapper>
      <Routes />
    </MainWrapper>
  );
};

export default App;
