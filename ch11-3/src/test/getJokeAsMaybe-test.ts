import { getJokeAsMaybe } from '../getJokeAsMaybe';
import { IMaybe } from '../classes/Maybe';
(async () => {
  const joke: IMaybe<string> = await getJokeAsMaybe();
  console.log(joke.getOrElse('something wrong'));
})();
