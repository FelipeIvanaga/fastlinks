import { ILink } from "../App";

type LinkProps = {
	link: ILink;
};

export function Link({ link }: LinkProps) {
	return (
		<div>
			<a id="test" href={link.address} target="_blank" rel="noreferrer noopener">
				<button className="bg-indigo-500 bg-opacity-80 px-4 py-2 rounded-full shadow hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all">
					{link.name}
				</button>
			</a>
		</div>
	);
}
