include ${PWD}/.env
export

build-no-cache:
	docker-compose build --no-cache

dev:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build

prod:
	docker-compose up -d

down:
	docker-compose down

logs-app:
	docker logs --follow salary-app

logs-frontend:
	docker logs --follow salary-frontend

logs-nginx:
	docker logs --follow salary-nginx

exec-app:
	docker-compose exec app bash

exec-nginx:
	docker-compose exec nginx bash

test:
	echo $(DB_PASSWORD):$(DB_USER):$(DB_HOST) ${PWD}

migrate:
	docker-compose exec app yarn migration:create ${name}

migrate-up:
	docker-compose exec app yarn migration:run

migrate-generate:
	docker-compose exec app yarn migration:generate

migrate-down:
	docker-compose exec app yarn migration:revert
#
#module:
#	docker-compose exec app nest g module ${name}
#
#service:
#	docker-compose exec app nest g service ${name}
#
#controller:
#	docker-compose exec app nest g controller ${name}
