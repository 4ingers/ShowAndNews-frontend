INSERT INTO roles(title)
VALUES
('admin');

INSERT INTO permissions(action)
VALUES
('post'),
('manage-users');

INSERT INTO role_permissions(role_id, permission_id)
VALUES
(1, 1),
(1, 2);

INSERT INTO users(role_id, email, first_name, last_name)
VALUES
(1, 'Hidden', 'Анастасия', 'Рассел'),
(1, '4ingers@gmail.com', 'Александр', 'Водяков');

INSERT INTO tags(name)
VALUES
('Tag1'),
('Tag2'),
('Tag3'),
('Tag4');

INSERT INTO categories(name, description)
VALUES
('Звёзды', 'Описание категории для звёзд'),
('Кино', 'Тут что-то про кинематограф'),
('Мода', 'Модная шляпа'),
('Блогеры', 'Куда нам без тиктока..');

INSERT INTO posts(author_id, editor_id, title, description, text, image, active, path)
VALUES
(
  1,
  1,
  'Twitter says hackers ‘manipulated’ employees to access accounts',
  'Some not defined description to this unbelievable post.',
  'No text yet',
  'a1.jpg',
  1,
  'link1'
),
(
  2, 
  2,
  'A teenage prank was behind massive Twitter hack, report says',
  'Some not defined description to this unbelievable post.',
  'No text yet',
  'a2.jpg',
  1,
  'link2'
),
(
  1,
  1,
  'These 4 Signs Suggest Bitcoin Is on the Verge of a Massive Move Higher',
  'Some not defined description to this unbelievable post.',
  'No text yet',
  'a3.jpg',
  1,
  'link3'
),
(
  2,
  2,
  'Getting Out of Cash Is Key to Wealth and Inflation Protection, Pompliano Says',
  'Some not defined description to this unbelievable post.',
  'No text yet',
  'a4.jpg',
  1,
  'link4'
),
(
  1,
  1,
  'Kanye West shared an image of his face carved into Mount Rushmore as he preps his 2020 candidacy',
  'Some not defined description to this unbelievable post.',
  'No text yet',
  'a5.jpg',
  1,
  'link5'
),
(
  2,
  2,
  'Analyst: Bitcoin to See One Final Downtrend Before Bull Run Begins',
  'Some not defined description to this unbelievable post.',
  'No text yet',
  'a6.jpg',
  1,
  'link6'
);


INSERT INTO post_tags
VALUES
(1, 1),
(1, 4),
(2, 2),
(3, 3),
(4, 4),
(5, 1),
(6, 2);


INSERT INTO post_category
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 1),
(6, 2);