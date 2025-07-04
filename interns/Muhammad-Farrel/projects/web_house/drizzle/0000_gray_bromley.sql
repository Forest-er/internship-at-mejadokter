CREATE TABLE `buyers` (
	`id_buyers` int AUTO_INCREMENT NOT NULL,
	`house_id` int NOT NULL,
	`nameB` text NOT NULL,
	`contact` text NOT NULL,
	`location` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `buyers_id_buyers` PRIMARY KEY(`id_buyers`)
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id_category` int AUTO_INCREMENT NOT NULL,
	`nameCat` text NOT NULL,
	`detail` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `categories_id_category` PRIMARY KEY(`id_category`)
);
--> statement-breakpoint
CREATE TABLE `house` (
	`id_house` int AUTO_INCREMENT NOT NULL,
	`name` text NOT NULL,
	`address` text NOT NULL,
	`price` text NOT NULL,
	`bed` int NOT NULL,
	`bath` int NOT NULL,
	`sqft` text NOT NULL,
	`picture` text NOT NULL,
	`category_id` int NOT NULL,
	`seller` text NOT NULL,
	`contact` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `house_id_house` PRIMARY KEY(`id_house`)
);
--> statement-breakpoint
ALTER TABLE `buyers` ADD CONSTRAINT `buyers_house_id_house_id_house_fk` FOREIGN KEY (`house_id`) REFERENCES `house`(`id_house`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `house` ADD CONSTRAINT `house_category_id_categories_id_category_fk` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id_category`) ON DELETE no action ON UPDATE no action;