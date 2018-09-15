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

  beforeEach(() => wrapper = shallow(<Profile user={mockUser}/>));

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
