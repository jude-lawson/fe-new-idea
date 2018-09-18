import React from 'react';
import { shallow } from 'enzyme';
import { Idea } from '../../Containers/Idea/Idea';

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

  beforeEach(() => wrapper = shallow(<Idea />));

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
