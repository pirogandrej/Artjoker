-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Янв 14 2019 г., 11:58
-- Версия сервера: 5.5.23
-- Версия PHP: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `artjoker`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `territory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `territory`) VALUES
(8, 'Andrej Pirog', 'ppirog.andrej@gmail.com', 'смт Аерофлотське, м.Сімферополь, Автономна Республіка Крим'),
(9, 'Andrej Pirog', 'pirog.andrej@gmail.com', 'смт Аерофлотське, м.Сімферополь, Автономна Республіка Крим'),
(10, 'Andrej Pirog', 'irog.andrej@gmail.com', 'м.Керч, Автономна Республіка Крим'),
(11, 'Andrej Pirog', 'opirog.andrej@gmail.com', 'м.Джанкой, Автономна Республіка Крим'),
(12, 'Andrej Pirog', 'og.andrej@gmail.com', 'Центральний район міста, м.Сімферополь, Автономна Республіка Крим'),
(13, 'Andrej Pirog', 'wog.andrej@gmail.com', 'Центральний район міста, м.Сімферополь, Автономна Республіка Крим'),
(14, 'Andrej Pirog', 'g.andrej@gmail.com', 'смт Комсомольське, м.Сімферополь, Автономна Республіка Крим'),
(15, 'Andrej Pirog', 'pppirog.andrej@gmail.com', 'м.Красноперекопськ, Автономна Республіка Крим'),
(16, 'Andrej Pirog', 'ooopirog.andrej@gmail.com', 'м.Жмеринка, Вінницька область'),
(17, 'Andrej Pirog', 'oopirog.andrej@gmail.com', 'смт Залізничне, м.Козятин, Вінницька область'),
(18, 'Andrej Pirog', 'lpirog.andrej@gmail.com', 'Київський район міста, м.Харків, Харківська область'),
(19, 'Andrej Pirog', 'p2irog.andrej@gmail.com', 'с-ще Ружицьке, м.Ладижин, Вінницька область'),
(20, 'Andrej Pirog', 'pikkrog.andrej@gmail.com', 'м.Авдіївка, Донецька область'),
(21, 'Andrej Pirog', 'pik3krog.andrej@gmail.com', 'м.Авдіївка, Донецька область'),
(22, 'Andrej Pirog', 'pi3k3krog.andrej@gmail.com', 'Ворошиловський район міста, м.Донецьк, Донецька область'),
(23, 'Andrej Pirog', 'pirog.pandrej@gmail.com', 'Залізничний район міста, м.Сімферополь, Автономна Республіка Крим'),
(24, 'Andrej Pirog', 'pirog2.andrej@gmail.com', 'Замостянський район міста, м.Вінниця, Вінницька область');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
