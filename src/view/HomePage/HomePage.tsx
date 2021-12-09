import React from 'react';
import {
  HorizontalContentBox,
  HotContent,
  VerticalContentBox,
} from '../../component';

export function HomePage() {
  return (
    <>
      <HotContent />
      <HorizontalContentBox title="Post" />
      <VerticalContentBox title="Review" />
    </>
  );
}
