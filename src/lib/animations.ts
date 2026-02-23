export const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

export const softSpringTransition = {
	type: "spring" as const,
	stiffness: 180,
	damping: 28,
};

export const instantTransition = { duration: 0 };
