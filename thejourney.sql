-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2022 at 10:31 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `journey_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookmarks`
--

CREATE TABLE `bookmarks` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `journalId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookmarks`
--

INSERT INTO `bookmarks` (`id`, `userId`, `journalId`, `createdAt`, `updatedAt`) VALUES
(5, 2, 10, '2022-03-16 01:13:02', '2022-03-16 01:13:02'),
(9, 2, 2, '2022-03-17 10:21:41', '2022-03-17 10:21:41');

-- --------------------------------------------------------

--
-- Table structure for table `journals`
--

CREATE TABLE `journals` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `journals`
--

INSERT INTO `journals` (`id`, `title`, `userId`, `description`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'My First Visit to Bali', 1, '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis error, quam voluptatibus iste dolorum molestiae quis natus eos repudiandae, omnis totam alias iusto quidem perspiciatis temporibus facere rem voluptatem. Id in numquam repudiandae nobis nostrum tempore nemo cupiditate ullam adipisci consectetur, ipsum placeat sint, ad sequi itaque iure eaque possimus esse labore similique! Deleniti maiores velit atque iste earum, sint neque quod delectus, sunt fuga reprehenderit nostrum sequi sapiente eligendi illum exercitationem repellat quasi incidunt blanditiis assumenda! Cumque qui iste illum blanditiis, eligendi earum fuga tenetur sed unde iure vel. Harum suscipit tempore inventore commodi. Odio, repellat. Fugit rem nam praesentium repudiandae blanditiis minus. Inventore culpa placeat rerum veniam libero.</p>', 'dewata.png', '2022-03-12 14:39:19', NULL),
(2, 'Lockdown in London', 5, '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laboriosam minus voluptatum! Animi iusto magnam repudiandae a, amet fuga impedit nisi consectetur ipsa eveniet dolores corporis quibusdam temporibus quidem iste reiciendis neque facilis distinctio aliquid ea. Veritatis suscipit velit maxime optio architecto reprehenderit, impedit, recusandae libero odit eos quasi atque earum excepturi voluptas minus dolores cum debitis nemo in aspernatur sint? Dignissimos vitae doloribus cumque atque tempore. Natus autem repudiandae error cumque delectus, quasi et ipsa reiciendis soluta aliquam pariatur, commodi, ipsum magnam nobis ex sit asperiores?</p>', 'london.png', '2022-03-12 14:39:19', NULL),
(3, 'Honeymoon in Sydney', 2, '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis molestiae ex laborum a rem iusto nostrum labore neque. Dolorem iusto dolores temporibus praesentium quas eligendi sed voluptatem similique adipisci ad in, veniam aliquid, a placeat quae error sapiente sequi quisquam tempore fuga! Nam nisi necessitatibus maiores commodi corporis reiciendis ipsa autem odit consequuntur, illo molestiae modi explicabo earum a aliquam cum at veniam! Labore minus dolorem ullam ratione quam id dicta quasi dolore accusantium odio accusamus quisquam illo nulla aperiam quas, maxime quibusdam. Maiores aspernatur labore cumque vel ea perferendis exercitationem! Inventore, modi id! Asperiores commodi eius provident nulla? Earum accusamus quam inventore harum aperiam voluptas, neque minus fugit numquam eius suscipit quis odit hic, nam iure, assumenda possimus sint a eos nostrum? Perferendis asperiores placeat ullam eligendi itaque obcaecati.</p>', 'cheers.png', '2022-03-12 14:39:19', NULL),
(4, 'Romantic Valentine Day', 3, '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus veritatis cupiditate. Repellendus numquam, magni pariatur aperiam neque odio cupiditate, voluptas alias aut impedit nihil facere quibusdam rerum voluptates officia commodi maiores vel accusantium, et quis laboriosam tempore sunt veniam molestias. Unde sunt quis ab et, quibusdam amet in dolorem ad tempora numquam dolor dicta explicabo hic officia sed corporis neque est voluptas quaerat porro dolores earum laudantium cum placeat? Iure, voluptate corrupti. Officiis laudantium obcaecati reprehenderit facere nemo quae incidunt dolorem eos, magni cupiditate vel nam harum ipsum soluta fugiat doloribus doloremque voluptatibus exercitationem minima necessitatibus? Non, totam sit.</p>', 'paris.png', '2022-03-12 14:39:19', NULL),
(5, 'The Friendly Lifeguard', 4, '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eligendi? Esse similique exercitationem porro ipsum minima eos soluta facilis quibusdam sequi hic beatae odio, laborum odit nulla ab cupiditate fugiat pariatur magnam harum qui assumenda nihil temporibus modi. Illum corrupti quia, dicta unde quas aliquid velit impedit alias? Nostrum quae corporis asperiores ducimus dolore, odit rerum soluta possimus dignissimos iste atque eos fuga magni, culpa mollitia? Omnis ipsa aliquid dolore aspernatur aliquam nostrum nemo. Quo pariatur explicabo quibusdam soluta nisi expedita recusandae nam tempora aliquam corporis aperiam, labore vero, doloribus dolore minima fuga! Non id ea molestias velit beatae maxime!</p>', 'beachguy.png', '2022-03-12 14:39:19', NULL),
(6, 'The Beauty of Belitung Island', 6, '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis magni quasi amet hic sit mollitia nesciunt aliquam doloribus voluptatum eius quas omnis, et ad non voluptatibus ut deleniti totam voluptate sapiente ipsa, tempora alias aspernatur soluta. Accusantium voluptas perferendis culpa laboriosam deserunt asperiores natus veniam. Officiis, inventore nisi. Aperiam ipsa, nisi accusamus non alias, ab adipisci, dolores qui sapiente est velit temporibus itaque. Pariatur repellendus nemo nam quasi earum vel animi maxime in magnam? Voluptate facilis nihil autem enim officia, quis ab fugiat veritatis, hic quos saepe necessitatibus!</p>', 'diving.png', '2022-03-12 14:39:19', NULL),
(7, 'The Story of Hometown Girl', 2, '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis animi sapiente quas? Nesciunt inventore pariatur eos qui, dignissimos iure velit voluptas numquam consectetur assumenda nobis eius perspiciatis excepturi quas repudiandae, ipsam vitae suscipit. Voluptatem, itaque excepturi! Harum fugit molestias itaque eaque nisi voluptatum officia aut possimus nihil quae. Magnam architecto voluptas dolor atque eius voluptatum, error sapiente ex perferendis officia magni minima, suscipit doloremque ad nisi. Cumque laudantium inventore esse molestiae maiores enim nisi molestias rem libero velit sint atque suscipit maxime, minima quibusdam vel nam, veritatis nostrum placeat quasi? Natus laudantium illo necessitatibus, nemo voluptates dolore! Soluta velit fuga perspiciatis eveniet, itaque aut voluptatem provident illum quae inventore a repellendus corporis quo vitae nihil minus hic quam. Repellendus, fuga.</p>', 'lonely.png', '2022-03-12 14:39:19', '2022-03-14 15:28:35'),
(8, 'test', 1, '<p>lorem ipsum <i>dolor sit</i> amet <strong>consectetur </strong>adipisicing elit</p>', '1647246906029-Brick-Wallpaper-India-7.jpg', '2022-03-14 08:35:06', '2022-03-14 08:35:06'),
(9, 'test 2', 1, '<p>ngemil by kamil cemilan enak dan bergizi</p>', '1647247004143-ngemilbykamil3,5x3,5cm.jpg', '2022-03-14 08:36:44', '2022-03-14 08:36:44'),
(10, 'Introducing MBTI', 2, '<p><i>Lorem ipsum dolor sit amet</i>. MBTI is <strong>Myers Briggs Typing Indicator</strong>.</p>', '1647393118572-7fkf71e6yt351.jpg', '2022-03-16 01:11:58', '2022-03-16 01:11:58');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220308092746-create-user.js'),
('20220308093001-create-bookmark.js'),
('20220308094458-create-journal.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `image` varchar(255) DEFAULT 'default.jpg',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `address`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Bayu Perkasa', 'bayupks@tbc.net', '$2b$10$xKKhT5k75xT084wWcqVPp.GjerKoE3XBOXvMeGOZsGDTq87WOqWYi', '088234567890', 'Jl. Siliwangi No. 38, Pamulang, Tangerang Selatan', 'default.jpg', '2022-03-09 02:17:35', '2022-03-09 02:17:35'),
(2, 'Cahya Anugerah', 'cahyanugerah@tbc.net', '$2b$10$ulvbWUDfyOkVwFIvXEngCe9oQNb4uigKzw372qA67u6bgvpaCOksC', '085789012345', 'Jl. Ir. Juanda No. 1, Juanda, Jakarta Pusat', 'default.jpg', '2022-03-09 02:18:32', '2022-03-09 02:18:32'),
(3, 'Dani Santoso', 'danists0@tbc.net', '$2b$10$7ovHDrtaMe.FmutXxEhnWOo7rDOdTloUMgqms5RXYmL5/4dfM.OTm', '089678901234', 'Jl. Protokol No. 98C, Lenteng Agung, Jakarta Pusat', 'default.jpg', '2022-03-12 14:39:19', NULL),
(4, 'Ery Sugajima', 'erysugajimaaa@tbc.net', '$2b$10$7ovHDrtaMe.FmutXxEhnWOo7rDOdTloUMgqms5RXYmL5/4dfM.OTm', '081890123456', 'Jl. Raya Glodok No. 114 Lt. 8, Glodok, Jakarta Pusat', 'default.jpg', '2022-03-12 14:39:19', NULL),
(5, 'Farrel Arumski', 'farumski@tbc.net', '$2b$10$7ovHDrtaMe.FmutXxEhnWOo7rDOdTloUMgqms5RXYmL5/4dfM.OTm', '089765432109', 'Jl. Raya Citra Boulevard No. 6C, Cikupa, Tangerang', 'default.jpg', '2022-03-12 14:39:19', NULL),
(6, 'Gary Haryono', 'garyhjkl@tbc.net', '$2b$10$7ovHDrtaMe.FmutXxEhnWOo7rDOdTloUMgqms5RXYmL5/4dfM.OTm', '082109876543', 'Anwa Residende Kav. 18, Jl. Raya Jurangmangu, Ciputat, Tangerang Selatan', 'default.jpg', '2022-03-12 14:39:19', NULL),
(7, 'Cahya Anugerah Setiawan', 'cahyanugerah@tbc.net', '$2b$10$gY7yDh/d0XDqwYRVdTgVW.z5JV1ZXz5Luxo1yiB5C9YE.0WoGIGLa', '081122334455', 'Jl. Gatot Subroto', 'default.jpg', '2022-03-16 01:15:38', '2022-03-16 01:15:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `journalId` (`journalId`);

--
-- Indexes for table `journals`
--
ALTER TABLE `journals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookmarks`
--
ALTER TABLE `bookmarks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `journals`
--
ALTER TABLE `journals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD CONSTRAINT `bookmarks_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bookmarks_ibfk_2` FOREIGN KEY (`journalId`) REFERENCES `journals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `journals`
--
ALTER TABLE `journals`
  ADD CONSTRAINT `journals_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
