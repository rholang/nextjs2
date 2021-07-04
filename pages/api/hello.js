// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const result = { name: "John Doe" };
  res.setHeader(
    "Cache-Control",
    result.error
      ? "public, s-maxage=60, max-age=60, stale-while-revalidate=60"
      : "public, immutable, s-maxage=31536000, max-age=31536000, stale-while-revalidate=60"
  );
  res.statusCode = 200;
  res.json(result);
};
