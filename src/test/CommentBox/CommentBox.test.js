import { CommentBox } from '../../Containers/CommentBox/CommentBox';
import { shallow } from 'enzyme';
import React from 'react';
import { mapStateToProps } from '../../Containers/CommentBox/CommentBox';

describe('CommentBox', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<CommentBox />);

    expect(wrapper).toMatchSnapshot();
  })
});

describe('mapStateToProps', () => {
  it('should return a props object with the correct keys', () => {
    const mockState = {
      comments: [
        {body: 'I do or do not think that is a great idea', id: 11}
      ]
    }
    const expected = {
      comments: [
        {body: 'I do or do not think that is a great idea', id: 11}
      ]
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  })
})