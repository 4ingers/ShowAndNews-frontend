# Show$newS

## TODO

1. Реализовать `limit` и `offset` на *GraphQL* – <https://graphql.org/learn/pagination/>
2. Попробовать починить запрос с `tags`
3. `showSizeChanger` в **antd** вообще работает?..
4. Настроить Bracket-Pair-Colorizer-2
5. Перелопатить Moment.js. Или *Day.js*? (<https://github.com/ant-design/antd-dayjs-webpack-plugin>)
6. NavBar
   - Высота – MaterialUI
   - Поиск
7. Desktop, ***tablets***, mobile
8. 'classnames' refactoring – <https://www.npmjs.com/package/classnames>
9. Ограничить количество результатов, выдаваемых запросами к БД
10. Менять `top` layout-ов в зависимости от версии сайта
11. Почитать про **lodash**
12. *Always design for mobile first* – <https://www.w3schools.com/css/css_rwd_mediaqueries.asp>
13. Горизонтальная ориентация
14. Ссылки из соцсетей – <https://www.netlify.com/blog/2020/05/08/improve-your-seo-and-social-sharing-cards-with-next.js/>

## Issues

1. В мобильную навигацию не вписывается `золотая_полоска`
2. При выводе постов по тегу нет всех тегов у превью постов

## Чтиво

1. **MaterialUI** topbar – <https://material.io/components/app-bars-top>
2. **W3Schools**: RWD Media Queries – <https://www.w3schools.com/css/css_rwd_mediaqueries.asp>
3. **Material Design** – <https://material.io/develop/web>
4. **Apollo GraphQL** – <https://www.apollographql.com/docs/tutorial/>
5. *Currying and chaining* – <https://medium.com/@anilchaudhary453/method-chaining-currying-javascript-b6fc3324592c#:~:text=currying%20is%20the%20technique%20of,each%20with%20a%20single%20argument.>
6. *8* web-design principles – <https://cxl.com/blog/universal-web-design-principles/>

## Видео

- Basic tags – <https://w2ww.youtube.com/watch?v=lVmX-7XEyd4>
- Social Network Theme With Sass – <https://www.youtube.com/watch?v=IFM9hbapeA0&list=PLillGF-Rfqba3xeEvDzIcUCxwMlGiewfV>
- Курс по **Next** — <https://www.youtube.com/watch?v=_EOrSmjdOZQ>
- Блог на **React-Apollo** — <https://www.youtube.com/playlist?list=PL7NAk9A3ueyXGX00zl7FzuaCAQhQTFPxJ>

## Пакеты

- **node-sass**, **sass-loader** — перенести в devDepencencies

## Деплой

- Хранение – <https://stackoverflow.com/questions/61433306/cheapest-way-to-deploy-a-react-app-using-nextjs-ssr-on-aws>

## Прочее

- Актуальность модулей npm — <https://www.npmtrends.com/apollo-client-vs-graphql-tag-vs-graphql-tools-vs-graphql.js-vs-react-relay-vs-relay-runtime>

## Код

### Клиент

- PostCard(?) – <https://codepen.io/choogoor/pen/YWBxAg>

#### S/CSS

- **Antd** customization
  - `antd-scss-theme-plugin` – <https://www.npmjs.com/package/@inventium/antd-scss-theme-plugin>
  - *Ant design* – <https://ant.design/docs/react/getting-started>
- `transition` – <https://html5book.ru/css3-transition/>
- Вместо `opacity` – `mix-blend-mode` – <https://bryanlrobinson.com/blog/how-to-css-after-elements-for-background-overlays/>
- Social Icons
  - How-to – <https://scotch.io/tutorials/creating-a-social-follow-component-in-react>
  - Fixing issues with **Next.js** – <https://github.com/FortAwesome/react-fontawesome#nextjs>
  - src – <https://fontawesome.com/>
- `flexbox`
  - Норм статья – <https://tproger.ru/translations/how-css-flexbox-works/>
  - ААХАХАХА флексбоксы автор жЖоТт — <https://habr.com/ru/post/329820/>
- Логические единицы — <https://medium.com/web-standards/logical-css-props-c5046c563640>
- Золотое сечение
  - <https://ux.pub/zolotoe-sechenie-v-dizajne-interfejsov/>
  - <https://medium.com/@MateMarschalko/the-golden-ratio-in-sass-and-css-development-f958e18aa640#:~:text=The%20golden%20ratio%20is%20the,appear%20very%20often%20in%20Nature.>
- Визуальная иерархия — <https://www.interaction-design.org/literature/topics/visual-hierarchy>
- Bootstrap-hints — <https://mdbootstrap.com/>
- Chrome CSS summit — <https://www.youtube.com/watch?v=-oyeaIirVC0> (<https://css-at-cds.netlify.app/>)
- Проблемы с `layout` — <https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/>

#### React

- Pagination issue explained – <https://www.reddit.com/r/graphql/comments/cwie93/pagination_with_apollo_hooks/eycfiee/>
- *Загрузить ещё* – <https://stackoverflow.com/questions/63230019/how-to-create-load-more-bottom-in-nextjs-for-get-rest-of-data-next-js-paginati>
- Переходы между страницами – react-transition-groups – <https://reactcommunity.org/react-transition-group/>
- React — структура проекта — <https://www.robinwieruch.de/react-folder-structure>
- Карусель **react-slick**
  - src – <https://react-slick.neostack.com/docs/>
  - Examples – <https://codesandbox.io/examples/package/react-slick>

### Сервер

#### Next.js

- Custom links – <https://blog.logrocket.com/dealing-with-links-in-next-js/>

#### MySQL

- Подгрузка постов – `offset`, `limit`
- Полнотекстовый поиск — <https://dba.stackexchange.com/questions/35821/possible-index-on-a-varchar-field-in-mysql>

#### Knex

- Using Higher-Order Functions to Build Queries in Knex.js – <https://spin.atomicobject.com/2017/07/03/knex-queries/>

#### GraphQL

- Структуризация **GraphQL**-кода — <https://www.apollographql.com/blog/how-to-build-graphql-servers-87587591ded5/>

#### Media

- Хранение — <https://stackoverflow.com/questions/348363/what-is-the-best-place-for-storing-uploaded-images-sql-database-or-disk-file-sy>
- Рейтинг *CDN* — <https://ru.hostadvice.com/hosting-services/cdn/>

## Интерфейс

### Навигация

- Поиск
- Выпадающее меню
  1. `:focus-within` — для перемещения по внутренним элементам дропдауна

### Страницы

- Категории
  - Звёзды
  - Кино
  - Мода
  - Блогеры
- Статья
- О нас
- Свяжитесь с нами

### Статья

- Вставка
  - Ссылки
  - Youtube-роликов с плеером
  - Instagram
  - Карусели изображений с подписями
  - Видео
- Репосты в соцсети
- Sidebar:
  - Рекомендации
  - Реклама
