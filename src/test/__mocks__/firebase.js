export const initializeApp = jest.fn().mockImplementation(() => {});

export const firebase = {
  auth: () => ({
    GithubAuthProvider: new Promise(resolve => resolve()),
    signInWithPopup: () => new Promise(resolve => resolve(mockUser)),
    signOut: () => new Promise(resolve => resolve())
  })
};