import {
	DEP_GROUP_LABELS,
	DEP_GROUP_ORDER,
	type WritingDep,
} from "@/data/writing";

export function WritingDeps({ deps }: { deps: WritingDep[] }) {
	if (deps.length === 0) {
		return null;
	}

	return (
		<div className="mt-4 space-y-6">
			{DEP_GROUP_ORDER.map((group) => {
				const items = deps.filter((dep) => dep.group === group);
				if (items.length === 0) {
					return null;
				}
				return (
					<div key={group}>
						<h3 className="text-sm font-medium text-foreground">
							{DEP_GROUP_LABELS[group]}
						</h3>
						<ul className="mt-2 space-y-1 text-[length:var(--font-writing-body)] leading-[1.7] text-muted">
							{items.map((item) => (
								<li key={`${group}-${item.name}`}>
									<span className="text-foreground">{item.name}</span>
									<span> · {item.version}</span>
								</li>
							))}
						</ul>
					</div>
				);
			})}
		</div>
	);
}
