export const validate = values => {
  let errors = {};

  if (values.height < 100) {
    errors.height = 'Enter a value from 100';
  } else if (values.height > 230) {
    errors.height = 'Enter a value to 230';
  }

  if (values.age > 0 && values.age < 18) {
    errors.age = 'Sorry, You are a minor';
  } else if (values.age > 80) {
    errors.age = 'Sorry, You are not allowed to lose weight';
  } else if (values.age > 120) {
    errors.age = 'Enter correct age';
  }

  if (values.currentWeight > 0 && values.currentWeight < 50) {
    errors.currentWeight = 'Enter a value from 50';
  } else if (values.currentWeight > 500) {
    errors.currentWeight = 'Enter a value to 500';
  }

  if (values.desiredWeight > 0 && values.desiredWeight < 30) {
    errors.desiredWeight = 'Enter a value from 30';
  } else if (values.desiredWeight > 500) {
    errors.desiredWeight = 'Enter a value to 500';
  }
  return errors;
};
