import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { Ratelimit } = require("@upstash/ratelimit"); // ⚠️ Nota la R mayúscula
const { Redis } = require("@upstash/redis");

import dotenv from "dotenv";
dotenv.config();

// console.log("Ratelimit:", Ratelimit);
// console.log("Redis:", Redis);

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(4, "10 s"),
});

export default ratelimit;
