import React from 'react';
import { shallow } from 'enzyme';
import { Idea, mapStateToProps, mapDispatchToProps } from '../../Containers/Idea/Idea';
import { getIdeaById } from '../../thunks/getIdea';

describe('<Idea />', () => {
  let wrapper;
  const mockIdea ={
    title: 'Hello',
    body: 'World',
    author: {
      username: 'defaultuser'
    },
    contributions: [
      {
        id: 2,
        title: 'I love hello worlds',
        body: 'so much love'
      }
    ]
  };
  const mockGetIdeaById = jest.fn();

  beforeEach(() => wrapper = shallow(<Idea getIdeaById={mockGetIdeaById} />));

  test('should call getIdeaByIdFromDb on componentDidMount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'getIdeaByIdFromDb');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  test('should call getIdeaById', () => {
    const spy = wrapper.instance().props.getIdeaById;
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    test('should map idea to to state', () => {
      const mockState = {
        idea: mockIdea
      };

      const expectedState = {
        idea: mockIdea
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    test('should getIdeaById to props', () => {
      const mockId = 3;
      const mockDispatch = jest.fn();
      const actionToDispatch = getIdeaById(mockId);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getIdeaById();

      expect(mockDispatch).toHaveBeenCalled();
    })
  })


  test('should render when idea present', () => {
    wrapper = shallow(<Idea idea={mockIdea} />)
  });

  test('should render loading when loading is true', () => {
    wrapper.setState({ loading: true });
    expect(wrapper).toMatchSnapshot();
  });

  test('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
