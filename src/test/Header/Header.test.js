import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../Containers/Header/Header';
import { storageMock } from '../test-helpers/localstroage'

describe('<Header />', () => {
  let wrapper;
  const mockUser = {
      id: '1234adsf',
      name: 'Jeff',
      email: 'someemail@mail.com'
  }

  beforeEach(() =>
    wrapper = shallow(<Header />),
    window.localStorage = storageMock()
  );

  test('should call firebaseLogin on click', () => {
    const mockFunc = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockUser)
    }));

    wrapper = shallow(
      <Header
        user={mockUser}
        firebaseLogin={mockFunc}
      />);

    wrapper.find('li').last().simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });

  test('should call firebaseLogout on click', () => {
    const mockFunc = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockUser)
    }));

    wrapper = shallow(
      <Header
        authenticated={mockUser.id}
        user={mockUser}
        firebaseLogout={mockFunc}
      />);

    wrapper.find('li').last().simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });


  test('should render when user authenticated', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockUser)
    }));
    wrapper = shallow(<Header authenticated={mockUser.id} user={mockUser} />);
    expect(wrapper).toMatchSnapshot()
  });

  test('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
