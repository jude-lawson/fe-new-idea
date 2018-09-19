// export const myIdeasReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'RETRIEVE_MY_IDEAS':
//       return [
//         ...state,
//         ...action.ideas
//       ];
//     default:
//       return state;
//   }
// };

import { myIdeasReducer } from '../../reducers/userIdeas';
import { retrieveMyIdeas } from '../../actions/userIdeas';

describe('myIdeasReducer', () => {
  const mockIdeas = [
    {id: 1, title: 'hello', body: 'world'},
    {id: 2, title: 'another', body: 'one'}
  ];

  test('should return default state', () => {
   const result = myIdeasReducer([], {});

   expect(result).toEqual([]);
  })

  test('should return all ideas', () => {
    const result = myIdeasReducer(undefined, retrieveMyIdeas(mockIdeas));

    expect(result).toEqual(mockIdeas);
  });

});