const buckets = new Map<string, number[]>();

export interface RateLimitResult {
	allowed: boolean;
	retryAfterSeconds?: number;
}

export function rateLimit(key: string, limit = 3, windowMs = 15 * 60 * 1000): RateLimitResult {
	const now = Date.now();
	const windowStart = now - windowMs;
	const hits = (buckets.get(key) ?? []).filter((hit) => hit > windowStart);

	if (hits.length >= limit) {
		return {
			allowed: false,
			retryAfterSeconds: Math.ceil((hits[0] + windowMs - now) / 1000)
		};
	}

	hits.push(now);
	buckets.set(key, hits);

	if (buckets.size > 1000) {
		for (const [bucketKey, bucketHits] of buckets) {
			const activeHits = bucketHits.filter((hit) => hit > windowStart);
			if (activeHits.length === 0) buckets.delete(bucketKey);
			else buckets.set(bucketKey, activeHits);
		}
	}

	return { allowed: true };
}
