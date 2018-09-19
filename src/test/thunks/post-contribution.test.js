import { postContribution } from '../../thunks/post-contribution'
import { addComment } from '../../actions/comment';


describe('postContribution', () => {
  const mockComment = {
    body: 'Some thing here'
  };
  const mockDispatch = jest.fn();

  test('should call addComment action', async () => {
    const thunk = postContribution();
    const actionToDispatch = await addComment(mockComment);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });
})
