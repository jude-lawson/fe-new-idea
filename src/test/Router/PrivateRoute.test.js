import React from 'react';
import { shallow } from 'enzyme'
import { PrivateRoute } from '../../router/PrivateRoute';

describe('<AppRouter/>', () => {
  let wrapper;
  const mockComponent = {};
  const mockProps = { path: '/' };

  beforeEach(() => wrapper =
  shallow(
    <PrivateRoute
      authenticated={'1111'}
      component={mockComponent}
      props={mockProps}
    />
    ))

  test('should render when no user authenticated', () => {
    wrapper = shallow(<PrivateRoute />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render when user is authenticated', () => {
    expect(wrapper).toMatchSnapshot()
  });
});
