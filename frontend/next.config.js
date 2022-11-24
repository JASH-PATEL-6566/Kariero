/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiKey: "AIzaSyA3QaYeq0XHogVE3hVGiNPacW12_c_bQ9A",
    authDomain: "kariero.firebaseapp.com",
    projectId: "kariero",
    storageBucket: "kariero.appspot.com",
    messagingSenderId: "272069512495",
    appId: "1:272069512495:web:7d7b4547167e4c7cc225da"
  }
}

module.exports = nextConfig
