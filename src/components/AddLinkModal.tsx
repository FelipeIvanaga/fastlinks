import { Dialog, Transition } from "@headlessui/react";
import { FormEvent, Fragment, useState } from "react";
import { ILink } from "../App";

type props = {
	addFunction: (link: ILink) => void;
};

export function AddLinkModal({ addFunction }: props) {
	const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState("");
	const [link, setLink] = useState("https://");

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	function resetForm() {
		setName("");
		setLink("https://");
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const linkToAdd: ILink = {
			name,
			address: link,
		};
		resetForm();
		addFunction(linkToAdd);
	}

	return (
		<>
			<div className="">
				<button
					type="button"
					onClick={openModal}
					className="text-sm font-bold"
				>
					Add New Link
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<form onSubmit={(e) => handleSubmit(e)}>
										<Dialog.Title
											as="h3"
											className="text-lg font-medium leading-6 text-gray-900"
										>
											Add new Link form
										</Dialog.Title>
										<div className="mt-2 space-y-4">
											<div className="flex flex-col">
												<label htmlFor="name">
													Name
												</label>
												<input
													type="text"
													id="name"
													className="transition-shadow text-sm px-2 py-2 border shadow-sm rounded-md font-medium outline-none focus:ring-2 focus:ring-indigo-400"
													value={name}
													onChange={(e) =>
														setName(e.target.value)
													}
												/>
											</div>
											<div className="flex flex-col">
												<label htmlFor="link">
													Link
												</label>
												<input
													type="text"
													id="link"
													className="transition-shadow text-sm px-2 py-2 border shadow-sm rounded-md font-medium outline-none focus:ring-2 focus:ring-indigo-400"
													value={link}
													onChange={(e) =>
														setLink(e.target.value)
													}
												/>
											</div>
										</div>
										<div className="mt-4 flex flex-row gap-2">
											<button
												type="submit"
												className="transition-shadow inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
												onClick={closeModal}
											>
												Save
											</button>
											<button
												type="button"
												className="transition-shadow inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
												onClick={closeModal}
											>
												Cancel
											</button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
