import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Timeline from '@/components/Timelines'
import Image from '@/components/Image'
import Typewriter from 'typewriter-effect'
import NewsletterForm from '@/components/NewsletterForm'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700 md:mt-16">
        <div className="mb-10 xl:grid xl:grid-cols-3">
          <div className="pr-8 xl:col-span-2">
            <p className="mb-4 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-3xl font-extrabold leading-[60px] tracking-tight text-transparent dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600 md:text-5xl md:leading-[86px]">
              접속해주셔서 감사합니다. <sapn className="text-white">👋</sapn>
            </p>
            <div className="space-y-3 text-lg leading-8 text-gray-600 dark:text-gray-400">
              <Typewriter
                options={{
                  strings: [
                    'Flutter Developer 입니다.',
                    '첫번째 프로그래밍언어는 파이썬입니다.',
                    '운동을 좋아합니다.',
                    '서울에 살고있습니다.',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <div className="flex flex-col">
                <Link href="/projects">
                  <a className="hover:underline">🚆경험한것</a>
                </Link>
                <Link href="https://programing-log.tistory.com/">
                  <a className="hover:underline">📋쓰는것</a>
                </Link>
                <Link href="/about">
                  <a className="hover:underline">🌝소개</a>
                </Link>
                <Link href="#">
                  <a className="hover:underline">📑이력서</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden scale-100 transition-all duration-200 ease-out xl:block xl:hover:scale-[1.15] ">
            <div className="flex flex-col overflow-hidden rounded-xl shadow-lg">
              <Image
                src={siteMetadata.image}
                alt="avatar"
                width="192px"
                height="384px"
                className=""
              />
              <span className="h-1.5 bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600"></span>
            </div>
          </div>
        </div>

        {/* <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div> */}
        <div>
          <Timeline />
        </div>

        {/* <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul> */}
      </div>
      {/* {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )} */}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
