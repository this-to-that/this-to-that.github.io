type Props = {
	options: Array<string>;
	handler: any;
	value?: string;
};

import labelled from "../util/label";

export default function Dropdown({ options, handler, value }: Props) {
	return (
		<select
			className="block w-full mb-4 py-2 px-4 border border-gray-400 bg-gray-300"
			onChange={handler}
			value={value ?? ""}
		>
			{options.map((metric: string) => (
				<option value={metric} key={metric}>
					{labelled(metric)}
				</option>
			))}
		</select>
	);
}
