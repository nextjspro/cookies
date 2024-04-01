# NextJsPro Cookie Management

This package provides a simple and TypeScript-friendly way to manage cookies in your Next.js application. It includes three functions for setting, getting, and removing cookies with various options.

## Installation

To install the package, run the following command:

```
npm install @nextjspro/cookies
```

or if you're using Yarn:

```
yarn add @nextjspro/cookies
```

## Usage

Import the desired functions from the package and use them in your Next.js application:

```typescript
import { setCookie, getCookie, removeCookie } from "@nextjspro/cookies";

// Set a cookie
setCookie("myCookie", "hello");

// Set a cookie with parameters
setCookie("myCookie", "hello", { expires: 7, path: "/" });

// Get the value of a cookie
const cookieValue = getCookie("myCookie"); // 'hello'

// Remove a cookie
removeCookie("myCookie", { path: "/" });
```

### setCookie

The `setCookie` function sets a cookie with the given name, value, and options.

```typescript
setCookie(name: string, value: string, options?: CookieOptions);
```

- `name` (string, required): The name of the cookie to set.
- `value` (string, required): The value of the cookie to set.
- `options` (CookieOptions, optional): Optional options for setting the cookie.

### getCookie

The `getCookie` function gets the value of the cookie with the given name.

```typescript
getCookie(name: string): string;
```

- `name` (string, required): The name of the cookie to get.
- Returns: The value of the cookie, or an empty string if the cookie is not found.

### removeCookie

The `removeCookie` function removes the cookie with the given name and options.

```typescript
removeCookie(name: string, options?: CookieOptions);
```

- `name` (string, required): The name of the cookie to remove.
- `options` (CookieOptions, optional): Optional options for removing the cookie.

## TypeScript Support

This package is written in TypeScript and includes type definitions for better tooling support and type safety.

## Development

To develop or build the package, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Build the package: `npm run build` or `yarn build`
4. (Optional) Start the development server: `npm run dev` or `yarn dev`

The built package will be located in the `dist` directory.

## License

This package is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
