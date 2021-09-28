/*
  *  makeShortUsername is a utility function that
  *  get an username and in case it is more longer
  *  than 10 chars, it will be reduced appending
  *  a final dot.
*/
const makeShortUsername = (username) => {
  
  const _MAX_CHAR_ALLOWED = 10;
  let userName; 
  let sortedUsername;

  try {
    if (typeof username !== "string") {
      throw new Error('username should be a string');
    }

    userName = username.trim();
    userName = userName.split(' ')[0];

    // A name too long will be sorted. 
    // It will be sortedUsername.
    if (userName.length >= _MAX_CHAR_ALLOWED) {
      sortedUsername = username.slice(0, 9).concat('.');
      return sortedUsername;
    } 
    
    return userName;

  } catch (e) {
    console.error(e.message);
  }
  
};

export default makeShortUsername;