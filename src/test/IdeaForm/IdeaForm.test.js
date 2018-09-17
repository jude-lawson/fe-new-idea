import { IdeaForm, mapStateToProps, mapDispatchToProps } from '../../Components/IdeaForm/IdeaForm';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { addIdea } from '../../actions/idea';
import { storageMock } from '../test-helpers/localstroage';

describe('IdeaForm', () => {
  let spy;
  let wrapper;
  const mockFunc = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<IdeaForm addIdea={mockFunc}/>);
    spy = jest.spyOn(wrapper.instance(), 'handleChange');
    window.localStorage = storageMock()

  });

  it('should match the snapshot', () => {
    let wrapper = shallow(<IdeaForm />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should update state of title', () => {
      const mockEvent = {
        target: {
          value: 'h',
          name: 'title'
        }
      };

      wrapper.find('.idea--title-input').simulate('change', {target: {value: 'h', name: 'title'}});
      wrapper.instance().handleChange(mockEvent);

      expect(spy).toHaveBeenCalled();
      expect(wrapper.state('title')).toEqual('h');
    });

    it('should update state of body', () => {
      const mockEvent = {
        target: {
          value: 'tech things',
          name: 'body'
        }
      };
      wrapper.instance().handleChange(mockEvent);
      wrapper.find('input').last().simulate('change', {target: {value: 'tech things', name: 'body'}});

      expect(spy).toHaveBeenCalled();
      expect(wrapper.state('body')).toEqual('tech things');
    });
  });

  describe('handleSubmit', () => {
    it('should call handleSubmit on click', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');

      const mockEvent = {
        preventDefault: jest.fn()
      }
      wrapper.setState({
        title: 'hey',
        body: 'you'
      });
      window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve('Idea created successfully')
      }))

      wrapper.find('form').simulate('submit', mockEvent)
      expect(spy).toHaveBeenCalled();
    });
  })

  describe('mapStateToProps', () => {
    it('should create a props object with the correct keys', () => {
      const mockState = {
        ideas: [
          {
            title: 'Latest and Greatest',
            body: 'Is it or is it not the latest and greatest?',
            id: 11
          }
        ]
      }
      const expected = {
        ideas: [
        {
          title: 'Latest and Greatest',
          body: 'Is it or is it not the latest and greatest?',
          id: 11
        }
        ]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);

    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using addIdea from MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addIdea({title: 'Tech', body: 'Tech body', id: 100});
      const mappedToProps = mapDispatchToProps(mockDispatch);
      mappedToProps.addIdea({title: 'Tech', body: 'Tech body', id: 100});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});