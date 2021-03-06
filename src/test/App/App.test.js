import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../Components/App/App'

jest.mock('../../firebase/firebase');

describe('<App />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />))

  test('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});