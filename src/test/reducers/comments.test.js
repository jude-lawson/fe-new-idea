import { commentReducer } from '../../reducers/comments';
import { addComment } from '../../actions/comment'

describe('commentReducer', () => {
  it('should return the initial state by default', () => {
    const expected = [];
    const result = commentReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new idea', () => {
    const mockComment = { user_id: 3, body: 'Comment on an idea'};
    const comments = [{ user_id: 3, body: 'Comment on an idea'}];
    const result = commentReducer(undefined, addComment(mockComment));

    expect(result).toEqual(comments);
  });
});
