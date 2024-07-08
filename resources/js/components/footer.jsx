// import NextUI
import { Input, Button, Select, SelectItem, Divider } from '@nextui-org/react';

// import favicon
import { FaXTwitter, FaSquareInstagram, FaPinterest, FaSquareFacebook, FaGoogle, FaSquareVimeo, FaSquareYoutube } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="container pt-4">
			<div className="flex flex-col justify-center space-x-4 sm:flex-row sm:columns-4">
				<div className="ml-4 sm:w-1/4 sm:py-0 sm:ml-0">
					<div>
						<h3 className="font-medium text-lg">Secure payments with</h3>
					</div>
					<div>
						<img src="../../images/img/cards.png" alt="" className="img-responsive" />
					</div>
				</div>
				<div className="flex justify-center py-2 sm:w-1/4 sm:py-0 flex-col sm:justify-normal">
					<div>
						<h3 className="font-medium text-lg">About</h3>
					</div>
					<div>
						<ul className="text-sm">
							<li><a href="#">About us</a></li>
							<li><a href="#">Faq</a></li>
							<li><a href="#">Contact</a></li>
							<li><a href="#">Terms and conditions</a></li>
						</ul>
					</div>
				</div>
				<div className="flex justify-center py-2 sm:w-1/4 sm:py-0 flex-col sm:justify-normal" id="">
					<div>
						<h3 className="font-medium text-lg">Newsletter</h3>
					</div>
					<p className="text-sm">Join our newsletter to keep be informed about offers and news.</p>
					<div id="message-newsletter_2" className="pr-4">
						<form method="get" action="" name="newsletter" id="newsletter">
							<Input
								name="email_newsletter_2"
								label="email" id="email_newsletter_2"
								type="email" value=""
								placeholder="Entrez votre email"
								variant="flat"
								size="sm"
								className="py-1 sm:py-2 sm:w-64 sm:h-16" />
							<Button
								type="submit"
								value="Subscribe"
								id="submit-newsletter_2"
								variant="flat"
								size="sm"
								className="items-center font-semibold">INSCRIPTION</Button>
						</form>
					</div>
				</div>
				{/* <div className="flex justify-center pt-2 sm:w-1/4 sm:py-0 flex-col sm:justify-normal">
					<div>
						<h3 className="font-medium text-lg">Settings</h3>
					</div>
					<div className="styled-select text-sm">
						<Select
							className="py-1 w-24 sm:py-2 sm:w-24"
							name="currency" id="currency"
							variant="flat"
							size="sm"
							onChange="changeCurrency()">
							<SelectItem value="EUR" selected>EUR</SelectItem>
							<SelectItem value="USD">USD</SelectItem>
						</Select>
					</div>
				</div> */}
			</div>

			{/* <!-- End row --> */}
			<Divider className='w-96 mx-auto my-6' />
			<div className="flex justify-center pb-12">
				<div id="">
					<ul className="flex flex-row justify-center space-x-4 pt-1 sm:pt-4">
						<li><FaSquareFacebook /></li>
						<li><FaXTwitter /></li>
						<li><FaGoogle /></li>
						<li><FaSquareInstagram /></li>
						<li><FaPinterest /></li>
						<li><FaSquareVimeo /></li>
						<li><FaSquareYoutube /></li>
					</ul>
					<p className="flex justify-center text-gray-400">© MTAKEAWAY Food 2023</p>
				</div>
			</div>
			{/* <!-- End row --> */}
		</footer>
		);
}