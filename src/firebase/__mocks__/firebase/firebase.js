const mockUser = {
  newUser: {
    uid: 3,
    displayName: 'New User',
    photoURL: 'https://some-new-url-here'
  }
};

export const initializeApp = jest.fn().mockImplementation(() => {});
export const githubOAuthLogin = () => new Promise(resolve => resolve(mockUser));
export const logout = jest.fn();
// export const firebase = {
//   auth: {
//     GithubAuthProvider: new Promise(resolve => resolve()),
//     signInWithPopup: () => new Promise(resolve => resolve(mockUser)),
//     signOut: () => new Promise(resolve => resolve())
//   }
// };
export const firebase = {
  auth: () => ({
    GithubAuthProvider: new Promise(resolve => resolve()),
    signInWithPopup: () => new Promise(resolve => resolve(mockUser)),
    signOut: () => new Promise(resolve => resolve())
  })
};
