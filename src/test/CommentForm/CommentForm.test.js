import { CommentForm, mapStateToProps, mapDispatchToProps } from '../../Containers/CommentForm/CommentForm';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { addComment } from '../../actions/comment';

describe('CommentForm', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<CommentForm />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    let spy;
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<CommentForm />);
      spy = jest.spyOn(wrapper.instance(), 'handleChange');
    });

    it('should update state of email', () => {
      const mockEvent = {
        target: {
          value: 'h',
          name: 'body'
        }
      };
      wrapper.instance().handleChange(mockEvent);
      wrapper.find('textarea').first().simulate('change'); 

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should create a props object with the correct keys', () => {
      const mockState = {
        comments: [
          {
            body: 'I do or do not like your Idea [this] much.',
            id: 11
          }
        ]
      }
      const expected = {
        comments: [
        {
          body: 'I do or do not like your Idea [this] much.',
          id: 11
        }
        ]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);

    });
  }); 

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using addComent from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addComment({body: 'I heart your tech idea', id: 100});
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.addComment({body: 'I heart your tech idea', id: 100});
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});