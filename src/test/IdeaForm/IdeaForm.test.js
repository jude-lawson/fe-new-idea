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

  // describe('mapDispatchToProps', () => {
  //   it('should call dispatch when using toggleUserLogin from MDTP', () => {
  //     const mockDispatch = jest.fn();
  //     const actionToDispatch = toggleUserLogin({id: 3, loginStatus: true});
  //     const mappedToProps = mapDispatchToProps(mockDispatch);
  //     mappedToProps.toggleUserLogin({id: 3, loginStatus: true});
      
  //     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  //   });

  //   it('should call dispatch when using userIsFalse from MDTP', () => {
  //     const mockDispatch = jest.fn();
  //     const actionToDispatch = userIsFalse({id: 3, loginStatus: true});
  //     const mappedToProps = mapDispatchToProps(mockDispatch);
  //     mappedToProps.userIsFalse({id: 3, loginStatus: true});
      
  //     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  //   });

  //   it('should call dispatch when using addAllFavs from MDTP', () => {
  //     const mockDispatch = jest.fn();
  //     const actionToDispatch = addAllFavs([{id: 3, name: 'jaws'}]);
  //     const mappedToProps = mapDispatchToProps(mockDispatch);
  //     mappedToProps.addAllFavs([{id: 3, name: 'jaws'}]);
      
  //     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  //   });
  // });
});