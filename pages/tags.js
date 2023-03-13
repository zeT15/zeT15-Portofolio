import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Tags() {
  const sortedTags = ['HTML', 'HTML5', 'Javascript', 'ECMAScript6', 'CSS', 'Node.js', 'ReactJS', 'AngularJS',
  'Next.js', 'PHP', 'Laravel', 'Wordpress', 'C/C++', 'C#', 'Java']
  const workSkills = [
    'Project Management Experience',
    'Strong Oral / Written Communication',
    'Adaptable / Flexible',
    'Balance Design & Functionality',
    'Expert Collaborator',
    'Problem Solver',
    'Independent',
    'Motivated',
    'Organized',
    'Passionate',
    'Quality Assurance',
    'Remote Work Experience'
    ]
  return (
    <>
      <PageSEO title={`Skills - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:leading-14">
            Development Skills
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {sortedTags.length === 0 && 'No skills found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                {` • ${t} `}
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:leading-14">
            Work Skills
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {workSkills.length === 0 && 'No skills found.'}
          {workSkills.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                {` • ${t} `}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
