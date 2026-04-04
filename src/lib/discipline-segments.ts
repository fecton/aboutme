import { splitCommaListRespectingParens } from "@/lib/split-comma-list";

/**
 * Parse raw discipline strings into individual chip labels: top-level comma split,
 * expand `AWS (svc1, svc2, …)` into separate services, strip redundant `AWS ` prefix.
 */
export function parseDisciplineListItems(rawItems: string[]): string[] {
	return rawItems
		.flatMap((raw) => splitCommaListRespectingParens(raw))
		.flatMap((segment) => expandAwsParentheticalSegment(segment))
		.map((s) => normalizeAwsPrefix(s))
		.filter(Boolean);
}

/**
 * Visible chip text. Lone `AWS` is icon-only (empty label); accessibility via aria-label.
 */
export function getDisciplineChipDisplayLabel(item: string): string {
	const t = item.trim();
	if (/^AWS$/i.test(t)) return "";
	return t;
}

function expandAwsParentheticalSegment(segment: string): string[] {
	const inner = tryExtractBalancedParenBody(segment, /^AWS\s*\(/i);
	if (inner === null) return [segment];
	const parts = splitCommaListRespectingParens(inner);
	return parts.length > 0 ? parts : [segment];
}

function tryExtractBalancedParenBody(full: string, prefix: RegExp): string | null {
	const trimmed = full.trim().replace(/\.$/, "");
	const match = trimmed.match(prefix);
	if (!match || match.index !== 0) return null;

	let depth = 1;
	let i = match[0].length;
	while (i < trimmed.length && depth > 0) {
		const c = trimmed[i];
		if (c === "(") depth++;
		else if (c === ")") depth--;
		i++;
	}
	if (depth !== 0) return null;

	const inner = trimmed.slice(match[0].length, i - 1).trim();
	return inner || null;
}

function normalizeAwsPrefix(item: string): string {
	const t = item.trim().replace(/\.$/, "");
	const withSpace = t.match(/^AWS\s+(.+)$/i);
	if (withSpace) return withSpace[1].trim().replace(/\.$/, "");
	return t;
}
