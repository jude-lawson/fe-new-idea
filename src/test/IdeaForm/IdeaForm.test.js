import { IdeaForm, mapStateToProps, mapDispatchToProps } from '../../Components/IdeaForm/IdeaForm';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { addIdea } from '../../actions/idea';

describe('IdeaForm', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<IdeaForm />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    let spy;
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<IdeaForm />);
      spy = jest.spyOn(wrapper.instance(), 'handleChange');
    });

    it('should update state of email', () => {
      const mockEvent = {
        target: {
          value: 'h',
          name: 'title'
        }
      };
      wrapper.instance().handleChange(mockEvent);
      wrapper.find('input').first().simulate('change'); 

      expect(spy).toHaveBeenCalled();
    });

    it('should update state of password', () => {
      const mockEvent = {
        target: {
          value: 'tech things',
          name: 'body'
        }
      };
      wrapper.instance().handleChange(mockEvent);
      wrapper.find('textarea').last().simulate('change'); 

      expect(spy).toHaveBeenCalled();
    });
  });
});