import { ExternalLink, Star } from "lucide-react";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

import { GoogleIcon } from "@/components/GoogleIcon";
import { MobileCarousel } from "@/components/MobileCarousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { GoogleReviewDisplay, GoogleReviewsPayload } from "@/lib/google-reviews-shared";
import { GOOGLE_WRITE_REVIEW_URL } from "@/lib/site";

type GoogleReviewsSectionProps = {
  data: GoogleReviewsPayload;
};

function formatReviewDate(review: GoogleReviewDisplay): string | null {
  if (review.relativeTime) {
    return review.relativeTime;
  }
  if (!review.publishedAt) {
    return null;
  }
  try {
    return format(new Date(review.publishedAt), "LLLL yyyy", { locale: pl });
  } catch {
    return null;
  }
}

function authorInitials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return "G";
  }
  if (parts.length === 1) {
    return parts[0]!.slice(0, 1).toUpperCase();
  }
  return `${parts[0]!.slice(0, 1)}${parts[1]!.slice(0, 1)}`.toUpperCase();
}

function GoogleReviewCard({ review, profileUrl }: { review: GoogleReviewDisplay; profileUrl: string }) {
  const verifyUrl = review.authorProfileUrl ?? profileUrl;
  const dateLabel = formatReviewDate(review);
  const isNamedUser = review.authorName !== "Użytkownik Google Maps";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-spring md:text-left md:hover:-translate-y-1 md:hover:shadow-cool">
      <div className="flex items-center justify-center gap-3 md:justify-start">
        <Avatar className="h-11 w-11 ring-1 ring-border">
          {review.authorPhotoUrl ? (
            <AvatarImage src={review.authorPhotoUrl} alt="" />
          ) : null}
          <AvatarFallback className="bg-white text-sm font-semibold text-foreground">
            {isNamedUser ? authorInitials(review.authorName) : <GoogleIcon className="h-5 w-5" />}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 text-left">
          <p className="font-semibold text-foreground">{review.authorName}</p>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
            <div className="flex">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <GoogleIcon className="h-3.5 w-3.5" />
              Google Maps
            </span>
            {dateLabel ? <span className="text-xs text-muted-foreground">· {dateLabel}</span> : null}
          </div>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{review.text}&rdquo;</p>

      <a
        href={verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-accent transition-smooth hover:text-accent/80 md:justify-start"
      >
        Zobacz na Google Maps
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </article>
  );
}

export function GoogleReviewsSection({ data }: GoogleReviewsSectionProps) {
  const { rating, reviewCount, profileUrl, reviews, source } = data;
  const isLive = source === "google";

  return (
    <>
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mb-8 flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 shadow-card transition-spring hover:-translate-y-0.5 hover:shadow-cool"
      >
        <div className="flex items-center gap-3">
          <GoogleIcon className="h-7 w-7" />
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-foreground">{rating.toFixed(1)} / 5</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Na podstawie {reviewCount} opinii w Google Maps
          </p>
          {isLive ? (
            <p className="mt-2 text-xs font-medium text-accent">Opinie pobrane na żywo z Google</p>
          ) : (
            <p className="mt-2 text-xs text-muted-foreground">
              Wybrane opinie z publicznego profilu Google
            </p>
          )}
        </div>
      </a>

      <MobileCarousel
        items={reviews}
        renderItem={(review) => (
          <GoogleReviewCard key={review.id} review={review} profileUrl={profileUrl} />
        )}
      />
      <div className="hidden gap-5 md:grid md:grid-cols-3">
        {reviews.map((review) => (
          <GoogleReviewCard key={review.id} review={review} profileUrl={profileUrl} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-card transition-spring hover:-translate-y-0.5 hover:shadow-cool"
        >
          <GoogleIcon className="h-4 w-4" />
          Zobacz wszystkie opinie ({reviewCount})
        </a>
        {GOOGLE_WRITE_REVIEW_URL ? (
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-cool transition-spring hover:shadow-glow"
          >
            <Star className="h-4 w-4" />
            Dodaj opinię w Google
          </a>
        ) : null}
      </div>
    </>
  );
}
