
import { authActions } from "../actions/auth"
import { me as meAPI} from "../api/auth"

export const me = () => {
    meAPI().then(u => authActions.fetch(u))
}