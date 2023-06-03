---
title: Simple SSO (Single Sign On) Implementation
date: "2023-06-03T22:12:03.284Z"
description: "Single sign on login is a way for a user to use one credential acquired from one location (app) across multiple applications. "
---



> This post is still in the draft stage, still receiving updates.
>

Single sign on login is a way for a user to use one credential acquired from one location (app) across multiple applications. 

For example, an organization has 3 web applications, and each one of those web apps require authentication in order to access content within the app, so instead of having the authentication flow built into each app, we instead create the fourth app which will handle all of the authentication that will be need across the other 3 applications.

## Scenario

 A user opens app A and is asked to authenticate before accessing apps content. The user clicks on Login button and is redirected to the authentication app (app4). The user authenticates on that app and immediately gets redirected back to app A with the login credentials needed to access app A’s content. Now the users session can be handled by app A because it has what it needs to do so.

## Implementation

Using the explanation above, we are going to implement SSO to Lazarus network. This simply means that all the applications within the organizations will have a central authentication application that generates login credentials for all apps

## Building the SSO Model

### Step 1 — Installing supabase SDK

Integrate supabase into application, because it will be used to handle for generating access token

### Step 2 — Authenticating with supabase

Have the user sign in using email and password or social sign on’s like google, facebook, twitter, apple etc. Hit supabase’s corresponding API to handle the sign in.

### Step 3 — Getting login credentials

Supabase will then generate and send back login credentials object which will contain the access token object.

### Step 4 — Extracting access token

Extract the access token from the login credentials and call the backend API that will be provided by Lazarus network which takes the access token acquired from step 3 as payload and send back a paseto as response

### Step 5 — Redirecting User 

Take paseto from step 4 and attach it to redirection url in order for the app the sent user to authentication app to handle the users session by decrypting the paseto.