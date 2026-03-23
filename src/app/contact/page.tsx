import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "合作咨询 | Jason Photography",
  description: "风光摄影商业授权与版画销售服务，欢迎合作咨询。",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20 text-center">
            <h1 className="font-serif text-4xl font-light tracking-[0.15em] text-foreground md:text-5xl">
              合作咨询
            </h1>
            <div className="mx-auto mt-4 h-px w-16 bg-accent" />
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted">
              期待与您合作，用镜头讲述更多故事
            </p>
          </div>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          {/* Left: Services */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <p className="text-sm leading-relaxed text-muted">
                多年来，我用镜头记录山川湖海的壮美与细腻。如果您正在寻找能够传递自然之美的影像，无论是用于商业项目还是空间装饰，欢迎与我联系。
              </p>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-accent">
                    商业授权
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    为品牌、出版物、广告及数字媒体提供高质量风光摄影作品的使用授权。根据使用场景和范围，提供灵活的授权方案。
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-accent">
                    版画销售
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    精选作品提供限量版艺术微喷印刷，采用博物馆级无酸纸张。适合家居、办公空间及收藏，每幅作品附有签名与编号。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Photo + Contact */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-8">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/photos/golden-hour.jpg"
                  alt="Golden hour landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xs tracking-[0.3em] uppercase text-accent">
                  联系方式
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:jason@example.com"
                    className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    jason@example.com
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    @jason.photography
                  </a>
                </div>
                <p className="pt-2 text-xs text-muted/60">
                  通常会在 24 小时内回复您的邮件
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
