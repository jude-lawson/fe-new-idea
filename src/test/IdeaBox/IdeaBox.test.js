import React from 'react';
import { IdeaBox, mapStateToProps, mapDispatchToProps } from '../../Containers/IdeaBox/IdeaBox';
import { shallow } from 'enzyme';
import { getAllIdeas } from '../../thunks/getAllIdeas';

describe('<IdeaBox />', () => {
  let wrapper;

  const mockIdeas = [
    {id: 1, title: 'hello', body: 'world'},
    {id: 2, title: 'another', body: 'one'}
  ];

  const mockGetIdeas = jest.fn();

  beforeEach(() => wrapper = shallow(
  <IdeaBox
    ideas={mockIdeas}
    getAllIdeas={mockGetIdeas}
  />
  ));

  test('should call getAllIdeas on componentDidMount', async () => {
    const expected = mockIdeas;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      json: () => Promise.resolve()
    }));
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('ideas')).toEqual(mockIdeas);
    expect(mockGetIdeas).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    test('should map savedJobs to props', () => {
      const mockState = {
        allIdeas: mockIdeas
      };
      const expected = {
        ideas: mockIdeas
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  })

  describe('mapDispatchToProps', () => {
    test('should call dispatch with action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getAllIdeas();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getAllIdeas();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  test('should render without crashing', () => {
   expect(wrapper).toMatchSnapshot();
  });
});
