import { CommentBox, mapStateToProps } from '../../Containers/CommentBox/CommentBox';
import { shallow } from 'enzyme';
import React from 'react';

describe('CommentBox', () => {
  const mockState = [
    {body: 'I do or do not think that is a great idea', id: 11}
  ]

  it('should match snapshot', () => {
    let wrapper = shallow(<CommentBox comments={mockState} />);

    expect(wrapper).toMatchSnapshot();
  })
});

describe('mapStateToProps', () => {
  const mockState = {
    comments: [
      {body: 'I do or do not think that is a great idea', id: 11}
    ]
  };

  it('should return a props object with the correct keys', () => {
    const expected = {
      comments: [
        {body: 'I do or do not think that is a great idea', id: 11}
      ]
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  })
})