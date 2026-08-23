import ListingPage from "@/components/listings/ListingPage";
import ListingViewSkeleton from "@/components/skeletons/ListingViewSkeleton";
import { Suspense } from "react";

export default async function Page({ params }) {
  const listingId = (await params).listingId;
  return (
    <Suspense fallback={<ListingViewSkeleton />}>
      <ListingPage listingId={listingId} />
    </Suspense>
  );
}
