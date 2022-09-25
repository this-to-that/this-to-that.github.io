import { ConversionState } from "./conversionReducer";

type ConversionTableType = {
	in: number;
	nmi: number;
	ft: number;
	yd: number;
	mi: number;
	km: number;
	m: number;
	cm: number;
	mm: number;
	um: number;
	nm: number;
};

export const conversionTable: ConversionTableType = {
	in: 2.54,
	nmi: 185200,
	ft: 30.48,
	yd: 91.44,
	mi: 160934,
	km: 100000,
	m: 100,
	cm: 1,
	mm: 0.1,
	um: 1e-4,
	nm: 1e-7,
};

export type Metric = keyof ConversionTableType;

export const convert = (
	from: Metric,
	to: Metric,
	fromValue: number | null
): number | null => {
	if (fromValue == null || fromValue == 0) return null;
	return (
		(fromValue * conversionTable[from as keyof ConversionTableType]) /
		conversionTable[to as keyof ConversionTableType]
	);
};
