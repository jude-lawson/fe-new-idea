import { getIdeaAction } from '../../actions/getIdea';

describe('getIdeaAction', () => {
  test('should return an idea with the type of GET_IDEA', () => {
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
    }
    const result = getIdeaAction(mockIdea);
    const expected ={
      type: 'GET_IDEA',
      idea: {...mockIdea}
    }
    expect(result).toEqual(expected);
  });
});
