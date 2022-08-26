


const validate = (req) => {
  let errors = {};

  if(!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(req.body.firstName)) {
    errors.firstNameMsg =
      'Valid first name must be entered.'
    input.first = req.body.firstName;
  } 
  if(!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(req.body.lastName)){
    errors.lastNameMsg =
    'Valid last name must be entered.'
  } 
  if(!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(req.body.address)){
    errors.addressMsg = 
    'Valid address must be entered.'
  }
  if(!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(req.body.city)){
    errors.cityMsg = 
    'Valid city name must be entered.'
  } 
  if(!/\b(?:[a-z]*[A-Z][a-z]*){2,}/.test(req.body.state)){
    errors.stateMsg = 
    'Valid state abbreviation (ie. OH) must be entered.'
  } 
  if(!/^\d{5}(?:[-\s]\d{4})?$/.test(req.body.zip)) {
      errors.zipMsg =
        'Zip code must be at least 5 characters and of the proper format (12345, 12345 1223, or 12345-1234)';
  } 
  if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(req.body.email)){
      errors.emailMsg =
      'Valid email must be entered starting with an alphabet.'
  }
  if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(req.body.password)) {
      errors.passwordMsg =
      'Password must fall under required parameters:'
  } 
  if(req.body.confirmPassword !== req.body.password) {
      errors.confirmPasswordMsg =
      'Does not match password'
  }

  return errors;
  
};

module.exports = validate;