const labelMap: Record<string, string> = {
	inch: "Inch (in)",
	nmi: "Nautical Mile (nmi)",
	ft: "Foot (ft)",
	yd: "Yard (yd)",
	mi: "Mile (mi)",
	km: "Kilometer (km)",
	m: "Meter (m)",
	cm: "Centimeter (cm)",
	mm: "Millimeter (mm)",
	um: "Micrometer (um)",
	nm: "Nanometer (nm)",
};

export default function labelled(key: string) {
	if (labelMap[key] != null) {
		return labelMap[key];
	} else {
		return key;
	}
}
