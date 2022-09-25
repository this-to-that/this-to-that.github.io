import React, { SyntheticEvent, useEffect, useReducer, useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import conversionReducer, { ConversionState } from "./util/conversionReducer";
import { conversionTable, convert, Metric } from "./util/conversionTable";

export default function App() {
	const [{ fromValue, to, from }, dispatch] = useReducer(conversionReducer, {
		to: "in",
		from: "in",
		fromValue: null,
	});

	const [outputValue, setOutputValue] = useState<number | null>(null);

	const fromHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		dispatch({
			type: "fromChanged",
			payload: { from: e.target.value as Metric },
		});
	};

	const toHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		dispatch({
			type: "toChanged",
			payload: { to: e.target.value as Metric },
		});
	};

	const fromValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		let value: number | null = parseFloat(e.target.value);
		if (isNaN(value)) {
			value = null;
		}
		dispatch({
			type: "fromValueChanged",
			payload: { fromValue: value },
		});
	};

	useEffect(() => {
		const outputValue = convert(from, to, fromValue);
		setOutputValue(outputValue);
	}, [from, to, fromValue]);

	return (
		<div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
			<div className="w-full text-center py-4 bg-gray-300 mb-52">
				⭐ this repository on{" "}
				<a className="underline" href="https://www.google.com">
					GitHub
				</a>
			</div>
			<div className="mx-auto w-5/6 md:w-3/4 lg:w-1/3">
				<div className="bg-gray-100 p-6 text-center">
					<div className="text-lg mb-4">Convert one metric to another</div>
					<Input
						placeholder="Enter input"
						handler={(e: React.ChangeEvent<HTMLInputElement>) =>
							fromValueHandler(e)
						}
						value={fromValue}
					/>
					<div className="flex gap-2">
						<div className="flex-1">
							<div className="float-left -mt-1 text-sm">From:</div>
							<Dropdown
								options={Object.keys(conversionTable)}
								handler={(e: React.ChangeEvent<HTMLSelectElement>) =>
									fromHandler(e)
								}
								value={from}
							/>
						</div>
						<div className=" flex-1">
							<div className="float-left -mt-1 text-sm">To: </div>
							<Dropdown
								options={Object.keys(conversionTable)}
								handler={(e: React.ChangeEvent<HTMLSelectElement>) =>
									toHandler(e)
								}
								value={to}
							/>
						</div>
					</div>
					<Input value={outputValue} disabled={true} />
					<div className="float-left -mt-2 text-xs">
						(All conversions are approximate)
					</div>
				</div>
			</div>
			<footer className="w-full text-center py-4 bg-gray-300">
				Made with ❤️ and ⚛
			</footer>
		</div>
	);
}
