const postIdea = async (id, title, body) => {
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
  if (!response.ok) {
    throw Error('Something went wrong');
  }
  const idea = await response.json();
  return idea.message;
};

const getIdeas = async () => {
  const url = 'https://whispering-lowlands-31319.herokuapp.com/api/v1/ideas';
  const response = await fetch(url);
  const ideas = await response.json();
  return ideas;
};

const getIdea = async id => {
  const url = `https://whispering-lowlands-31319.herokuapp.com/api/v1/ideas/${id}`;
  const response = await fetch(url);
  const idea = response.json();
  return idea;
};

const postContributionToDb = async (contribution, id) => {
  const url = `https://whispering-lowlands-31319.herokuapp.com/api/v1/ideas/${id}/contributions`;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      user_id: id,
      body: contribution
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, options);
  const newContribution = response.json();
  return newContribution;
};

export { postIdea, getIdeas, getIdea, postContributionToDb };
