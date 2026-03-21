import Link from 'next/link'

const socialLinks = [
  { href: 'https://www.threads.com/@worthyai.tw', label: 'Threads' },
]

const navLinks = [
  { href: '/blog', label: '觀點' },
  { href: '/cases', label: '案例' },
  { href: '/diagnose', label: '流程健檢' },
  { href: '/about', label: '關於值說' },
]

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold text-foreground mb-2">
              值說
            </p>
            <p className="font-body text-base text-muted-foreground">
              AI 流程自動化服務
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-display text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {/* Threads official logo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 192 192"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.372-39.134 15.265-38.105 34.569.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.763-.169-39.059-7.489-48.435-21.744C37.677 135.15 32.44 116.679 32.206 96c.234-20.677 5.471-39.148 15.157-53.495 9.375-14.254 25.671-21.574 48.435-21.744 22.907.172 39.353 7.529 48.893 21.877 4.619 6.986 8.02 15.752 10.142 26.027l16.147-3.816c-2.668-12.66-7.049-23.564-13.094-32.537C145.786 14.75 124.965 5.18 96.108 5H96c-28.9.18-49.595 9.787-61.498 28.56C25.072 48.514 20.225 68.84 20.002 96v.027c.223 27.16 5.07 47.485 14.5 62.44C46.405 177.213 67.1 186.82 96 187h.108c25.91-.165 44.2-6.972 59.454-22.212 20.136-20.113 19.542-45.66 12.918-61.24-4.755-11.084-13.753-19.925-26.943-24.56ZM98.44 136.612c-10.44.588-21.286-4.098-21.82-14.135-.397-7.442 5.296-15.746 22.461-16.735 1.966-.113 3.895-.169 5.79-.169 6.235 0 12.068.606 17.371 1.765-1.978 24.702-13.754 28.713-23.802 29.274Z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="font-display text-sm text-muted-foreground mt-12">
          © 2026 值說 WorthIt｜版權所有
        </p>
      </div>
    </footer>
  )
}
