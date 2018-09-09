export const initializeApp = jest.fn().mockImplementation(() => {});

export const firebase = {
  auth: {
    GithubAuthProvider: jest.fn().mockImplementation(() => {})
  }
}
// export const firebase = {
//   auth: () => ({
//     signInWithPopup: () => new Promise(resolve => resolve()),
//     signOut: () => new Promise(resolve => resolve())
//   })
// };