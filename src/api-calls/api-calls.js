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
  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user);
  const userId = user.id;
  const url = `https://whispering-lowlands-31319.herokuapp.com/api/v1/ideas/${37}/contributions`;
  const newContribution = {...contribution, user_id: userId};
  const options = {
    method: 'POST',
    body: JSON.stringify(newContribution),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await fetch(url, options);
    const newContribution = response.json();
    return newContribution;

  } catch (error) {
    return error.message;
  }
};

export { postIdea, getIdeas, getIdea, postContributionToDb };
