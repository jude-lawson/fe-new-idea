import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from '../../Containers/Profile/Profile';

describe('<Profile />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Profile />));

  test('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
