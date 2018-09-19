import { retrieveMyIdeas } from '../../actions/userIdeas';

describe('retrieveUserIdeas', () => {
  test('should return an action with a type of RETRIEVE_USER_IDEAS', () => {
    const mockIdeas = [
      {
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
            }
          }
        ]
      }
    ];
    const result = retrieveMyIdeas(mockIdeas);
    const expected = {
      type: 'RETRIEVE_MY_IDEAS',
      ideas: [...mockIdeas]
    }

    expect(result).toEqual(expected);
  });
});
