import { atom } from 'recoil';
import { links } from '../lib/data';

export type SectionName = (typeof links)[number]['name'];

export const activeSectionState = atom<SectionName>({
  key: 'activeSectionState',
  default: 'Home',
});

export const timeOfLastClickState = atom<number>({
  key: 'timeOfLastClickAtom',
  default: 0,
});
