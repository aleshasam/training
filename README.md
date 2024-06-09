# training - это будет веб приложение для ведения дневника тренировок

## Стек
### Бекенд
- php 8.3
- mysql 5.7
- laravel 11

### Фронтенд
- node.js v22.0.0
- npm 10.5.1
- vue 3
- vue-router
- pinia
- vite
- axios

## Авторы

- [@aleshasam](https://github.com/aleshasam)

## TODO
### 1. Создать файлы .env по примеру из .env.example
Пути:
- ./
- ./backend
- ./frontend

### 2. Backend
Внутри контейнера **training-app-backend** запустить команды:
```bash
composer install
php artisan key:generate
php artisan migrate
php artisan db:seed
```

### 2. Frontend
Пока через nvm локально, потом возможно сделаю через докер
Выполнять в ./frontend
```bash
npm i
npm run dev
```
