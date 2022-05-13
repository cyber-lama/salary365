## Подготовка к запуску приложения
В файле ***.env*** указываем свой `DOCKER_UID`, `DOCKER_USER`, посмотреть их можно выполнив команду `id` в терминале.
(должен быть установлен 
docker, docker-compose, должны быть в группе докера)

В файле ***/etc/hosts*** добавляем домены 
для `dev` и `prod` разработки.
```
127.0.1.1 salary.loc
127.0.1.1 salary.prod
```

В файлах ***nginx.conf.dev*** указываем
hosts с ***/etc/hosts***
```
server_name salary.loc;
server_name salary.prod;
```

`/` - отдает фронт
`/app` - обращаемся к апи (например `salary.loc/app/auth/register`)

- `NGINX_PORT` - порт на котором будет работать локальный NGINX
- `APP_PORT` - порт на котором будет работать api nest

## Первый запуск

- запускаем приложение (`make dev` или `make prod`)
- выполняем миграции (`make migrate-up`)

## Работа с докером

- Запустить приложение в режиме dev `make dev`
- Запустить приложение в режиме prod `make prod`
- Остановить приложение `make down`
- Смотреть логи api `make logs-app`
- Зайти в контейнер api `make exec-app`
- Смотреть логи frontend `make logs-frontend`
- Зайти в контейнер frontend `make exec-frontend`
- Смотреть логи nginx `make logs-nginx`
- Зайти в контейнер nginx `make exec-nginx`

## Работа с бд

- Создать миграцию `make migrate name=users`
- Запустить миграции `make migrate-up`
- Откатить миграции `make migrate-down`

