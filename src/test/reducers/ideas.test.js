import { addIdea } from '../../actions/idea';
import { ideaReducer } from '../../reducers/ideas';

describe('ideaReducer', () => {
  it('should return initial state by default', () => {
    const expected = [];
    const result = ideaReducer(undefined, {});

    expect(result).toEqual(expected);
  })

  it('should return state with a new idea', () => {
    const mockIdea = { id: 1, title: 'New Techy Tech Tech', body: 'CPU, GPU, nonblocking yada yada' };
    const ideas = [{id: 1, title: 'New Techy Tech Tech', body: 'CPU, GPU, nonblocking yada yada'}];
    const result = ideaReducer(undefined, addIdea(mockIdea))

    expect(result).toEqual(ideas);
  })
})