# Проект Mesto Api
## Что же за Mesto Api?
>Mesto Api - это апи часть приложения Mesto на Express.js Он умеет проверять токены, регистрировать и авторизовывать пользователей, сохранять и отдавать карточки, запоминать, когда кто-то поставил лайк или передумал и убрал его
## Перед началом работы проверить
1) В консоли проверяем установлен ли Node.js
* `node -v`
* `npm -v`
2) Наличие установленной программы(Windows OS)
* `Наличие Git Bush`

Если все установленно смотрим **Запуск**

## Установка (Windows OS)
1) [Node.js](https://nodejs.org/en/)
2) [Git Bash](https://gitforwindows.org/index.html)

## Запуск проекта
1) С помощью Git Bush выполняем команду

`git clone https://github.com/P1antain/express-mesto.git`

2) Открываем работу, в проектной среде через терминал выполняем команду(устанавливаем модули для локального сервера)

`npm install`

3) Запускаем локальный сервер командой через терминал

`npm start`

### Сборка проекта
Возможна сборка проекта под сервер, для сборки проекта используйте команду

`nodemon app.js`


#### Используемые технологии в проекте
+ NodeJS
+ Express
+ MongoDB

#### Возможности проекта
>  Создавать пользователя и проходить аутентификацию
>> Аутентификация выполнена по средствам куки
>
> Получать информацию о пользователе, обновлять её и обновлять аватар пользователя
> 
> Создавать карточку с именем и картинкой, ставить лайк карточке, удалять карточку по ID 
> 

#### Запросы для тестирования Postman
Роуты
Для пользователей:</br>
<table>
<tr>
<td align="center"><strong>Запрос</strong></th>
<td align="center"><strong>Роут</strong></th>
<td align="center"> <strong>Описание</strong></th>
</tr>

<tr>
<td align="center">POST</td>
<td align="center">/signup</td>
<td>Создаёт пользователя с переданными в теле email, password и name</td>
</tr>

<tr>
<td align="center">POST</td>
<td align="center">/signin</td>
<td>Проверяет переданные в теле почту и пароль и заходит на сайт</td>
</tr>


<tr>
<td align="center">GET</td>
<td align="center">/users/me</td>
<td>Возвращает информацию о пользователе (email и имя)</td>
</tr>

<tr>
<td align="center">PATCH</td>
<td align="center">/users/me</td>
<td>Обновляет информацию о пользователе (email и имя)</td>
</tr>
<tr>
<td align="center">PATCH</td>
<td align="center">/users/me/avatar</td>
<td>Обновляет аватар пользователе</td>
</tr>
</table>


Для карточек:</br>
<table>
<tr>
<td align="center"><strong>Запрос</strong></th>
<td align="center"><strong>Роут</strong></th>
<td align="center"> <strong>Описание</strong></th>
</tr>

<tr>
<td align="center">GET</td>
<td align="center">/cards</td>
<td>Возвращает все карточки</td>
</tr>

<tr>
<td align="center">POST</td>
<td align="center">/cards</td>
<td>Создаёт карточку с переданными в теле name, link</td>
</tr>

<tr>
<td align="center">DELETE</td>
<td align="center">/cards/cardId</td>
<td>Удаляет добавленную карточку по id</td>
</tr>

<tr>
<td align="center">PUT</td>
<td align="center">/cards/cardId/likes</td>
<td>Ставит карточке лайк по id</td>
</tr>

<tr>
<td align="center">DELETE</td>
<td align="center">/cards/cardId/likes</td>
<td>Убирает лайк с карточки по id</td>
</tr>

</table>

# Спасибо за внимание

<p align="center">
<img src="https://99px.ru/sstorage/86/2015/12/image_86271215043043632690.gif"  alt="image"/>
</p>
