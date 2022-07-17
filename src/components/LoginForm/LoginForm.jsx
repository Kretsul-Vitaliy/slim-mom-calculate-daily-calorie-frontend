import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'
import { login } from '../../redux/auth';
import * as yup from 'yup';
import Button from '../Button';
import {
  Labels,
  Input,
  InputBox,
  Form,
  ButtonsWrapper,
  StyledNavLink,
  ButtonText,
} from './LoginForm.styled';


export default function LoginForm() {
  const { t } = useTranslation()

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(6, t?.("auth.verMin")).required(),
    }),
    onSubmit: ({ email, password }) => {
      dispatch(login({ email, password }));

      formik.resetForm();
    },
  });

  const { email, password } = formik.values;

  return (<Form onSubmit={formik.handleSubmit}>
      <InputBox>
      <Labels htmlFor="email">Email *</Labels>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={email}
        autoComplete="off"
        required
      />
      </InputBox>
     
    <InputBox>
      <Labels htmlFor="password">{t?.('auth.password')} *</Labels>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={password}
        autoComplete="off"
        required
      />
    </InputBox>
      
      <ButtonsWrapper>
        <Button type="submit" disabled={!email || !password} size="short">
          <ButtonText>{t?.('auth.login')}</ButtonText>
        </Button>
       
          <StyledNavLink to="/signup">
            {t?.('auth.register')}
          </StyledNavLink>
        
      </ButtonsWrapper>
    </Form>
 
   
  );
}
