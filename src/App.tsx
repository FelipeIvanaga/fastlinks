import { useEffect, useState } from "react";
import { AddLinkModal } from "./components/AddLinkModal";
import { Link } from "./components/Link";

export type ILink = {
	name: string;
	address: string;
};

function getLinksFromLocalStorage(): ILink[] {
	const localLinks = localStorage.getItem("links");
	if (localLinks == null) return [];
	const parsedLinks: ILink[] = JSON.parse(localLinks);
	return parsedLinks;
}

function addLinkToLocalStorage(newLink: ILink): void {
	const localLinks = getLinksFromLocalStorage();
	localStorage.setItem("links", JSON.stringify([...localLinks, newLink]));
}

function App() {
	useEffect(() => {
		setLinks(getLinksFromLocalStorage());
	}, []);

	function handleAddLink(link: ILink) {
		addLinkToLocalStorage(link);
		setLinks([...links, link]);
	}

	const [links, setLinks] = useState<ILink[]>([]);

	return (
		<div className="mx-auto max-w-4xl">
			<div className="m-4 flex flex-row gap-4 items-end">
				<h1 className="text-4xl text-indigo-700">FastLinks #WIP</h1>
				<AddLinkModal addFunction={handleAddLink} />
			</div>
			<div className="flex flex-row gap-2 m-4 flex-wrap">
				{links.map((link: ILink, index: number) => (
					<Link link={link} key={index} />
				))}
			</div>
		</div>
	);
}

export default App;
