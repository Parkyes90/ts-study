import { Success } from '../classes/Success';
import { Failure } from '../classes/Failure';

export const checkEmailAddress = (o: { email?: string }) => {
  const { email } = o;
  const re = new RegExp(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  );
  return re.test(email)
    ? new Success(email)
    : new Failure(['invalid email address']);
};
