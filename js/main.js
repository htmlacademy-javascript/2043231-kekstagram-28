const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Потрясающие перьевые облака.',
  'Дорога на пляж.',
  'Чистейшая вода.',
  'Есть, что пофоткать ;)',
  'Весёлая еда =)',
  'Крутые тачки',
  'Минимализм за дорого',
  'Прохладительные напитки',
  'Аэропорт ближе, чем ты думаешь',
  'Удобный стеллаж для обуви',
  'Тропа к морю',
  'Audi на прокат',
  'Овощи на выбор',
  'Грелка для котика в виде суши',
  'Милые угги не дадут замёрзнуть, а следовательно и заболеть!',
  'Вид из иллюминатора обалденный!',
  'Живая музыка',
  'Гараж, конечно, так себе',
  'Если в уггах сильно жарко, можно воспользоваться тапками с фонарями.',
  'Пальмы прекрасны',
  'А-ля плов, даже лайм присутствует',
  'Романтичные закаты согревают душу, а приятная компания - тело',
  'Краб следит за тобой ;)',
  'Огненные концерты мировых звёзд',
  'Мы пройдём/проедем везде!'
];
const NAMES = ['Илья', 'Елена', 'Яков', 'Валерия', 'Светлана', 'Игорь'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min (a, b));
  const upper = Math.floor(Math.max (a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedID = 0;
  return () => {
    lastGeneratedID += 1;
    return lastGeneratedID;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(COMMENT_LINES)).join(' ');
// console.log(createMessage());

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});
// console.log(createComment());

const createPhotoNumber = () => {
  for (let photoNumber = 1; photoNumber <= PICTURE_COUNT; photoNumber++) {
    return photoNumber;
  }
};
// console.log(createPhotoNumber());

const createPublishedPicture = () => ({
  id: getRandomInteger(1, PICTURE_COUNT),
  url: `photos/${createPhotoNumber()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: createComment(),
});

createPublishedPicture();
// console.log(createPublishedPicture());

