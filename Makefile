include ${PWD}/.env
export

dev:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build

prod:
	docker-compose up -d

down:
	docker-compose down

logs-app:
	docker logs --follow docker-app

logs-nginx:
	docker logs --follow docker-nginx

exec-app:
	docker-compose exec app bash

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
