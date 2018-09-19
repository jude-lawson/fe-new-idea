import React from 'react';
import { shallow } from 'enzyme'
import Contributions from '../../Components/Contributions/Contributions'

describe('<Contributions />', () => {
  let wrapper;
  const mockContributions = [
    {
      id: 1,
      title: 'hello',
      author: {
        username: 'Jeff',
        profile_url_pic: 'SomeURL'
      },
      body: 'world'
    }
  ]
  beforeEach(() => wrapper = shallow(<Contributions contributions={mockContributions} />))

  test('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
