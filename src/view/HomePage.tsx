import React from 'react';
import {
  Footer,
  Header,
  HorizontalContentBox,
  HotContent,
  VerticalContentBox,
} from '../component';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HotContent />
        <HorizontalContentBox title="Post" />
        <VerticalContentBox title="Review" />
      </main>
      <Footer />
    </>
  );
}
