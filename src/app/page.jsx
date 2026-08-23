import Listings from "@/components/listings/Listings";
import ListingCardSkeleton from "@/components/skeletons/ListingCardSkeleton";
import { Suspense } from "react";

export default async function Home(props) {
  const searchParams = await props.searchParams;
  return (
    <Suspense fallback={<ListingCardSkeleton />}>
      <Listings searchParams={searchParams} />
    </Suspense>
  );
}
