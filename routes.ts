/**
 * @description This file contains all accessible routes 
 * @type {string[]}
 */
export const publicRoutes = [
  "/"
]

/**
 * @description This file contains all private routes that redirects users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error"
]

/**
 * @description Prefix for API authentication routes
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * @description Default path to redirect users to after login
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"