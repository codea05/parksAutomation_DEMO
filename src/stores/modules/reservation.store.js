import { defineStore } from "pinia"
import { useI18n } from "vue-i18n"
import { useToast } from "vue-toastification"

export const useReservationStore = defineStore('reservation', () => {

  const toast = useToast()
  const { t } = useI18n()

  async function getReservationById(id) {
    if (!id) {
      toast.error(t('xReservationIdInvalid'), {
        timeout: false,
        position: 'top-right'
      })
    }
    else if (id != 1234) {
      toast.warning(t('xReservationNotFound'), {
        timeout: false,
        position: 'top-right'
      })
    } else {
      return new Promise((resolve, reject) => {
        const checkInDate = new Date().toLocaleDateString()
        const temp = new Date()
        const checkOutDate = temp.setDate(temp.getDate() + 1)
        resolve({
          id: id,
          name: 'John Doe',
          email: 'johnDoe@example.com',
          checkInDate: new Date().toLocaleDateString(),
          checkOutDate: new Date(checkOutDate).toLocaleDateString(),
        })
      })
    }
  }

  async function lookupReservation(body) {
    //if empty body, or body does not contain at least email, phone, or first and last name throw a toast
    if (!body || !body.email || !body.phone || (!body.firstName && !body.lastName)) {
      toast.error(t('xReservationLookupInvalid'), {
        timeout: false,
        position: 'top-right'
      })
    }
    else {
      return new Promise((resolve, reject) => {
        const checkInDate = new Date().toLocaleDateString()
        const temp = new Date()
        const checkOutDate = temp.setDate(temp.getDate() + 1)
        resolve({
          id: 1234,
          name: 'John Doe',
          email: 'johnDoe@example.com',
          phone: '123-456-7890'
        })
      })
    }
  }

  return { getReservationById, lookupReservation }

})