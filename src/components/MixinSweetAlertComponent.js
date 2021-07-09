import Swal from "sweetalert2";
import { useEffect } from "react";
const MixinSweetAlertComponent = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  useEffect(() => {
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  }, [Toast]);
};

export { MixinSweetAlertComponent };
