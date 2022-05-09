## Подготовка к запуску приложения
В файле ***.env*** указываем свой `DOCKER_UID`, `DOCKER_USER`

В файле ***/etc/hosts*** проксируем `localhost` 
на домены для `dev` и `prod` разработки,
```
127.0.1.1 api.salary.loc
127.0.1.1 api.salary.prod
```

В файлах ***nginx.conf.dev*** указываем 
домены с ***/etc/hosts***
```
server_name api.salary.loc;
server_name api.salary.prod;
```

## Работа с докером

- Запустить приложение в режиме dev `make dev`
- Запустить приложение в режиме prod `make prod`
- Остановить приложение `make down`
- Смотреть логи приложения `make logs-app`
- Зайти в контейнер приложения `make exec-app`
- Смотреть логи nginx `make logs-nginx`
- Зайти в контейнер nginx `make exec-nginx`

## Работа с бд

- Создать миграцию `make migrate name=users`
- Запустить миграции `make migrate-up`
- Откатить миграции `make migrate-down`

