CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`avatar` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE TABLE `sessions` (
	`session_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_name` text NOT NULL,
	`upload_timestamp` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `sessions_session_name_unique` ON `sessions` (`session_name`);--> statement-breakpoint
CREATE TABLE `files` (
	`file_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`original_filename` text NOT NULL,
	`upload_timestamp` integer DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer)) NOT NULL,
	FOREIGN KEY (`session_id`) REFERENCES `sessions`(`session_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `rows` (
	`row_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`file_id` integer NOT NULL,
	`row_number_in_file` integer NOT NULL,
	FOREIGN KEY (`file_id`) REFERENCES `files`(`file_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `file_row_idx` ON `rows` (`file_id`,`row_number_in_file`);--> statement-breakpoint
CREATE TABLE `columns_metadata` (
	`column_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`file_id` integer NOT NULL,
	`column_name` text NOT NULL,
	`detected_data_type` text NOT NULL,
	FOREIGN KEY (`file_id`) REFERENCES `files`(`file_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `file_column_idx` ON `columns_metadata` (`file_id`,`column_name`);--> statement-breakpoint
CREATE TABLE `data_values` (
	`value_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`row_id` integer NOT NULL,
	`column_id` integer NOT NULL,
	`value_text` text,
	`value_integer` integer,
	`value_real` real,
	`value_datetime` text,
	`value_boolean` integer,
	FOREIGN KEY (`row_id`) REFERENCES `rows`(`row_id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`column_id`) REFERENCES `columns_metadata`(`column_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `row_column_idx` ON `data_values` (`row_id`,`column_id`);