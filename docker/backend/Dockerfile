FROM php:8.3-fpm
LABEL authors="Alexey Samoluk"

# Аргументы из docker-composer.yml
ARG user
ARG uid

# Установка зависимостей
RUN curl -s https://deb.nodesource.com/setup_18.x
RUN apt-get update && apt-get install -y \
        curl \
        libpng-dev \
        libonig-dev \
        libxml2-dev \
        zip \
        unzip \
        libzip-dev


# Чиста кеша
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Установка php рашсширений
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip sockets

# Установка composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Создание пользователя
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

WORKDIR /var/www

USER $user