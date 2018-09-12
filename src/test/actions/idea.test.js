import { addIdea } from '../../actions/idea';

describe('addIdea', () => {
  it('should have a type of ADD_IDEA', () => {
    const idea = {
      title: 'New Tech Idea, YAY',
      body: 'Lots of information about said idea. YAY!'
    };
    const expectedAction = {
      type: 'ADD_IDEA',
      idea
    };
    const result = addIdea(idea);

    expect(result).toEqual(expectedAction);
  })
})