import React from 'react';
import { shallow } from 'enzyme';
import { CommentCard, mapStateToProps } from '../../Containers/CommentCard/CommentCard';

describe('CommentCard', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<CommentCard />);

    expect(wrapper).toMatchSnapshot();
  });
});