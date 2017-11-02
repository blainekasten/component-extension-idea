import App from './App';
import { mount, shallow } from 'enzyme';

describe('Component', () => {
  it('doesnt require special crap', () => {
    const wrapper = mount(<App />);
  });
});
