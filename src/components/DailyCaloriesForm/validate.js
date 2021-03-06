import i18n from '../../i18n';

export const validate = values => {
  let errors = {};

  if (values.height < 100) {
    errors.height = i18n.t('validate.heigthMin');
  } else if (values.height > 250) {
    errors.height = i18n.t('validate.heigthMax');
  }

  if (values.age < 18) {
    errors.age = i18n.t('validate.ageSmall');
  } else if (values.age > 100) {
    errors.age = i18n.t('validate.ageMiddle');
  }

  if (values.currentWeight < 20) {
    errors.currentWeight = i18n.t('validate.weightMin');
  } else if (values.currentWeight > 500) {
    errors.currentWeight = i18n.t('validate.weightMax');
  }

  if (values.desiredWeight < 20) {
    errors.desiredWeight = i18n.t('validate.weightVerySmall');
  } else if (values.desiredWeight > 500) {
    errors.desiredWeight = i18n.t('validate.weightMax');
  } else if (values.desiredWeight >= values.currentWeight) {
    errors.desiredWeight = i18n.t('validate.similiarWeith');
  }
  return errors;
};
