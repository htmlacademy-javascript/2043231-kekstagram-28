import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_COUNT_MIN = 15;
const LIKE_COUNT_MAX = 200;
const COMMENT_COUNT_MIN = 1;
const COMMENT_COUNT_MAX = 17;
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

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(COMMENT_LINES)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPublishedPicture = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[id - 1],
  likes: getRandomInteger(LIKE_COUNT_MIN, LIKE_COUNT_MAX),
  comments: Array.from({length: getRandomInteger(COMMENT_COUNT_MIN, COMMENT_COUNT_MAX)}, createComment)
});

createPublishedPicture();

const createPublishedPictures = () =>
  Array.from({length: PICTURE_COUNT}, (_, pictureIndex) => createPublishedPicture(pictureIndex + 1));

export {createPublishedPictures};
