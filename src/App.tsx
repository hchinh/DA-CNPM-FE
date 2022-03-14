import MainWrapper from './Main';
import { Button } from 'antd';

const App = () => {
  return (
    <MainWrapper>
      <div>Hello World</div>
      <Button type='primary'>Open</Button>
    </MainWrapper>
  );
};

export default App;
