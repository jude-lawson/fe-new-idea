import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from '../../Containers/Login/Login';

describe('<Login />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Login />))

  test('should call firebaseLogin on click', () => {
    const mockFunc = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve()
    }));

    wrapper = shallow(
      <Login
        firebaseLogin={mockFunc}
      />);

    wrapper.find('button').simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch with firebaseLogout', () => {
      const mockDispatch = jest.fn();
      const firebaseLogin = jest.fn();
      const actionToDispatch = firebaseLogin();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.firebaseLogin();

      expect(mockDispatch).toHaveBeenCalled();
    });

  });

  test('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
