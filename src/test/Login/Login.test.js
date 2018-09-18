import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../Containers/Login/Login';

describe('<Login />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Login />))

  test('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
