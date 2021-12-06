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
        <VerticalContentBox
          title="Review"
          items={[
            'https://play-lh.googleusercontent.com/K1_ITo6dwCwGhUu6I3tC0GreSeW2aN90BcEMeBT_X2tmLzGn9X0v-VtlfAkNwVCHB48=w1052-h592-rw',
            'https://play-lh.googleusercontent.com/aGuQQwqd57dCotsDQDidW27NxSH65_5Jcv-3xRAe1Tc2xL-5LOTYd0ODNYGpYdxZw3I=w1052-h592-rw',
            'https://play-lh.googleusercontent.com/a7xhCHImKBVrcfDQMROm-kY40MxuRzkgobDQfYj3YvDDuDuR_pHPbg54FqhUm_OYDIE=w1052-h592-rw',
            'https://play-lh.googleusercontent.com/vJlOcvDk9RBu0ejQY3C32ykLg05G5K-1ClaW0SOmys3-3yj_xOMxKx90Ft6QD3nUZGE=w1052-h592-rw',
            'https://play-lh.googleusercontent.com/K1_ITo6dwCwGhUu6I3tC0GreSeW2aN90BcEMeBT_X2tmLzGn9X0v-VtlfAkNwVCHB48=w1052-h592-rw',
            'https://play-lh.googleusercontent.com/hRSBGsYUMs4wnoxzvCHcwXKV3fOhX6oXuFZGsDIRXlCkSgG-jDkLCudyQcMVISKwoW8=w1052-h592-rw',
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
