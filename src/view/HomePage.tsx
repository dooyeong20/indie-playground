import React from 'react';
import { Footer, Header, HorizontalContentBox, HotContent } from '../component';

export function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <HotContent />
        <HorizontalContentBox
          title="Post"
          items={[
            'https://play-lh.googleusercontent.com/2_M3GXptvR4z83AuWce9xAKKKhCOEZLVOeediIMRSe5hcKApDmLVefT9q8xpZZrWTB0=s96-rw',
            'https://play-lh.googleusercontent.com/DJexP6PO8dL06XvNrjG7plb7SW_SaxuNamO80ab512JA71lBEBUnaJCaZzlqWVrrlEiG=s128-rw',
            'https://play-lh.googleusercontent.com/DzZ3En2Wuhx8Jw3FsVsSsyfzT2csAOC5n4H8a64mXmiVp-N_lweEMSY62lbX8Ksc7Ps=s128-rw',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
