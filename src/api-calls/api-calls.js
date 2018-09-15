const postIdea = async (id, title, body) => {
  try {
    const url = 'https://whispering-lowlands-31319.herokuapp.com/api/v1/ideas';
    const options = {
      method: 'POST',
      body: JSON.stringify({
        user_id: id,
        title,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const response = await fetch(url, options);
    if (response.status !== 201) {
      throw Error(response.status);
    }
    const idea = await response.json();
    return idea.message;
  } catch (error) {
    return Error.message;
  }
};

export {postIdea};