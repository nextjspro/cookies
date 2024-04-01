"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCookie = exports.getCookie = exports.setCookie = void 0;
/**
 * Sets a cookie with the given name, value, and options.
 * @param name - The name of the cookie to set.
 * @param value - The value of the cookie to set.
 * @param options - Optional options for setting the cookie.
 */
function setCookie(name, value, options = {}) {
    const { expires = 1, path = "/", domain, secure = false, samesite = "Strict", } = options;
    const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    const cookieOptions = [
        `path=${path}`,
        `max-age=${expires * 24 * 60 * 60}`, // Expires in the specified number of days
        domain ? `domain=${domain}` : "",
        secure ? "secure" : "",
        `samesite=${samesite}`,
    ]
        .filter(Boolean)
        .join("; ");
    document.cookie = `${cookieValue}; ${cookieOptions}`;
}
exports.setCookie = setCookie;
/**
 * Gets the value of the cookie with the given name.
 * @param name - The name of the cookie to get.
 * @returns The value of the cookie, or an empty string if the cookie is not found.
 */
function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? decodeURIComponent(cookieValue.pop() || "") : "";
}
exports.getCookie = getCookie;
/**
 * Removes the cookie with the given name.
 * @param name - The name of the cookie to remove.
 * @param options - Optional options for removing the cookie.
 */
function removeCookie(name, options = {}) {
    const { path = "/", domain, secure = false, samesite = "Strict" } = options;
    setCookie(name, "", {
        expires: -1, // Expires the cookie immediately
        path,
        domain,
        secure,
        samesite,
    });
}
exports.removeCookie = removeCookie;
