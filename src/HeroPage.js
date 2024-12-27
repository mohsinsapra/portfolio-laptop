/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const features = [
  {
    name: 'Analytics',
    href: '#',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon
  },
  {
    name: 'Engagement',
    href: '#',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: CursorClickIcon
  },
  { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon
  },
  {
    name: 'Automations',
    href: '#',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: RefreshIcon
  }
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon }
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon }
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-gray-50 py-10">
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
      {/* Header */}
      <div className="text-center border-b pb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Muhammad Mohsin</h1>
        <p className="text-gray-600 mt-2">FULLSTACK ENGINEER</p>
        <div className="mt-4">
          <p className="text-gray-500"> (46) 76-4361487 |  mohsin.sapra@gmail.com |  <a href="https://github.com/mohsinsapra" className="text-indigo-600">mohsinsapra</a></p>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900">Education</h2>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800">Blekinge Institute of Technology, Karlskrona, Sweden</h3>
          <p className="text-sm text-gray-600">MS COMPUTER SCIENCE (2022 - 2024)</p>
          <p className="text-gray-700 mt-1">Courses: Machine Learning, Deep Learning, Information Retrieval, Probability and Statistics, Big Data, Research Methodologies</p>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800">University of Gujrat, Gujrat, Pakistan</h3>
          <p className="text-sm text-gray-600">BS COMPUTER SCIENCE (2016 - 2020)</p>
          <p className="text-gray-700 mt-1">Courses: Programming Fundamentals, Data Structures, Analysis of Algorithms, Artificial Intelligence, Networking, Databases, IoT</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900">Skills</h2>
        <div className="mt-4">
          <p><span className="font-semibold">JavaScript:</span> React.js, Next.js, Nest.js, TypeScript, NodeJs, Express.js</p>
          <p><span className="font-semibold">AWS:</span> Athena, DynamoDB, S3, EC2, Lambda, CloudWatch, CodeCommit, CloudFront, SQS, RDS, Terraforms</p>
          <p><span className="font-semibold">System Design:</span> Microservices, Kafka, RabbitMQ, ElasticSearch/OpenSearch, Real-time Applications</p>
          <p><span className="font-semibold">Databases:</span> SQL (PostgreSQL, MySQL, SQL Server), NoSQL (MongoDB, DynamoDB, Firestore)</p>
          <p><span className="font-semibold">DevOps:</span> Linux, Docker, Jenkins, CI/CD, Git, GitLab, SVN</p>
          <p><span className="font-semibold">Hardware:</span> Arduino, Raspberry Pi, MDB, Vending Machines</p>
          <p><span className="font-semibold">Soft Skills:</span> Leadership, Communication, Team Management</p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900">Experience</h2>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800">Dosell AB, Stockholm, Sweden</h3>
          <p className="text-sm text-gray-600">FULL STACK ENGINEER (Dec 2022 - Present)</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Developed and maintained medical dispenser’s architecture with NestJS and ReactJS.</li>
            <li>Managed secure and scalable backend operations.</li>
            <li>Oversaw AWS for deployment, reliability, and scalability.</li>
            <li>Mentored juniors in full-stack practices.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800">Matrix Network International B.V. (Remote)</h3>
          <p className="text-sm text-gray-600">SOFTWARE ENGINEER (April 2021 - Nov 2022)</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Developed Crypto ATM machine "Bitbit ATM."</li>
            <li>Built remittance and mobile recharge web apps for Venezuela.</li>
            <li>Developed a crypto arbitrage bot for auto-trading.</li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900">Projects</h2>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800">Bitcoin ATM</h3>
          <p className="text-gray-700 mt-1">Developed hardware and integrated it with web APIs using microservices architecture.</p>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800">Venrecarga</h3>
          <p className="text-gray-700 mt-1">Integrated with Stripe, PayPal, and Open-node for payments.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">Achievements: Oracle Java Certified | IBM Blockchain Certified | Microsoft Office Certified</p>
      </div>
    </div>
  </div>
  )
}
