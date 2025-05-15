## Приложение kanban-board реализовано на React + TypeScript + drag-and-drop + webpack
1. Задачи сортируются по полю "Начало", по возрастанию;
2. Просроченные задачи (у которых "Окончание" меньше сегодняшней даты) обводятся красным (кроме тех что в статусе 'done');
3. Задачи можно перетаскивать между столбцами посредством drag&drop;
4. Задачи можно удалять поштучно (перетаскивая на иконку ведра в последнем столбце);
5. При нажатии на иконку ведра все задачи в статусе 'done' удаляются;
6. Текущее состояние списка задач хранится в localStorage и не сбрасывается при обновлении страницы;
7. В поисковой строке, задачи фильтруются по введенному значению:
<br/> Показываются все задачи содержащие в описании введенное значение;
<br/> Если введена дата в формате dd.mm.yyyy, то показываем все карточки, у которых "Начало" или "Окончание" совпадает с введенным в поисковую строку значением;
8. Использовались: React, React DOM, @dnd-kit/core, @dnd-kit/sortable(Модуль для @dnd-kit, React Hook Form, Zod, @hookform/resolvers, uuid, Webpack, webpack-cli, webpack-dev-server, TypeScript, ts-loader, html-webpack-plugin, MiniCssExtractPlugin, css-loader, sass, Jest, ts-jest, @testing-library/react, @testing-library/dom, @testing-library/user-event, @testing-library/jest-dom, jest-environment-jsdom, jest-environment-jsdom-globa.

#### Приложение запускается на дев сервере командой npm start.
#### Сборка приложения - команда npm run build.
#### Тесты запускаться командой npm run test.
#### Для просмотра перейдите по ссылке https://rostislavzeberg.github.io/kanban-board/
