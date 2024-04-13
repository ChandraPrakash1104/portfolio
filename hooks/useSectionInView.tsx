'use client';

import {
  SectionName,
  activeSectionState,
  timeOfLastClickState,
} from '@/store/activeState';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const setActiveSection = useSetRecoilState(activeSectionState);
  const timeOfLastClick = useRecoilValue(timeOfLastClickState);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
