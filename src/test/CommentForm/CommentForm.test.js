import { CommentForm, mapStateToProps, mapDispatchToProps } from '../../Containers/CommentForm/CommentForm';
import { postContribution } from '../../thunks/post-contribution'
import { shallow, mount } from 'enzyme';
import React from 'react';
import { addComment } from '../../actions/comment';

describe('CommentForm', () => {
  let wrapper;
  const mockFunc = jest.fn();
  beforeEach(() => wrapper = shallow(<CommentForm postContribution={mockFunc} />))

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    let spy;
    let wrapper;

    const mockFunc = jest.fn();

    beforeEach(() => {
      wrapper = mount(<CommentForm postContribution={mockFunc}/>);
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


  test('should call postContribution on Submit', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
     body: 'I heart your tech idea'
    })
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockFunc).toHaveBeenCalled();
  })


  describe('mapDispatchToProps', () => {
    test('should call dispatch when using postContribution from MDTP', () => {
      const mockContribution = { body: 'Hello' };
      const mockDispatch = jest.fn();
      const postContribution = jest.fn();
      const actionToDispatch = postContribution(mockContribution, 6);
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.postContribution();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});