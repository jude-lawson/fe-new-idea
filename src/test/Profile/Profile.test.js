import React from 'react';
import { shallow } from 'enzyme';
import { Profile, mapStateToProps, mapDispatchToProps } from '../../Containers/Profile/Profile';

describe('<Profile />', () => {
  let wrapper;
  const mockUser = {
    name: 'Joben',
    id: '3214adf',
    image: 'some-url-here'
  }
  const mockIdeas = [{title: 'hey', body: 'dude this is a body', id: 5}];
  const mockMyIdeas = [{title: 'hey', body: 'second idea', id: 8}];


  beforeEach(() => wrapper = shallow(<Profile user={mockUser} ideas={mockIdeas} myIdeas={mockMyIdeas} />));

  test('componentDidMount', () => {
    const allMockIdeas = [
      {title: 'hey', body: 'dude this is a body', id: 5},
      {title: 'hey', body: 'second idea', id: 8}]
    wrapper.instance().componentDidMount();


    expect(wrapper.state('ideas')).toEqual(allMockIdeas)
  })

  describe('mapStateToProps', () => {
    test('should map user to props', () => {
      const mockState = {
        user: mockUser
      };
      const expected = {
        user: mockUser
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });


  test('should not render a user when none present', () => {
   wrapper = shallow(<Profile user={{}} />)
   expect(wrapper).toMatchSnapshot();
  })


  test('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
