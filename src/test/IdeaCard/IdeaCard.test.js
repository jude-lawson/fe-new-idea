import React from 'react';
import { shallow } from 'enzyme';
import { IdeaCard, mapStateToProps } from '../../Containers/IdeaCard/IdeaCard';

describe('IdeaCard', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<IdeaCard />);

    expect(wrapper).toMatchSnapshot();
  });
});

