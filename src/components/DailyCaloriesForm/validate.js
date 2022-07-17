import i18n from '../../i18n';

export const validate = values => {
  let errors = {};

  if (values.height < 100) {
    errors.height = i18n.t('validate.heigthMin');
  } else if (values.height > 250) {
    errors.height = i18n.t('validate.heigthMin');
  }

  if (values.age < 18) {
    errors.age = i18n.t('validate.ageSmall');
  } else if (values.age > 80) {
    errors.age = i18n.t('validate.ageMiddle');
  } else if (values.age > 120) {
    errors.age = i18n.t('validate.ageHeight');
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
    errors.desiredWeight =
      'The desired weight must be more than current weight';
  }
  return errors;
};
