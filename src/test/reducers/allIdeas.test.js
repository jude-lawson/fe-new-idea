import { allIdeasReducer } from '../../reducers/allIdeas';
import { getAllIdeasAction } from '../../actions/ideasAll';

describe('allIdeasReducer', () => {
  const mockIdeas = [
    {id: 1, title: 'hello', body: 'world'},
    {id: 2, title: 'another', body: 'one'}
  ];

  test('should return all ideas', () => {
    const result = allIdeasReducer({}, getAllIdeasAction(mockIdeas));
    expect(result).toEqual(mockIdeas);
  });

  test('should return default state', () => {
   const result = allIdeasReducer([], {});
   expect(result).toEqual([]);
  })
});
