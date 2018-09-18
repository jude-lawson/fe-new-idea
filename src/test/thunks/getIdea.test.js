import { getIdeaAction } from '../../actions/getIdea';
import { getIdeaById } from '../../thunks/getIdea';
import { getIdea } from '../../api-calls/api-calls';

describe('getIdea', () => {
  const mockIdea = {
    title: "Cool Idea",
    body: "This is the content of the cool idea.",
    author: {
      username: "coolauthor",
      email: "coolemail@na.moc",
      uid: "abc123"
    },
    contributions:[
      {
        body: "This is the body of the first contribution",
        author: {
          username: "anotheruser",
          email: "anotheruser@na.moc",
          uid: "def234"
        },
      }
    ]
  };
  const mockDispatch = jest.fn();

  test('should call getIdeaAction', async () => {
    const thunk = getIdeaById(3);
    const actionToDispatch = await getIdeaAction(mockIdea);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
