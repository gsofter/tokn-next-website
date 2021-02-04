import { FaSquare } from 'react-icons/fa';
import Accordion from '../../components/Accordion';

const faqs = [
  {
    title: 'What is blockchain technology?',
    description:
      'Blockchain is a new development in computer science. A blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking ownership in a network. “Public blockchains”, like the technology behind Bitcoin, are all about trustless and permissionless ledgers that need no centralized authority for oversight. “Private permissioned distributed ledgers” operate on similar technology but are essentially real time databases with shared and permissioned access and need a central trusted authority to control the permissions. Both are often referred to as blockchains but the two are really quite different.',
  },
  {
    title: 'How blockchain works step by step.',
    description:
      "<b>Step 1) </b>  Someone requests a transaction. The transaction could involve cryptocurrency, tokens contracts, records or other information. <br/> <b> Step 2) </b> The requested transaction is broadcasted to a P2P network with the help of nodes. <br/> <b> Step 3) </b> The network of nodes validates the transaction and the user's status with the help of known algorithms, which are driven by either proof of work or proof of stake protocols <br/> <b> Step 4)  </b> Once the transaction is complete the new block is then added to the existing blockchain. In such a way that is permanent and unalterable. Activity on the blockchain is transparent to the extent a viewer has access to public key ID’s",
  },
  {
    title: 'Can blockchain be hacked?',
    description:
      'Blockchain is a new development in computer science. A blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking ownership in a network. “Public blockchains”, like the technology behind Bitcoin, are all about trustless and permissionless ledgers that need no centralized authority for oversight. “Private permissioned distributed ledgers” operate on similar technology but are essentially real time databases with shared and permissioned access and need a central trusted authority to control the permissions. Both are often referred to as blockchains but the two are really quite different.',
  },
  {
    title: 'Does blockchain have a future?',
    description:
      'Yes,we believe it does,  blockchain is a major advance in computer science that will have a significant impact. In the future, it will revolutionize business processes in many industries, but its adoption requires time and effort. ',
  },
  {
    title: 'Is public blockchain secure?',
    description:
      'Yes, public blockchains are a robust, secure, and trusted medium when executed properly. It adds entries to it’s ledger, which are validated by the wider user community rather than by a central authority.',
  },

  {
    title: 'What is asset tokenization and how does it work?',
    description:
      'Asset tokenization is the process of creating blockchain tokens representing an economic interest in and the associated rights to a specific fractional unit of an underlying real-world asset or business. Akin to buying shares in a company that owns an asset, tokens offer a new way to purchase and hold exposure to the asset with your rights now governed by smart contracts embedded in the blockchain code.',
  },
  {
    title: 'Who can use tokenization?',
    description:
      'Anyone who has an asset or a business that might want to embrace the new blockchain technology to raise finance, potentially from new sources of capital, and manage their investor base more efficiently. Not all tokens need to be issued on public blockchains, there are many private permissioned digital ledger technologies that can also offer similar benefits which also meet current regulatory compliance and oversight rules. ',
  },
  {
    title: 'Who invented blockchain?',
    description:
      'Blockchain technology was invented by an unknown person behind bitcoin, under the pseudonym of Satoshi Nakamoto.',
  },

  {
    title: 'How does a cryptocurrency work?',
    description:
      'A cryptocurrency is decentralized, meaning unlike fiat money, it’s controlled solely by users and computer algorithms. Cryptocurrency transactions are sent using software called cryptocurrency wallets. Each transaction leads back to a unique set of keystrokes, and whoever owns that passcode owns the amount of cryptocurrency associated with it. ',
  },
];

export default function OurNetworkPage() {
  return (
    <>
      <div className="section-1">
        <div className="w-full container">
          <h3 className="section-title border-b-4 border-secondary pb-8">
            Frequently Asked Questions
          </h3>
          {faqs.map((q, index) => (
            <div key={index}>
              <Accordion title={q.title} description={q.description} />
              <hr className="border-secondary border-t-4 my-8" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
