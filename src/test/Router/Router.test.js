import React from 'react';
import { shallow } from 'enzyme'
import { AppRouter, mapStateToProps } from '../../router/Router';

describe('<AppRouter/>', () => {
  let wrapper;
  const mockAuth = {
    id: '1111',
    userName: 'Joben'
  }

  const mockIdeas = [
    {id: 1, title: 'hello', body: 'world'},
    {id: 2, title: 'another', body: 'one'}
  ];

  beforeEach(() => wrapper = shallow(<AppRouter authenticated={mockAuth.id} ideas={mockIdeas} />));

  test('should render when no user authenticated', () => {
    wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot()
  });

  test('should render when user is authenticated', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should map user to to state', () => {
      const mockState = {
        user: {
          id: '1232dsac',
          userName: 'some name'
        }
      };

      const expectedState = {
        authenticated: '1232dsac'
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expectedState);
    });
});
