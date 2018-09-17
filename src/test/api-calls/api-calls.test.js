import { postIdea, getIdeas } from '../../api-calls/api-calls';

describe('postIdea', () => {
  test('should post a new idea', async () => {
    const id = 1;
    const title = 'Hello';
    const body = 'world';
    const mockIdea = {
      user_id: id,
      title,
      body
    }
    const result = await postIdea(id, title, body);

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve('Idea successfully created')
      }));

    expect(result).toEqual('Idea successfully created');
  });

  test('should return an error message when a req param is missing', async () => {
      const id = null;
      const title = 'something';
      const body = 'lame';

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        json: () => Promise.resolve()
      }));

      await expect(postIdea(id, title, body)).rejects.toEqual(Error('Something went wrong'));
    });
});
