/**
 * Split a comma-separated list without breaking at commas inside (...).
 * Trims segments and strips a trailing period (matches prior split/trim behavior).
 */
export function splitCommaListRespectingParens(input: string): string[] {
	const parts: string[] = [];
	let depth = 0;
	let start = 0;

	for (let i = 0; i < input.length; i++) {
		const c = input[i];
		if (c === "(") {
			depth++;
		} else if (c === ")") {
			depth = Math.max(0, depth - 1);
		} else if (c === "," && depth === 0) {
			const segment = input.slice(start, i).trim().replace(/\.$/, "");
			if (segment) parts.push(segment);
			start = i + 1;
		}
	}

	const last = input.slice(start).trim().replace(/\.$/, "");
	if (last) parts.push(last);

	return parts;
}
