import { Pool } from "pg/lib";

export const pool = new Pool({
  host: "ec2-54-211-255-161.compute-1.amazonaws.com",
  user: "fbmgibcfavkcnh",
  password: "913ca8a84d7ad53c9f2f2755453e0b4e5e176ce71ea06e58813e331a80687bf9",
  database: "d3er3fgkobdfp8",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});
