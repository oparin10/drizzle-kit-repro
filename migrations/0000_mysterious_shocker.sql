CREATE TABLE `admins` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text(255) NOT NULL,
	`last_name` text(255) NOT NULL,
	`email` text(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `admin_tokens` (
	`id` integer PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`admin_id` integer NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL,
	`expires_at` integer DEFAULT datetime('now', +1 day) NOT NULL,
	`revoked_at` integer,
	FOREIGN KEY (`admin_id`) REFERENCES `admins`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `candidates` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`phone_number` text NOT NULL,
	`password` text NOT NULL,
	`tokens` integer NOT NULL,
	`password_tokens` integer NOT NULL,
	FOREIGN KEY (`tokens`) REFERENCES `tokens`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`password_tokens`) REFERENCES `password_token`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `company` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `password_token` (
	`id` integer PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`candidate_id` integer NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL,
	`expires_at` integer DEFAULT datetime('now', +1 day) NOT NULL,
	`revoked_at` integer,
	FOREIGN KEY (`candidate_id`) REFERENCES `candidates`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `tokens` (
	`id` integer PRIMARY KEY NOT NULL,
	`value` text NOT NULL,
	`candidate_id` integer NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL,
	`expires_at` integer DEFAULT datetime('now', +1 day) NOT NULL,
	`revoked_at` integer,
	FOREIGN KEY (`candidate_id`) REFERENCES `candidates`(`id`) ON UPDATE no action ON DELETE no action
);
