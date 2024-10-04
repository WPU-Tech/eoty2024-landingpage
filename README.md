# Code Fest

Code Fest is an open-source project aimed at fostering collaboration and learning through coding challenges, hackathons, and community-driven development. Whether you're a seasoned developer or a coding enthusiast, this repository provides a variety of fun and engaging coding exercises, real-world projects, and resources to enhance your skills.

## Table of Contents

- [Code Fest](#code-fest)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Database Design](#database-design)
  - [Developing](#developing)
  - [Building](#building)

## Features

- TBA

## Tech Stack

- TBA

## Database Design

```mermaid
erDiagram
	ColorScheme {
		value System
		value Dark
		value Light
	}
	User {
		String id PK  "dbgenerated(gen_random_uuid())"
		DateTime createdAt  "now()"
		DateTime updatedAt
		String name  "nullable"
		String username  "nullable"
		String bio  "nullable"
		String email  "nullable"
		DateTime emailVerified  "nullable"
		String image  "nullable"
	}
	UserSettings {
		String id PK  "dbgenerated(gen_random_uuid())"
		Boolean onboarded
		Boolean discordMember
		ColorScheme colorScheme "System"
		String userId FK
		String localeId FK
	}
	UserRoles {
		String id PK  "dbgenerated(gen_random_uuid())"
		String userId FK
		String roleId FK
	}
	Role {
		String id
		String name
		String description  "nullable"
		Boolean hoist
		Int position
		String color  "nullable"
		String icon  "nullable"
		String emoji  "nullable"
	}
	Locale {
		String id
		String languageCode
		String countryCode  "nullable"
		String script  "nullable"
		String formalName
		String nativeName
		String commonName  "nullable"
	}
	VerificationToken {
		String identifier
		String token
		DateTime expires
	}
	Account {
		String id PK  "dbgenerated(gen_random_uuid())"
		String userId FK
		String type
		String provider
		String providerAccountId
		String refreshToken  "nullable"
		String accessToken  "nullable"
		Int expiresIn  "nullable"
		String tokenType  "nullable"
		String scope  "nullable"
		String idToken  "nullable"
		String session_state  "nullable"
	}
	Session {
		String id PK  "dbgenerated(gen_random_uuid())"
		String sessionToken
		String userId FK
		DateTime expires
	}
	User }|--|{ UserSettings : settings
	UserSettings }|--|{ User : user
	UserSettings }o--|| Locale : locale
	UserSettings }o--|| ColorScheme : "enum:colorScheme"
	UserRoles }o--|| User : user
	UserRoles }o--|| Role : role
	Account }o--|| User : user
	Session }o--|| User : user

```

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.