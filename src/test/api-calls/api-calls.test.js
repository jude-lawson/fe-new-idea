import { postIdea, getIdea, postContributionToDb } from '../../api-calls/api-calls';
import { postContribution } from '../../thunks/post-contribution';
import { storageMock } from '../test-helpers/localstroage';

describe('postIdea', () => {
  test('should post a new idea', async () => {
    const id = 1;
    const title = 'Hello';
    const body = 'world';

    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => 'Idea successfully created'
    }));

    const result = await postIdea(id, title, body);
    expect(result).toEqual(undefined);
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

    test('should return an idea', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockIdea)
      }));

      const result = await getIdea(3);

      expect(result).toEqual(mockIdea);
    });
});

describe('post Contribution', () => {
  beforeEach(() => window.localStorage = storageMock())
  test('should post a new contribution', async () => {

    const mockContribution = { body: 'hello' };
    const mockUserId = 27;

    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve('Success message')
    }));

    const result = await postContributionToDb(mockContribution, mockUserId);
    expect(result).toEqual('Success message');
  });

  test.skip('should return an error message when id not found', async () => {
    const mockContribution = { body: 'hello' };
    const mockUserId = 27;

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve('An error has occurred')
    }));
    const result = await postContributionToDb(mockContribution, mockUserId);
    expect(result).toEqual({});
  });
});
