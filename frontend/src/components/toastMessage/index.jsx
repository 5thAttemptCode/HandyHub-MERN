import { toast } from 'react-hot-toast'


function ToastSuccess(props) {
  return toast.success(props.message, {
    style: {
      background: 'var(--successToast)'
    }
  })
}

function ToastError(props) {
  return toast.error(props.message, {
    style: {
      background: 'var(--errorToast)'
    }
  })
}

export { ToastSuccess, ToastError }