import { postIdea, getIdeas } from '../../api-calls/api-calls';

describe('postIdea', () => {
  test('should post a new idea', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          ok: true,
          json: () => Promise.resolve('Idea successfully created')
        })
      }))
    const id = 1;
    const title = 'Hello';
    const body = 'world';
    const mockIdea = {
      user_id: id,
      title,
      body
    }
    const result = await postIdea(id, title, body);
    console.log(result)
    expect(result).toEqual('Idea successfully created');
  });

  test('should return an error message when a req param is missing', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        ok: false,
        json: () => Promise.resolve()
      }))
      const result = await postIdea(null, null, null);
      // console.log(typeof result.status)
      await expect(result).rejects.toEqual(Error(400));
    });
});
