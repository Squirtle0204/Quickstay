import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function useCancelReservation() {
  const [loadingId, setLoadingId] = useState(null);
  const router = useRouter();

  const cancelReservation = async (reservationId) => {
    try {
      setLoadingId(reservationId);

      await axios.delete(`/api/reservations/${reservationId}`);

      toast("Reservation cancelled", {
        style: { color: "white", background: "#FF5A5F" },
      });

      router.refresh();
    } catch (error) {
      toast("Something went wrong", {
        style: { color: "white", background: "#FF5A5F" },
      });
      console.log(error);
    } finally {
      setLoadingId(null);
    }
  };

  return { loadingId, cancelReservation };
}
