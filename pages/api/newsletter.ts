import type { NextApiHandler } from "next";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;

const newsletterHandler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST") return res.setHeader("Allow", "POST").status(405).json({});

  const email = req.body.email;

  if (typeof email !== "string") return res.status(400).json({});

  if (!MAILERLITE_API_KEY) return res.status(500).json({ error: "API authorization token not found." });

  const response = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
      }),
    }
  );

  if (!response.ok) return res.status(500).json({ error: "Couldn't save to newsletter. Please try again. " });

  res.status(201).json({});
};

export default newsletterHandler;
