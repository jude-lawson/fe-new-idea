export const storageMock = () => {
  let storage = {
    user: 1,
    id: 1,
    ideas: [
      {
        id: 1,
        title: 'hello'
      }
    ]
  };

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return key in storage ? storage[key] : null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    },
    clear: function () {
      storage = {}
      return storage;
    }
  };
}