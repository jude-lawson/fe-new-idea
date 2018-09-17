import { getAllIdeas } from '../../thunks/getAllIdeas';
import { getAllIdeasAction } from '../../actions/ideasAll';

describe('getAllIdeas thunk', () => {
  const mockIdeas = [
    {id: 1, title: 'hello', body: 'world'},
    {id: 2, title: 'another', body: 'one'}
  ];
  const mockDispatch = jest.fn();

  test('should call getAllIdeas', async () => {
    const thunk = getAllIdeas();
    const actionToDispatch = await getAllIdeasAction(mockIdeas);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });
})
