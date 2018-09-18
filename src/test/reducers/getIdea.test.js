import { getIdeaReducer } from '../../reducers/getIdea';
import { getIdeaAction } from '../../actions/getIdea';

describe('getIdeaReducer', () => {
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

  test('should return an idea', () => {
    const result = getIdeaReducer({}, getIdeaAction(mockIdea));
    const expected ={
      ...mockIdea
    }
    expect(result).toEqual(expected);
  });

  test('should return default state', () => {
    const result = getIdeaReducer({}, {});
    const expected = {};
    expect(result).toEqual(expected);
  });
});
