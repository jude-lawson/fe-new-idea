import { addIdea } from '../../actions/article';

describe('addIdea', () => {
  it('should have a type of ADD_IDEA', () => {
    const idea = 'I am a new tech idea. Tech this. Tech that.';
    const expectedAction = {
      type: 'ADD_IDEA',
      idea
    };
    const result = addIdea(idea);

    expect(result).toEqual(expectedAction);
  })
})