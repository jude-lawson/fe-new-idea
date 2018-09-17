import React from 'react';
import { shallow } from 'enzyme';
import { IdeaCard, mapStateToProps } from '../../Containers/IdeaCard/IdeaCard';

describe('IdeaCard', () => {
  let wrapper;
  const mockIdeas = [
    {id: 1, title: 'hello', body: 'world'},
    {id: 2, title: 'another', body: 'one'}
  ];

  beforeEach(() => wrapper = shallow(<IdeaCard ideas={mockIdeas} />));

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

