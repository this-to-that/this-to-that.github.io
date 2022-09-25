type Props = {
	placeholder?: string;
	handler?: any;
	value?: any;
	disabled?: any;
};

export default function Input({
	placeholder,
	handler,
	value,
	disabled,
}: Props) {
	return (
		<input
			type="number"
			className="border border-gray-400 block py-2 px-3 w-full mb-4 rounded-sm"
			placeholder={placeholder}
			onChange={handler}
			defaultValue={value}
			readOnly={disabled ?? false}
			step="any"
		/>
	);
}
