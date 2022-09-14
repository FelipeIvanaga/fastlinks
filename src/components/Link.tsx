import { ILink } from "../App";

type LinkProps = {
	link: ILink;
};

export function Link({ link }: LinkProps) {
	return (
		<div>
			<a id="test" href={link.address} target="blank">
				<button className="bg-indigo-100 px-4 py-2 rounded-full shadow hover:shadow-lg transition-shadow">
					{link.name}
				</button>
			</a>
		</div>
	);
}
