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
      'Blockchain is a new development in computer science. A blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking ownership in a network. “Public blockchains”, like the technology behind Bitcoin, are all about trustless and permissionless ledgers that need no centralized authority for oversight. “Private permissioned distributed ledgers” operate on similar technology but are essentially real time databases with shared and permissioned access and need a central trusted authority to control the permissions. Both are often referred to as blockchains but the two are really quite different.',
  },
  {
    title: 'Can blockchain be hacked?',
    description:
      'Blockchain is a new development in computer science. A blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking ownership in a network. “Public blockchains”, like the technology behind Bitcoin, are all about trustless and permissionless ledgers that need no centralized authority for oversight. “Private permissioned distributed ledgers” operate on similar technology but are essentially real time databases with shared and permissioned access and need a central trusted authority to control the permissions. Both are often referred to as blockchains but the two are really quite different.',
  },
  {
    title: 'Does blockchain have a future?',
    description:
      'Blockchain is a new development in computer science. A blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking ownership in a network. “Public blockchains”, like the technology behind Bitcoin, are all about trustless and permissionless ledgers that need no centralized authority for oversight. “Private permissioned distributed ledgers” operate on similar technology but are essentially real time databases with shared and permissioned access and need a central trusted authority to control the permissions. Both are often referred to as blockchains but the two are really quite different.',
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
