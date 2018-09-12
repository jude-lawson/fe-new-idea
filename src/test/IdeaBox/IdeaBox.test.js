import { IdeaBox } from '../../Containers/IdeaBox/IdeaBox';
import { shallow } from 'enzyme';
import React from 'react';
import { mapStateToProps } from '../../Containers/IdeaCard/IdeaCard';

describe('IdeaBox', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<IdeaBox />);

    expect(wrapper).toMatchSnapshot();
  })
});

describe('mapStateToProps', () => {
  it('should return a props object with the correct keys', () => {
    const mockState = {
      ideas: [
        {title: 'Whatever', body: 'Big Body Whatever', id: 11}
      ]
    }
    const expected = {
      ideas: [
        {title: 'Whatever', body: 'Big Body Whatever', id: 11}
      ]
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  })
})