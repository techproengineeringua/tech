import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import ua from './_ua'

const { persistAtom } = recoilPersist()

export const languageState = atom({
  key: 'language',
  default: ua,
  effects_UNSTABLE: [persistAtom],
})
