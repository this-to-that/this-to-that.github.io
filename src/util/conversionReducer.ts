import { convert, Metric } from "./conversionTable";

type ReducerState = {
	type: string;
	payload: Partial<ConversionState>;
};

export type ConversionState = {
	from: Metric;
	to: Metric;
	fromValue: number | null;
};

export default function conversionReducer(
	currentState: ConversionState,
	{ type, payload }: ReducerState
): ConversionState {
	switch (type) {
		case "toChanged":
			return {
				...currentState,
				to: payload.to!,
			};
		case "fromChanged":
			return {
				...currentState,
				from: payload.from!,
			};

		case "fromValueChanged":
			return {
				...currentState,
				fromValue: payload.fromValue!,
			};

		case "fromAndTwoSwitched":
			const to = currentState.to;
			return {
				...currentState,
				to: currentState.from,
				from: to,
				fromValue: 0,
			};
		default:
			return currentState;
	}
}
